import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(() => {
  // Build-time pre-build normalizer to ensure cross-platform casing and nested file issues can never break Netlify builds
  try {
    const rootDir = process.cwd();
    const srcDir = path.join(rootDir, 'src');
    const isNetlify = process.env.NETLIFY === 'true' || rootDir.includes('opt/build') || rootDir.includes('netlify');

    console.log("=== RUNNING BULLETPROOF BUILD-TIME NORMALIZER ===");
    console.log("Root directory:", rootDir);
    console.log("Is Netlify environment:", isNetlify);

    // 1. Ensure the top-level src/ directory exists
    if (!fs.existsSync(srcDir)) {
      console.log("Top-level src/ folder missing! Creating it.");
      fs.mkdirSync(srcDir, { recursive: true });
    }

    // Helper to recursively find a file on disk matching a specific lowercase filename
    const findFileRecursively = (dir: string, targetName: string): string | null => {
      if (!fs.existsSync(dir)) return null;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          // Skip large/system dirs
          if (['node_modules', '.git', '.netlify', 'dist'].includes(entry.name)) {
            continue;
          }
          const found = findFileRecursively(fullPath, targetName);
          if (found) return found;
        } else if (entry.isFile() && entry.name.toLowerCase() === targetName.toLowerCase()) {
          // Ignore top-level exact matches in srcDir to avoid endless cycles
          if (dir === srcDir) continue;
          return fullPath;
        }
      }
      return null;
    };

    // 2. Locate necessary target files and ensure they exist at the correct top-level location
    const targets = [
      { name: 'App.tsx', targetPath: path.join(srcDir, 'App.tsx') },
      { name: 'Main.tsx', targetPath: path.join(srcDir, 'Main.tsx') },
      { name: 'index.css', targetPath: path.join(srcDir, 'index.css') }
    ];

    for (const req of targets) {
      if (!fs.existsSync(req.targetPath)) {
        console.log(`Missing required top-level file: ${req.targetPath}, searching recursively...`);
        const found = findFileRecursively(rootDir, req.name);
        if (found) {
          console.log(`Found candidate for ${req.name} at: ${found}. Aligning to ${req.targetPath}`);
          fs.copyFileSync(found, req.targetPath);
        } else {
          console.error(`CRITICAL: Could not find any version of ${req.name} anywhere!`);
        }
      }
    }

    // 3. For Netlify environment, generate lowercase and uppercase duplicate scripts to bypass case sensitive resolution errors
    if (isNetlify) {
      console.log("Generating casing duplicates for Netlify build...");
      const topApp = path.join(srcDir, 'App.tsx');
      if (fs.existsSync(topApp)) {
        const content = fs.readFileSync(topApp);
        fs.writeFileSync(path.join(srcDir, 'APP.tsx'), content);
        fs.writeFileSync(path.join(srcDir, 'app.tsx'), content);
      }
      
      const topMain = path.join(srcDir, 'Main.tsx');
      if (fs.existsSync(topMain)) {
        const content = fs.readFileSync(topMain);
        fs.writeFileSync(path.join(srcDir, 'main.tsx'), content);
      }

      const topCss = path.join(srcDir, 'index.css');
      if (fs.existsSync(topCss)) {
        const content = fs.readFileSync(topCss);
        fs.writeFileSync(path.join(srcDir, 'Index.css'), content);
      }

      // Clean up nested duplicate src/src folder configuration
      const nestedSrc = path.join(srcDir, 'src');
      if (fs.existsSync(nestedSrc)) {
        console.log("Removing redundant nested src/src folder in Netlify container...");
        fs.rmSync(nestedSrc, { recursive: true, force: true });
      }

      // Clean up common duplicate config files inside src/
      const confs = ['index.html', 'package.json', 'package-lock.json', 'tsconfig.json', 'vite.config.ts', 'netlify.toml'];
      for (const c of confs) {
        const confPath = path.join(srcDir, c);
        if (fs.existsSync(confPath)) {
          console.log(`Removing redundant config file in src/: ${confPath}`);
          fs.unlinkSync(confPath);
        }
      }
    } else {
      // Local AI Studio environment: Ensure no rogue casing duplicates can confuse tsc --noEmit
      const cleanupLocal = [
        path.join(srcDir, 'APP.tsx'),
        path.join(srcDir, 'app.tsx'),
        path.join(srcDir, 'main.tsx'),
        path.join(srcDir, 'Index.css')
      ];
      for (const item of cleanupLocal) {
        if (fs.existsSync(item)) {
          console.log(`Cleaning local casing duplicates to prevent TypeScript warnings: ${item}`);
          fs.unlinkSync(item);
        }
      }
    }

    console.log("=== BUILD-TIME NORMALIZATION COMPLETED ===");
  } catch (err) {
    console.warn("Prebuild normalizer warning:", err);
  }

  return {
    base: './',
    plugins: [react(), tailwindcss(), viteSingleFile()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
