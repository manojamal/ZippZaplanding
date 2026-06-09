import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(() => {
  // Let's log directory contents to debug Netlify structure
  try {
    const rootDir = process.cwd();
    console.log("=== DEBUG DIRECTORY LISTING ===");
    console.log("Root directory:", rootDir);
    console.log("Files/Dirs in root:", fs.readdirSync(rootDir));
    const srcDir = path.join(rootDir, 'src');
    if (fs.existsSync(srcDir)) {
      console.log("Files inside src/ :", fs.readdirSync(srcDir));
    } else {
      console.log("src/ directory does NOT exist!");
    }
    console.log("===============================");
  } catch (err) {
    console.warn("Failed to debug directories:", err);
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
