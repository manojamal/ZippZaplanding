import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Gift,
  Sparkles,
  Settings,
  Building,
  Check,
  Globe,
  Lock,
  Heart,
  ArrowRight,
  ChevronRight,
  Info,
  MapPin,
  CheckCircle2,
  RefreshCw,
  Star,
  Compass,
  Smile,
  Shield,
  Layers,
  Award,
  Instagram,
  Linkedin,
  Twitter,
  Upload,
  Zap,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Image Imports for reliable relative bundling in Vite and Netlify
import classicGatheringImg from "./assets/images/classic_gathering_1781200667417.jpg";
import northernShagaliImg from "./assets/images/northern_shagali_1781200680326.jpg";
import southernWeddingImg from "./assets/images/southern_wedding_1781200698171.jpg";
import luxuryGiftHamperImg from "./assets/images/luxury_gift_hamper_1781200715481.jpg";
import familyGiftsMessagesImg from "./assets/images/family_gifts_messages_1781205583719.jpg";
import anniversaryCelebrationImg from "./assets/images/anniversary_celebration_1781204381053.jpg";
import babyShowerMilestoneImg from "./assets/images/baby_shower_milestone_1781204396216.jpg";
import familyCelebrationGiftsImg from "./assets/images/family_celebration_gifts_1781205082040.jpg";
import familyMilestoneImg from "./assets/images/family_milestone_1781201170506.jpg";
import corporateMilestoneImg from "./assets/images/corporate_milestone_1781200750195.jpg";

// Types
interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
  spin: number;
}

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interestType: string;
}

// Custom Fallback logo
const ZippZapLogo = ({ isDarkBg = false, customLogoUrl = null }: { isDarkBg?: boolean; customLogoUrl?: string | null }) => {
  if (customLogoUrl) {
    return (
      <div className="flex items-center group cursor-pointer select-none py-1 transition-all duration-300">
        <div className="relative flex items-center justify-center bg-stone-50 border border-stone-200/80 shadow-inner rounded-2xl p-2 md:p-2.5 transition-all duration-300 group-hover:border-indigo-400 group-hover:bg-white min-w-[56px] min-h-[56px]">
          <img
            src={customLogoUrl}
            alt="Custom Brand Logo"
            className="h-11 sm:h-14 max-w-[210px] object-contain rounded-xl transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none py-1">
      <svg
        viewBox="0 0 100 92"
        className="w-10 h-10 transition-transform duration-500 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bolt1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E23F5" />
            <stop offset="100%" stopColor="#2D5AFE" />
          </linearGradient>
          <linearGradient id="bolt2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D5AFE" />
            <stop offset="100%" stopColor="#1C1CD0" />
          </linearGradient>
        </defs>
        {/* Bolt 1 */}
        <path
          d="M32 6 L9 50 H24 L10 88 L41 44 H26 Z"
          fill="url(#bolt1)"
          className="transition-all duration-300 group-hover:brightness-110"
        />
        {/* Bolt 2 (shifted right, matching ZippZap symbol) */}
        <path
          d="M58 6 L35 50 H50 L36 88 L67 44 H52 Z"
          fill="url(#bolt2)"
          className="transition-all duration-300 group-hover:brightness-110 animate-pulse"
        />
      </svg>
      <span className={`font-sans font-[900] text-2xl md:text-3xl tracking-tight leading-none ${isDarkBg ? 'text-white' : 'text-[#0C0E1E]'}`}>
        ZippZap
      </span>
    </div>
  );
};

// High-Performance Scroll-Linked Fade In Component
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string; key?: React.Key }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible on mount so it's guaranteed to be seen regardless of iframe observers
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Arewa Knot (Northern Knot) Vector - Cultural ornament
const ArewaKnot = ({ className = "w-full h-full text-[var(--blue)]/5" }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Inner diamond */}
    <path
      d="M50 12 L88 50 L50 88 L12 50 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Concentric weaves */}
    <path
      d="M50 20 L80 50 L50 80 L20 50 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Symmetrical loops */}
    <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path
      d="M50 5 L50 95 M5 50 L95 50"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeDasharray="2 4"
      strokeLinecap="round"
    />
    {/* Corner circular crowns */}
    <circle cx="50" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="88" cy="50" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="88" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="50" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

// Yoruba Coral Beads (Ileke) Orbit - Cultural ornament
const CoralBeadOrb = ({ className = "w-full h-full text-[var(--blue)]/5" }) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="60"
      cy="60"
      r="48"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="2 6"
      className="animate-spin"
      style={{ animationDuration: "60s" }}
    />
    <circle
      cx="60"
      cy="60"
      r="36"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      strokeDasharray="3 4"
      className="animate-spin"
      style={{ animationDuration: "30s", animationDirection: "reverse" }}
    />
    {/* Outer coral bead clusters */}
    <g>
      <circle cx="60" cy="12" r="5" fill="currentColor" />
      <circle cx="94" cy="26" r="5" fill="currentColor" />
      <circle cx="108" cy="60" r="5" fill="currentColor" />
      <circle cx="94" cy="94" r="5" fill="currentColor" />
      <circle cx="60" cy="108" r="5" fill="currentColor" />
      <circle cx="26" cy="94" r="5" fill="currentColor" />
      <circle cx="12" cy="60" r="5" fill="currentColor" />
      <circle cx="26" cy="26" r="5" fill="currentColor" />
      {/* Offsets */}
      <circle cx="77" cy="16" r="4" fill="currentColor" />
      <circle cx="103" cy="42" r="4" fill="currentColor" />
      <circle cx="103" cy="78" r="4" fill="currentColor" />
      <circle cx="77" cy="104" r="4" fill="currentColor" />
      <circle cx="43" cy="104" r="4" fill="currentColor" />
      <circle cx="17" cy="78" r="4" fill="currentColor" />
      <circle cx="17" cy="42" r="4" fill="currentColor" />
      <circle cx="43" cy="16" r="4" fill="currentColor" />
    </g>
    <circle cx="60" cy="60" r="18" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="60" cy="60" r="8" fill="currentColor" className="animate-pulse" />
  </svg>
);

// Theme style configurations
const THEME_VARIABLES = {
  default: {
    "--blue": "#2B2BE8",
    "--blue-l": "#5252F5",
    "--blue-bg": "#EEEDFD",
    "--blue-bdr": "#C7C6F9",
    "--teal": "#0F766E",
    "--teal-dk": "#0D5C56",
    "--teal-bg": "#F0FDFB",
    "--gold": "#D97706",
    "--pink": "#DB2777",
    "--purple": "#8B5CF6",
    "--purple-bg": "#F5F3FF",
    "--navy": "#0C0E1E",
    "--slate": "#334155",
    "--dark": "#0C0E1E",
    "--dark-mid": "#1E293B",
    "--text": "#1C1917",
    "--text-mid": "#44403C",
    "--text-muted": "#78716C",
    "--text-light": "#A8A29E",
    "--border": "#E7E5E0",
    "--bg": "#FAF9F6",
    "--bg-soft": "#F5F3EE",
    "--bg-section": "#F0EDE8"
  },
  northern: {
    "--blue": "#2E3192",            // --north-indigo
    "--blue-l": "#4144B5",          // Lighter indigo blue
    "--blue-bg": "rgba(46, 49, 146, 0.08)",
    "--blue-bdr": "rgba(46, 49, 146, 0.25)",
    "--teal": "#D4AF37",            // --north-sand (Northern Savannah Gold)
    "--teal-dk": "#B4932F",
    "--teal-bg": "rgba(212, 175, 55, 0.12)",
    "--gold": "#D4AF37",
    "--pink": "#EA580C",            // Sandstone Sunset red
    "--purple": "#1F2269",          // Deep royal caliphate indigo
    "--purple-bg": "rgba(31, 34, 105, 0.12)",
    "--navy": "#0A0B26",
    "--slate": "#3A3D73",
    "--dark": "#0F1138",            // Royal indigo dark velvety
    "--dark-mid": "#090A24",
    "--text": "#0F172A",
    "--text-mid": "#334155",
    "--text-muted": "#64748B",
    "--text-light": "#94A3B8",
    "--border": "rgba(212, 175, 55, 0.3)", // Terracotta sand dunes borders
    "--bg": "#FCFAF4",              // Prestigious Saharan white parchment
    "--bg-soft": "#FAF4DF",         // Smooth desert sands
    "--bg-section": "#F2EAC4"       // Warm clay savannah grounds
  },
  southern: {
    "--blue": "#004D2C",            // --south-lush (Deep Rain Forest Canopy)
    "--blue-l": "#008751",          // --ng-green
    "--blue-bg": "rgba(0, 77, 44, 0.08)",
    "--blue-bdr": "rgba(0, 77, 44, 0.25)",
    "--teal": "#FFD700",            // --south-gold
    "--teal-dk": "#C5A000",
    "--teal-bg": "rgba(255, 215, 0, 0.15)",
    "--gold": "#FFD700",
    "--pink": "#DC2626",            // Coronation Coral red
    "--purple": "#42020A",          // Sacred Benin Royal Mahogany
    "--purple-bg": "rgba(66, 2, 10, 0.12)",
    "--navy": "#2B0106",            // Rich cacao mahogany
    "--slate": "#400A11",
    "--dark": "#270202",            // Benin Bronze Crimson Dark
    "--dark-mid": "#450A0A",
    "--text": "#0F172A",
    "--text-mid": "#334155",
    "--text-muted": "#64748B",
    "--text-light": "#94A3B8",
    "--border": "rgba(0, 77, 44, 0.22)", // Forest frame
    "--bg": "#FFFDF9",              // Rich Benin Ivory White
    "--bg-soft": "#FDF2F2",         // Light coral sand
    "--bg-section": "#FAECE6"       // Warm cocoa mud floor accent
  }
};

// High-fidelity generated image assets mapping for theme-aware elements
const THEME_IMAGES = {
  default: familyGiftsMessagesImg,
  northern: northernShagaliImg,
  southern: southernWeddingImg,
};

const THEME_IMAGE_LABELS = {
  default: {
    title: "Happily Celebrate Across Distances",
    tag: "Global Milestones Coordinate",
    description: "Families jumping with celebration, opening beautiful gift boxes, and sharing love on-screen, no matter the logging distances."
  },
  northern: {
    title: "Shagali Arewa",
    tag: "Northern Traditional Royalty",
    description: "Aesthetic honors, kaftan deliveries, and family contributions under royal decor."
  },
  southern: {
    title: "Southern Majesty",
    tag: "Yoruba & Igbo Coral Jubilee",
    description: "Rich traditional weddings, chieftaincy celebrations, and audited guest ledger coordinates."
  }
};

// Detailed custom brand databases for popups
const BRAND_DETAILS = {
  "ZippZap Moments": {
    emoji: "🎉",
    title: "ZippZap Moments",
    subtitle: "Share real group love with friends & family",
    desc: "ZippZap Moments turns ordinary milestones into unforgettable shared celebrations. Create collaborative greeting boards, collect high-resolution memories, and organize hassle-free contribution pools for birthdays, weddings, baby showers, or send-offs.",
    features: [
      "Custom aesthetic milestone landing pages",
      "One-click multi-user digital card signings",
      "Seamless secure financial contribution pools",
      "Real-time countdowns & auto-delivering reveals"
    ],
    accentColor: "var(--blue)"
  },
  "ZippZap Teams": {
    emoji: "🏢",
    title: "ZippZap Teams",
    subtitle: "Enterprise-grade culture & workplace milestone tools",
    desc: "ZippZap Teams is the ultimate culture ecosystem for distributed, hybrid, and remote organizations. Automate work anniversaries, coordinate group gift collection pools, and bring genuine visibility to peer-to-peer recognition.",
    features: [
      "Direct HRIS Integrations (Workday, BambooHR)",
      "Native Slack & Microsoft Teams notification bots",
      "Enterprise security compliance & custom budgets",
      "Automated calendar milestones at absolute scale"
    ],
    accentColor: "#10B981"
  },
  "ZippZap Circle": {
    emoji: "⭕",
    title: "ZippZap Circle",
    subtitle: "Coordinate local committees, classes, & communities",
    desc: "ZippZap Circle empowers local communities, residential neighborhoods, school groups, and rotating savings clubs. Group pooling and event-planning coordinates are tracked transparently without messy spreadsheets.",
    features: [
      "School class & neighborhood rotating coordinator setups",
      "Zero-commission fully transparent ledger auditing",
      "Multi-admin permission levels & security controls",
      "Downloadable ledger history sheets for bookkeeping"
    ],
    accentColor: "#8B5CF6"
  },
  "ZippZap Gifts": {
    emoji: "🎁",
    title: "ZippZap Gifts",
    subtitle: "Curated physical hampers & voucher marketplace",
    desc: "ZippZap Gifts translates digital affection into tangible real-world joy. Access a direct market of artisan food arrangements, locally-sourced hampers, physical gift baskets, and direct digital vouchers from global retail partners.",
    features: [
      "Artisanal physical hampers & custom floral baskets",
      "Instant retail voucher coordinate deliveries",
      "Secure shipping directly to hidden secret addresses",
      "Verified local sellers ensuring hand-crafted quality"
    ],
    accentColor: "#F59E0B"
  }
};


// Fully interactive smartphone simulator showcasing live custom greeting ledger and joint gift pooling
const PhoneSimulator = ({ parentTheme, customLogoUrl }: { parentTheme: string; customLogoUrl: string | null }) => {
  const [activeTab, setActiveTab] = React.useState<"card" | "pool">("card");
  const [eventPreset, setEventPreset] = React.useState<"birthday" | "wedding" | "anniversary" | "babyshower">("birthday");
  const [simName, setSimName] = React.useState("");
  const [simText, setSimText] = React.useState("");
  const [simNotes, setSimNotes] = React.useState([
    { name: "Auntie Ronke", msg: "Wishing you long life and divine favor! 🥂", time: "2m ago" },
    { name: "Kunle J.", msg: "Let's party! More blessings to the family! 🎉", time: "15m ago" },
    { name: "Grandpa Musa", msg: "May this season bring everlasting peace. Allah bless.", time: "1h ago" }
  ]);
  const [pooledAmt, setPooledAmt] = React.useState(185000);
  const targetAmt = 250000;
  const [sparkleHeart, setSparkleHeart] = React.useState(false);

  const presets = {
    birthday: {
      image: familyGiftsMessagesImg,
      title: "Nosa's 30th Birthday Bash",
      desc: "Families are jumping with celebration, sharing messages & opening gifts!",
      emoji: "🎂"
    },
    wedding: {
      image: southernWeddingImg,
      title: "Yomi & Toyin's Wedding",
      desc: "Traditional Southern Aso-Ebi registries and blessings.",
      emoji: "💍"
    },
    anniversary: {
      image: anniversaryCelebrationImg,
      title: "Grandma & Grandpa's 50th",
      desc: "Sponsoring family reunion dinner & blessing parchment.",
      emoji: "💑"
    },
    babyshower: {
      image: babyShowerMilestoneImg,
      title: "Baby Amina's Welcoming",
      desc: "Gifting premium baby carriage & boutique diaper hampers.",
      emoji: "👶"
    }
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simName.trim() || !simText.trim()) return;
    setSimNotes([
      { name: simName.trim(), msg: simText.trim(), time: "Just now" },
      ...simNotes
    ]);
    setSimName("");
    setSimText("");
    setSparkleHeart(true);
    setTimeout(() => setSparkleHeart(false), 900);
  };

  const addContribution = () => {
    if (pooledAmt >= targetAmt * 1.5) {
      setPooledAmt(50000); // cycle back
    } else {
      setPooledAmt(prev => prev + 15000);
    }
    setSparkleHeart(true);
    setTimeout(() => setSparkleHeart(false), 800);
  };

  // Theme-aware styles inside the simulated phone
  const phoneThemes = {
    default: {
      accent: "bg-blue-600 hover:bg-blue-700",
      textAccent: "text-blue-600",
      bgSoft: "bg-indigo-50",
      border: "border-indigo-100",
      badge: "bg-blue-100 text-blue-800",
      headerBg: "bg-gradient-to-r from-blue-600 to-indigo-600",
      currency: "₦"
    },
    northern: {
      accent: "bg-amber-600 hover:bg-amber-700",
      textAccent: "text-amber-600",
      bgSoft: "bg-amber-50/70",
      border: "border-amber-100",
      badge: "bg-amber-100 text-amber-800",
      headerBg: "bg-gradient-to-r from-blue-900 to-amber-600",
      currency: "₦"
    },
    southern: {
      accent: "bg-emerald-700 hover:bg-emerald-800",
      textAccent: "text-emerald-700",
      bgSoft: "bg-rose-50/70",
      border: "border-rose-100",
      badge: "bg-emerald-100 text-emerald-800",
      headerBg: "bg-gradient-to-r from-emerald-900 to-amber-600",
      currency: "₦"
    }
  };

  const style = phoneThemes[parentTheme as "default" | "northern" | "southern"] || phoneThemes.default;

  return (
    <div className="flex flex-col h-full text-stone-800 text-left font-sans">
      {/* Top Status Bar Simulator */}
      <div className="bg-stone-950 text-white text-[9px] px-6 pt-5 pb-2 flex justify-between items-center font-mono">
        <span>1:42 🕒</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <div className="w-4.5 h-2.5 border border-white/60 rounded px-0.5 flex items-center">
            <div className="w-10/12 h-1 bg-green-400 rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Simulated App Header with support for uploaded Brand Logo */}
      <div className={`${style.headerBg} text-white px-4 py-2.5 shadow-md relative`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 p-1 flex items-center justify-center text-xs overflow-hidden">
              {customLogoUrl ? (
                <img src={customLogoUrl} alt="Logo" className="w-full h-full object-contain rounded-md" />
              ) : (
                <span className="text-sm">⚡</span>
              )}
            </div>
            <div>
              <h5 className="text-[10px] uppercase font-black tracking-widest text-[#FBBF24]">ZippZap Board</h5>
              <p className="text-[7.5px] opacity-90 truncate max-w-[125px]">
                {presets[eventPreset].title}
              </p>
            </div>
          </div>
          <span className="text-[7.5px] bg-white/20 text-white font-bold py-0.5 px-1.5 rounded-full">
            Active
          </span>
        </div>
      </div>

      {/* App Body Area with custom touch-action pan controls and high speed scrolling response */}
      <div className="flex-1 overflow-y-auto p-2.5 flex flex-col gap-2 bg-stone-50 select-none scrollbar-none relative touch-action-pan-y overscroll-behavior-contain">
        
        {/* Real-time floating heart reaction effect */}
        <AnimatePresence>
          {sparkleHeart && (
            <motion.div
              initial={{ opacity: 0, y: 120, scale: 0.5 }}
              animate={{ opacity: 1, y: -40, scale: 1.5 }}
              exit={{ opacity: 0 }}
              className="absolute pointer-events-none left-1/2 -translate-x-1/2 text-2xl z-40 drop-shadow-md"
            >
              💖✨🔥
            </motion.div>
          )}
        </AnimatePresence>

        {/* Horizontal Event Switcher Pills with expanded tactile touch heights */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none touch-action-pan-x">
          {(Object.keys(presets) as Array<keyof typeof presets>).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setEventPreset(key);
                setSparkleHeart(true);
                setTimeout(() => setSparkleHeart(false), 600);
              }}
              className={`px-3 py-1.5 rounded-full text-[7.5px] font-extrabold whitespace-nowrap transition-all border select-none active:scale-95 duration-100 touch-manipulation cursor-pointer ${
                eventPreset === key
                  ? `${style.accent} text-white border-transparent`
                  : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
              }`}
            >
              <span className="mr-0.5">{presets[key].emoji}</span>
              <span className="capitalize">{key === "babyshower" ? "Baby Shower" : key}</span>
            </button>
          ))}
        </div>

        {/* Live Visual Showcase representing the selected event */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-stone-200/80 shadow-2xs group/phone-img">
          <img
            src={presets[eventPreset].image}
            alt={presets[eventPreset].title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/10" />
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <span className="text-[6.5px] tracking-widest uppercase font-black text-[#FBBF24]">Interactive Board</span>
            <h5 className="font-sans font-extrabold text-[9px] leading-snug text-white truncate">{presets[eventPreset].title}</h5>
          </div>
        </div>

        {/* Tab Selection buttons styled as 44px equivalent comfort pads */}
        <div className="grid grid-cols-2 bg-stone-200/60 p-0.5 rounded-xl border border-stone-200 text-[10px] font-bold">
          <button
            type="button"
            onClick={() => setActiveTab("card")}
            className={`py-2 rounded-lg transition-all select-none touch-manipulation active:scale-[0.97] duration-100 flex items-center justify-center gap-1 ${
              activeTab === "card" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            ✍️ Signature Card
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pool")}
            className={`py-2 rounded-lg transition-all select-none touch-manipulation active:scale-[0.97] duration-100 flex items-center justify-center gap-1 ${
              activeTab === "pool" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            💰 Joint Gift Pool
          </button>
        </div>

        {activeTab === "card" ? (
          /* Signature Card Interface Simulator */
          <div className="flex flex-col gap-1.5 flex-1">
            {/* Live Media-Rich Merged ZippZap Moments Banner */}
            <div className="bg-gradient-to-r from-teal-50/85 to-indigo-50/85 p-2 rounded-xl border border-indigo-100/80 flex items-center justify-between gap-1.5 shadow-2xs">
              <div className="flex -space-x-1.5 overflow-hidden filter drop-shadow-sm flex-shrink-0">
                <span className="w-6 h-6 rounded-full border border-white bg-indigo-500 flex items-center justify-center text-[7.5px] font-bold text-white leading-none">📹</span>
                <div className="w-6 h-6 rounded-full border border-white bg-rose-400 overflow-hidden">
                  <img src={familyCelebrationGiftsImg} alt="family joy" className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border border-white bg-amber-400 overflow-hidden">
                  <img src={familyGiftsMessagesImg} alt="family layout" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[6px] font-black uppercase text-indigo-600 tracking-wider block">ZippZap Moments</span>
                <span className="text-[7.5px] text-stone-800 font-extrabold block truncate leading-tight">5 Video Wishes & 12 Photos compiled!</span>
              </div>
              <span className="text-[6.5px] bg-indigo-600 text-white font-extrabold px-1.5 py-0.5 rounded-full animate-pulse flex-shrink-0">Merged</span>
            </div>

            {/* Live Card Heading */}
            <div className={`p-2 rounded-xl ${style.bgSoft} border ${style.border}`}>
              <h6 className={`text-[8px] font-black ${style.textAccent} uppercase tracking-wider mb-0.5`}>
                Virtual Ledger
              </h6>
              <p className="text-[8px] text-stone-700 leading-normal font-medium">To write warm regards and help support the group hamper fund.</p>
            </div>

            {/* Simulated Live Sign Form with tactile input targets */}
            <form onSubmit={handleAddNote} className="bg-white p-2 rounded-xl border border-stone-200 flex flex-col gap-1.5">
              <input
                type="text"
                placeholder="Your Name (e.g. Uncle Kola)"
                value={simName}
                onChange={(e) => setSimName(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200/85 rounded-md px-2.5 py-1.5 text-[8.5px] focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
              />
              <div className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="Leave a sweet message..."
                  value={simText}
                  onChange={(e) => setSimText(e.target.value)}
                  className="flex-1 bg-stone-50 border border-stone-200/85 rounded-md px-2.5 py-1.5 text-[8.5px] focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
                />
                <button
                  type="submit"
                  className={`px-3 py-1.5 text-[8.5px] font-bold text-white rounded-md transition-all whitespace-nowrap cursor-pointer select-none active:scale-95 touch-manipulation flex items-center justify-center ${style.accent}`}
                >
                  Sign
                </button>
              </div>
            </form>

            {/* List of custom virtual entries styled with absolute touch pan response */}
            <div className="flex-1 max-h-[110px] overflow-y-auto space-y-1.5 pt-0.5 scrollbar-none touch-action-pan-y overscroll-behavior-contain">
              <AnimatePresence initial={false}>
                {simNotes.map((note, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-1.5 bg-white rounded-lg border border-stone-200/80 shadow-3xs flex flex-col gap-0.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-extrabold text-stone-950 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-indigo-500" />
                        {note.name}
                      </span>
                      <span className="text-[6.5px] text-stone-400">{note.time}</span>
                    </div>
                    <p className="text-[7.5px] text-stone-600 leading-snug">{note.msg}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* Joint Gift Pool Interface Simulator */
          <div className="flex flex-col gap-2 flex-1 justify-between py-0.5">
            <div className="flex flex-col gap-2">
              <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-3xs text-center">
                <span className="text-[7.5px] font-black uppercase text-stone-400 tracking-widest block mb-0.5">
                  Collective Goal Progress
                </span>
                <span className="text-lg font-bold tracking-tight text-stone-900 block font-mono">
                  {style.currency}{pooledAmt.toLocaleString()}
                </span>
                <span className="text-[8.5px] text-stone-500 block mb-1.5 font-medium">
                  pledged of {style.currency}{targetAmt.toLocaleString()} target
                </span>

                {/* Progress bar container */}
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden mb-1">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-rose-500 h-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (pooledAmt / targetAmt) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[7.5px] text-stone-400">
                  <span>{Math.round((pooledAmt / targetAmt) * 100)}% Complete</span>
                  <span>{simNotes.length + 12} contributors</span>
                </div>
              </div>

              {/* Secure guarantee banner */}
              <div className={`p-1.5 rounded-lg border ${style.border} ${style.bgSoft} flex items-start gap-1`}>
                <span className="text-xs">🛡️</span>
                <div className="text-[7.5px] leading-relaxed text-stone-600">
                  <strong>Audited guest ledger:</strong> Funds are locked until milestone date. Payouts transfer instantly to vendor bank coordinate.
                </div>
              </div>

              {/* Cute mini family celebration banner inside phone screen */}
              <div className="bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200/60 p-1 rounded-lg flex items-center gap-1.5 overflow-hidden shadow-3xs">
                <img
                  src={familyCelebrationGiftsImg}
                  alt="family"
                  className="w-7 h-7 rounded object-cover flex-shrink-0 border border-amber-200 animate-bounce"
                  style={{ animationDuration: "1.4s" }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-0.5">
                    <span className="text-[6px] font-black uppercase text-rose-500 tracking-wider">Gift Box Joy</span>
                    <span className="text-[8px] animate-bounce">🎁🌟</span>
                  </div>
                  <p className="text-[6.5px] text-stone-600 font-extrabold truncate">Families are jumping with celebrations!</p>
                </div>
              </div>
            </div>

            {/* CTA to simulate contributing to the pool */}
            <div className="flex flex-col gap-1">
              <button
                onClick={addContribution}
                type="button"
                className={`w-full text-white font-bold text-[8.5px] py-2 px-3 rounded-lg shadow transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5 ${style.accent}`}
              >
                <span>➕ Support with {style.currency}15,000</span>
                <span>⚡</span>
              </button>
              <span className="text-[7px] text-stone-400 text-center block">
                Tap button to simulate contribution!
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Simulated iOS Safari/Android Navigation Bar */}
      <div className="bg-stone-100 border-t border-stone-200 py-1.5 px-6 flex justify-between items-center text-stone-400 text-[10px] pb-3 rounded-b-[2.6rem]">
        <span className="hover:text-stone-700 cursor-pointer">◀</span>
        <span className="hover:text-stone-700 cursor-pointer">⌂</span>
        <span className="hover:text-stone-700 cursor-pointer">📁</span>
      </div>
    </div>
  );
};

// Testimonials for the carousel slide
const TESTIMONIALS = [
  {
    quote: "We compiled birthday cards from 18 relatives across Lagos, London, and Atlanta. The digital card reveal was breathtaking and the pooled cash loaded instantly!",
    author: "Tunde Adelaja",
    role: "Family Coordinate Member",
    location: "Lagos, NG",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "ZippZap Teams saved our work anniversary process. BambooHR synced automatically, and our Slack channel erupted in celebration when Jessica opened her virtual card!",
    author: "Sarah Jenkins",
    role: "Director of HR, FinTech Corp",
    location: "London, UK",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "Pooling funds for a retirement gift has never been this stress-free. No awkward reminders, just a single neat link and gorgeous custom-made hampers delivered locally.",
    author: "Amina Yusuf",
    role: "Neighborhood Club Leader",
    location: "Abuja, NG",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "My friends set up a baby shower pool while I was on bedrest. Reading the floating notes of group love was the sweetest thing. Absolutely brilliant experience!",
    author: "Chioma Okoro",
    role: "Mom-to-be",
    location: "Enugu, NG",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  }
];

const CELEBRATION_PRESETS: Record<string, {
  emoji: string;
  title: string;
  tagline: string;
  desc: string;
  themeColor: string;
  glowColor: string;
  textColor: string;
  features: string[];
  cta: string;
}> = {
  "🎂 Birthdays": {
    emoji: "🎂",
    title: "Birthday Coordinates",
    tagline: "Unleash genuine high-energy group love",
    desc: "Coordinate absolute surprise reveals! Gather deep felt messages, silly childhood photos, and secure group cash gifts. Deliver physical custom-crafted baking boxes directly to their doorstep seamlessly.",
    themeColor: "from-red-500 to-rose-600",
    glowColor: "shadow-red-500/20 shadow-xl",
    textColor: "text-red-500",
    features: [
      "🎁 Automated surprise link reveal on birth-hour",
      "🎈 Group-signed card with live balloon floats",
      "💸 Dual-option: Keep in secure wallet or deliver cash",
      "🍰 Optional gourmet local cake & hamper delivery"
    ],
    cta: "Launch Birthday Board"
  },
  "💑 Anniversaries": {
    emoji: "💑",
    title: "Anniversary Milestones",
    tagline: "Honoring years of love and resilience",
    desc: "Create beautiful, shared timelines of marital or couple milestones. Invite family and friends to upload memory video links and contribute to a premium romantic getaway or landmark gift.",
    themeColor: "from-pink-500 to-rose-500",
    glowColor: "shadow-pink-500/20 shadow-xl",
    textColor: "text-pink-500",
    features: [
      "📸 Living digital photo book & video compilation",
      "✈️ Group honeymoon or vacation contribution vaults",
      "💖 Personal private greetings wall with gold theme",
      "💌 Automated delivery coordinate tracking"
    ],
    cta: "Coordinate Anniversary Vault"
  },
  "💒 Weddings": {
    emoji: "💒",
    title: "Wedding Aso-Ebi & Contribution",
    tagline: "Celebrate holy unions with elegance",
    desc: "Manage wedding cash boards, digital guest goodwill maps, and physical gifts all-in-one. Ensure secure, high-volume transactions with verified coordinator audits.",
    themeColor: "from-indigo-500 to-purple-600",
    glowColor: "shadow-indigo-500/20 shadow-xl",
    textColor: "text-indigo-500",
    features: [
      "👰 Seamless wedding registry cash pooling",
      "🥂 High-fidelity global guestbook ledger",
      "📦 Doorstep delivery coordination for physical goods",
      "🏛️ Regulatory-compliant high-volume bank vaults"
    ],
    cta: "Build Wedding Registry"
  },
  "🍼 Baby Showers": {
    emoji: "🍼",
    title: "Baby Shower Surprises",
    tagline: "Welcoming tomorrow's milestones with peace",
    desc: "Set up collaborative support systems for moms-to-be. Pool funds for diaper subscriptions, nursery items, or direct wellness gifts without any intrusive awkward questioning.",
    themeColor: "from-amber-500 to-yellow-600",
    glowColor: "shadow-amber-500/20 shadow-xl",
    textColor: "text-amber-500",
    features: [
      "🍼 Group pooling for high-value nursery furniture",
      "🧸 Collaborative infant check-sheets",
      "🤱 Meal-train & early mother wellness schedules",
      "🤫 Shh... Option to keep private from public lists"
    ],
    cta: "Launch Baby Shower Coordinate"
  },
  "🎓 Graduations": {
    emoji: "🎓",
    title: "Graduation Board",
    tagline: "Fueling the next giant career loop",
    desc: "Congratulate your recent grad with genuine coordination. Pool funds for work wardrobes, travel tickets, or student loan offsets from relatives across the globe.",
    themeColor: "from-emerald-500 to-teal-600",
    glowColor: "shadow-emerald-500/20 shadow-xl",
    textColor: "text-emerald-500",
    features: [
      "💼 Work-wardrobe or laptops coordinate pooling",
      "🎓 High-resolution professional portrait uploads",
      "⚡ Instant international currency settlement routes",
      "✉️ Premium customizable academic invitation plates"
    ],
    cta: "Build Graduation Board"
  },
  "🏆 Work Milestones": {
    emoji: "🏆",
    title: "Employee Milestones & Anniversaries",
    tagline: "Automate culture, reward loyalty",
    desc: "Reward team anniversaries and peak performance in style. Synchronize with HR networks to launch group greeting card slots and coordinate meaningful company gifts.",
    themeColor: "from-teal-500 to-cyan-600",
    glowColor: "shadow-teal-500/20 shadow-xl",
    textColor: "text-teal-500",
    features: [
      "💼 Native HRIS integrations like BambooHR & Workday",
      "📣 Auto-notification broadcasts in Slack & MS Teams",
      "🎉 Co-worker micro-greetings & custom quote grids",
      "💳 Direct premium retail voucher redemptions"
    ],
    cta: "Set Up Team Workspace"
  },
  "🎉 Retirements": {
    emoji: "🎉",
    title: "Retirement Coordinates",
    tagline: "Honoring a legacy with ultimate respect",
    desc: "Ensure colleagues leaving the company get the sendoff they deserve. Pool appreciation letters, memorable photos, and coordinate landmark legacy gifts.",
    themeColor: "from-violet-500 to-indigo-600",
    glowColor: "shadow-violet-500/20 shadow-xl",
    textColor: "text-violet-500",
    features: [
      "✨ Memory lane timelines highlighting career peaks",
      "🚲 Pensioner lifestyle luxury gift catalog integrations",
      "📝 High-density letters of respect & appreciation templates",
      "💎 Lifetime achievement custom greeting plaques"
    ],
    cta: "Build Retirement Board"
  },
  "🐪 Arewa Shagali": {
    emoji: "🐪",
    title: "Arewa Shagali Celebrations",
    tagline: "Elegance, cultural honor, & family bonds",
    desc: "Crafted specifically for Northern tradition coordinates. Gather family contributions, coordinate royal kaftan delivery, and manage traditional Arewa wedding registries beautifully.",
    themeColor: "from-green-600 to-emerald-700",
    glowColor: "shadow-green-600/20 shadow-xl",
    textColor: "text-green-600",
    features: [
      "🕌 Elegant traditional theme presets & color schemes",
      "🐪 Direct Kaftan/Yari designers billing connection",
      "👪 Seamless global diaspora family contribution pooling",
      "💸 Swift local multi-bank secure disbursements"
    ],
    cta: "Coordinate Arewa Shagali"
  },
  "📿 Southern Traditional": {
    emoji: "📿",
    title: "Yoruba & Igbo Traditional Coordinates",
    tagline: "Rich heritage, vibrant party, flawless ledger",
    desc: "Perfect for traditional weddings, chieftaincy celebrations, or major milestone anniversaries. Coordinate Aso-Ebi contribution sheets, customized party gift distribution, and audited ledgers.",
    themeColor: "from-orange-500 to-amber-600",
    glowColor: "shadow-orange-500/20 shadow-xl",
    textColor: "text-orange-500",
    features: [
      "💃 Aso-Ebi designer contribution sheets & tracking",
      "🥁 Live audio play-list coordinate compilation",
      "🍖 Multi-vendor catering group coordination",
      "📊 Fully transparent dual-coordinator audited ledgers"
    ],
    cta: "Coordinate Yoruba/Igbo Shagali"
  }
};

export default function App() {
  // Custom uploaded logo state (persists in localStorage)
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem("zippzap_custom_logo");
    } catch {
      return null;
    }
  });

  // Selected celebration details state
  const [selectedCelebration, setSelectedCelebration] = useState<{
    emoji: string;
    title: string;
    tagline: string;
    desc: string;
    themeColor: string;
    glowColor: string;
    textColor: string;
    features: string[];
    cta: string;
  } | null>(null);

  // Theme state
  const [theme, setTheme] = useState<"default" | "northern" | "southern">("default");
  
  // Interactive greeting state
  const [greetingIndex, setGreetingIndex] = useState(0);

  // Parallax Scroll Tracking
  const [scrollY, setScrollY] = useState(0);

  // Navigation monitoring
  const [activeSection, setActiveSection] = useState("individuals");

  // Active page illustration tab state
  const [activeIllusTab, setActiveIllusTab] = useState<"love" | "contrib" | "gifting" | "schedule">("love");
  // Interactive Hero Gallery Tab
  const [heroGalleryTab, setHeroGalleryTab] = useState<string>("birthday");
  // Interactive contribution pool simulation state
  const [interactivePoolRaised, setInteractivePoolRaised] = useState(1450);

  // Lead Capturing States
  const [lead, setLead] = useState<LeadData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestType: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [localLeads, setLocalLeads] = useState<LeadData[]>([]);

  // Confetti Particle bursts
  const [confetti, setConfetti] = useState<Particle[]>([]);

  // Robust trigger for celebration particle simulation bursts
  const triggerConfetti = (x = 50, y = 60, customColors?: string[]) => {
    const particleColors = customColors || ["#2B2BE8", "#5252F5", "#10B981", "#F59E0B", "#EF4444", "#EC4899", "#8B5CF6"];
    const generated: Particle[] = Array.from({ length: 90 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      size: Math.random() * 12 + 6,
      angle: Math.random() * 360,
      speed: Math.random() * 8 + 3,
      spin: Math.random() * 30 - 15
    }));
    setConfetti(generated);
    // Automatically clear after 4.5 seconds to reset animation container
    setTimeout(() => {
      setConfetti([]);
    }, 4500);
  };

  // Active animated pop-up brand details
  const [selectedPopBrand, setSelectedPopBrand] = useState<{
    emoji: string;
    title: string;
    subtitle: string;
    desc: string;
    features: string[];
    accentColor: string;
  } | null>(null);

  // Active testimonial carousel index
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Auto-advance testimonial carousel
  useEffect(() => {
    const slideDuration = 6000; // 6 seconds
    const interval = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % 4); // 4 testimonials
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  // Toast State
  const [toast, setToast] = useState({ show: false, message: "" });

  // Floating Decorative Parallax Shapes Database
  const shapes = [
    { key: "d1", sym: "✦", speed: 0.15, top: "8%", left: "3%", color: "var(--purple)", size: "text-xl" },
    { key: "d2", sym: "◆", speed: -0.22, top: "54%", left: "2%", color: "var(--teal)", size: "text-lg" },
    { key: "d3", sym: "●", speed: 0.1, top: "20%", right: "3%", color: "var(--blue)", size: "text-base" },
    { key: "d4", sym: "▲", speed: -0.08, top: "70%", right: "4%", color: "var(--gold)", size: "text-sm" },
    { key: "d5", sym: "✦", speed: 0.18, top: "12%", left: "51%", color: "var(--pink)", size: "text-lg" },
    { key: "d6", sym: "■", speed: -0.25, top: "80%", left: "41%", color: "var(--blue-l)", size: "text-lg" },
    { key: "d7", sym: "●", speed: 0.08, top: "39%", left: "57%", color: "var(--teal)", size: "text-xs" },
    { key: "d8", sym: "◆", speed: -0.14, top: "86%", left: "15%", color: "var(--gold)", size: "text-lg" },
    { key: "d9", sym: "✦", speed: 0.24, top: "5%", right: "18%", color: "var(--purple)", size: "text-sm" },
    { key: "d10", sym: "▲", speed: -0.18, top: "64%", right: "12%", color: "var(--pink)", size: "text-lg" },
    { key: "d11", sym: "●", speed: 0.12, top: "32%", left: "27%", color: "var(--teal)", size: "text-base" },
    { key: "d12", sym: "■", speed: -0.11, top: "91%", right: "26%", color: "var(--blue)", size: "text-sm" }
  ];

  // Load existing leads or initialize
  useEffect(() => {
    try {
      const stored = localStorage.getItem("zz_leads");
      if (stored) {
        setLocalLeads(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Storage read failed", e);
    }
  }, []);

  // Listen to mouse scroll to execute smooth Parallax drift transitions
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Section scrollspy calculation
      const sections = ["individuals", "teams", "universe"];
      const scrollPosition = window.scrollY + 250;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycle cultural regional custom welcomes based on theme
  useEffect(() => {
    if (theme === "northern") {
      setGreetingIndex(1); // Hausa region
    } else if (theme === "southern") {
      setGreetingIndex(2); // Yoruba/Igbo/Southern region
    } else {
      setGreetingIndex(0); // Standard ZippZap B2C
    }
  }, [theme]);

  // Temporary Toast Dispatcher
  const dispatchToast = (msg: string) => {
    setToast({ show: true, message: msg });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 4000);
  };

  // Inline forms fields validator
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
    // Clear targeted error
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Submit Lead Registration Handlers
  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!lead.firstName.trim()) errors.firstName = "First name is of absolute core requirement";
    if (!lead.lastName.trim()) errors.lastName = "Last name is required";
    if (!lead.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      errors.email = "Please enter a valid business/personal email address";
    }
    if (!lead.interestType) errors.interestType = "Please select your primary interest category";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      dispatchToast("⚠️ Please enter all required fields correctly to join the list!");
      return;
    }

    setIsSubmitting(true);

    // Simulate high-performance sync
    setTimeout(() => {
      const newLead = { ...lead, submittedAt: new Date().toISOString(), selectedTheme: theme };
      const updatedList = [...localLeads, newLead];
      setLocalLeads(updatedList);
      try {
        localStorage.setItem("zz_leads", JSON.stringify(updatedList));
      } catch (e) {
        console.error("Local save failed", e);
      }

      setIsSubmitting(false);
      setFormSubmitted(true);
      dispatchToast("🎉 Magnificent choice! You've joined the ZippZap inner coordinate circle.");

      // Burst premium self-contained CSS floating colorful particles confetti!
      triggerConfetti(50, 60);
    }, 1200);
  };

  // Scroll smoothly to specified section anchors
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Core Regional Phrasebook translations
  const greetings = [
    {
      title: "Group love.",
      accent: "Delivered perfectly.",
      badge: "ZippZap Moments — For Individuals",
      subtitle: "ZippZap makes group greetings, gifting, and celebration coordination seamless across any distance. Happy families connect instantly, sharing digital messages and joint gift pools with ease."
    },
    {
      title: "Alkhairi da Farin Ciki.",
      accent: "Jam'i na sayayya lafayye.",
      badge: "ZippZap Arewa — Northern Heritage",
      subtitle: "Sannu da zuwa! Masterfully coordinated celebrations for friends and families. Gather goodwill messages, kaftan honors, and wedding coordinates."
    },
    {
      title: "Eku Odun o!",
      accent: "Ifẹ aringbungbun, ifọkansi pipe.",
      badge: "ZippZap Southern — Coral Jubilee",
      subtitle: "Welcome to festive royalty. Coordinate traditional weddings, baby showers, coral anniversaries, and family coordinates with absolute grace."
    }
  ];

  return (
    <div
      style={THEME_VARIABLES[theme] as React.CSSProperties}
      className={`theme-transition font-sans bg-[var(--bg)] text-[var(--text)] min-h-screen relative`}
    >
      {/* Dynamic Global Theme-Variable Smooth Transitions Embedding */}
      <style>{`
        .theme-transition, .theme-transition *, body, section, nav, input, select, button, div, span, h1, h2, h3, p, a {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          transition: background-color 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.18s cubic-bezier(0.16, 1, 0.3, 1),
                      color 0.18s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.6); opacity: 0.4; }
        }
        .cs-dot-animated {
          animation: subtlePulse 2s infinite;
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-8px) rotate(49deg); }
        }
        .deco-float {
          animation: subtleFloat 4s ease-in-out infinite alternate;
        }
        @keyframes borderSlideGlow {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-border-glow::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, var(--blue) 25%, var(--purple) 55%, var(--teal) 80%, transparent 100%);
          background-size: 200% 100%;
          animation: borderSlideGlow 3s linear infinite;
        }
        @keyframes confettiFall {
          0% { transform: translate(0px, 0px) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) rotate(var(--tr)); opacity: 0; }
        }
        .confetti-element {
          animation: confettiFall 3.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
        /* Custom Vibrant Palette design features */
        .card-custom-pattern {
          position: relative;
          overflow: hidden;
        }
        .card-custom-pattern::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: radial-gradient(circle at 2px 2px, var(--blue) 1.2px, transparent 0);
          background-size: 24px 24px;
          pointer-events: none;
          z-index: 1;
        }
        .section-pattern-mesh {
          position: relative;
        }
        .section-pattern-mesh::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle at 1.5px 1.5px, var(--blue) 1px, transparent 0);
          background-size: 20px 20px;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-scale-up-mod {
          animation: scaleUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>



      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-stone-900 text-white font-[Nunito] font-medium text-sm py-3 px-6 rounded-2xl shadow-xl z-50 transition-all duration-500 ease-out flex items-center gap-3 ${
          toast.show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95 pointer-events-none"
        }`}
      >
        <span className="text-lg">✨</span>
        <span>{toast.message}</span>
      </div>

      {/* Confetti Canvas Emulator */}
      {confetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {confetti.map((p) => {
            const finalX = Math.cos((p.angle * Math.PI) / 180) * p.speed * 40;
            const finalY = Math.sin((p.angle * Math.PI) / 180) * p.speed * 40 - 750; // gravity rise (flows upwards)
            const rotation = p.spin * 30;

            const particleStyle = {
              "--tx": `${finalX}px`,
              "--ty": `${finalY}px`,
              "--tr": `${rotation}deg`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              borderRadius: p.id % 3 === 0 ? "50%" : p.id % 3 === 1 ? "4px" : "0px",
              transform: "rotate(45deg)",
              position: "absolute"
            } as React.CSSProperties;

            return (
              <div
                key={p.id}
                style={particleStyle}
                className="confetti-element"
              />
            );
          })}
        </div>
      )}



      {/* ── STICKY NAVIGATION BAR ─────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] py-2.5 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 transition-all duration-500">
        <div onClick={() => scrollTo("individuals")} className="hover:opacity-90 active:scale-95 transition-all">
          <ZippZapLogo customLogoUrl={customLogoUrl} />
        </div>

        {/* Center menu links */}
        <div className="hidden md:flex items-center gap-2 relative bg-[var(--bg-soft)] p-[6px] rounded-2xl border border-[var(--border)]">
          <button
            onClick={() => scrollTo("individuals")}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all z-10 ${
              activeSection === "individuals"
                ? "bg-white text-[var(--blue)] shadow-sm font-bold"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            For Individuals
          </button>
          <button
            onClick={() => scrollTo("teams")}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all z-10 ${
              activeSection === "teams"
                ? "bg-white text-[var(--blue)] shadow-sm font-bold"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            For Teams
          </button>
          <button
            onClick={() => scrollTo("universe")}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all z-10 ${
              activeSection === "universe"
                ? "bg-white text-[var(--blue)] shadow-sm font-bold"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            Our Products
          </button>
        </div>

        {/* Right pill & logo uploader */}
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 bg-[var(--bg-soft)] hover:bg-[var(--border)] border border-[var(--border)] text-[var(--text)] px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all active:scale-95 group">
            <Upload className="w-3.5 h-3.5 text-[var(--blue)] transition-transform group-hover:scale-110" />
            <span className="text-[10px] uppercase tracking-wider">Upload Logo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  // Alert if too large (over 1.5MB)
                  if (file.size > 1500000) {
                    dispatchToast("⚠️ File is too large! Please choose a smaller logo under 1.5MB.");
                    return;
                  }
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const result = reader.result as string;
                    try {
                      localStorage.setItem("zippzap_custom_logo", result);
                      setCustomLogoUrl(result);
                      dispatchToast("🎉 ZippZap Brand Logo uploaded and applied beautifully!");
                      triggerConfetti(50, 20);
                    } catch {
                      dispatchToast("⚠️ Local storage quota exceeded! Please choose a smaller file.");
                    }
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </label>

          {customLogoUrl && (
            <button
              onClick={() => {
                localStorage.removeItem("zippzap_custom_logo");
                setCustomLogoUrl(null);
                dispatchToast("🔄 Brand logo reset to default system ZippZap bolts.");
              }}
              className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-500 rounded-xl px-2.5 py-2 text-[10px] font-bold uppercase tracking-wider transition-all"
              title="Reset to default logo"
            >
              Reset
            </button>
          )}

          <div className="hidden sm:flex items-center gap-2 bg-[var(--blue-bg)] border border-[var(--blue-bdr)] text-[var(--blue)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-500">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--blue)] cs-dot-animated shadow-md" />
            <span className="text-[10px]">
              {theme === "northern" ? "Yana nan Tafe" : theme === "southern" ? "N bọ Wa laipẹ" : "Coming Soon"}
            </span>
          </div>
        </div>
      </nav>

      {/* Scrollable Content Container to prevent overflow-x while allowing standard header sticky matching */}
      <div className="overflow-x-hidden w-full relative">
        {/* Floating Cultural Core Elements depending on Selected Theme */}
        {theme === "northern" && (
          <div className="absolute top-[15rem] right-[-10rem] w-[35rem] h-[35rem] pointer-events-none select-none z-0 opacity-15">
            <ArewaKnot className="w-full h-full text-[var(--blue)]" />
          </div>
        )}
        {theme === "southern" && (
          <div className="absolute top-[15rem] right-[-10rem] w-[35rem] h-[35rem] pointer-events-none select-none z-0 opacity-15">
            <CoralBeadOrb className="w-full h-full text-[var(--blue)]" />
          </div>
        )}

        {/* ── CENTRAL TRIPLE NIGERIAN CULTURAL REALM SELECTOR STRIP ─────────────────────── */}
      <div className="bg-[var(--bg-soft)] border-b border-[var(--border)] py-4 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--blue-bg)] border border-[var(--blue-bdr)] flex items-center justify-center text-[var(--blue)] transition-colors duration-500">
              <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Aesthetic Coordinator</h4>
              <p className="text-[10px] text-[var(--text-light)]">Switch Nigerian cultural themes seamlessly with one click</p>
            </div>
          </div>

          {/* Theme Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-white/60 p-1.5 rounded-2xl border border-[var(--border)] shadow-inner">
            <button
              onClick={() => {
                setTheme("default");
                dispatchToast("✨ Switched to Classic ZippZap Blue & Lavender theme.");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                theme === "default"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-105"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              🚀 Classic Blue
            </button>
            <button
              onClick={() => {
                setTheme("northern");
                dispatchToast("🕌 Switched to Northern Heritage theme (North Indigo & Savannah Sand).");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                theme === "northern"
                  ? "bg-gradient-to-r from-blue-800 to-amber-500 text-white shadow-md scale-105"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              🕌 Northern Heritage
            </button>
            <button
              onClick={() => {
                setTheme("southern");
                dispatchToast("👑 Switched to Southern Vines theme (South Lush Canopy & Royal Coral).");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                theme === "southern"
                  ? "bg-gradient-to-r from-emerald-900 to-amber-500 text-white shadow-md scale-105"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              👑 Southern Vines
            </button>
          </div>
        </div>
      </div>

      {/* ── HERO B2C ───────────────────────────────── */}
      <section className="hero section-pattern-mesh relative px-6 md:px-16 pt-8 pb-16 md:pt-14 md:pb-24 flex flex-col gap-12 md:gap-20 overflow-hidden z-20" id="individuals">
        
        {/* Parallax Floating Decorative Shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {shapes.map((s) => {
            // Apply subtle drift calculation based on scroll position
            const yDrift = scrollY * s.speed;
            const style = {
              position: "absolute",
              top: s.top,
              left: s.left,
              right: s.right,
              color: s.color,
              transform: `translateY(${yDrift}px)`,
              opacity: 0.15,
              fontWeight: "bold",
              userSelect: "none"
            } as React.CSSProperties;

            return (
              <span key={s.key} style={style} className={`deco-float ${s.size}`}>
                {theme === "northern" ? "❃" : theme === "southern" ? "📿" : s.sym}
              </span>
            );
          })}
        </div>

        {/* ROW 1: Hero content (Left) & Image Showcase (Right) side by side starting at the top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start relative z-10 w-full animate-fade-in">
          {/* HERO LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <FadeIn delay={100} className="w-fit">
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[var(--blue-bg)] border border-[var(--blue-bdr)] text-[var(--blue)] text-xs font-bold uppercase tracking-wider mb-8 shadow-sm transition-all duration-500 animate-bounce">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] animate-ping" />
                <span>{greetings[greetingIndex].badge}</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="font-[Nunito] text-4xl md:text-6xl font-[900] tracking-tight leading-[1.05] text-[var(--navy)] mb-6 transition-colors duration-500 text-left">
                {greetings[greetingIndex].title}
                <span className="block bg-gradient-to-r from-[var(--blue)] via-[var(--purple)] to-[var(--pink)] bg-clip-text text-transparent transform hover:scale-[1.01] transition-transform duration-500">
                  {greetings[greetingIndex].accent}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl mb-10 transition-colors duration-500 text-left">
                {greetings[greetingIndex].subtitle}
              </p>
            </FadeIn>

            {/* Core Feature bullet points */}
            <div className="space-y-6 mb-10">
              {[
                { emoji: "👥", title: "Everyone signs. Everyone contributes.", desc: "Invite family, friends, or co-workers with a single custom secure link." },
                { emoji: "🎁", title: "Shared gifting made effortless.", desc: "One clean digital dynamic vault. Secure contribution pooling for any celebration." },
                { emoji: "✨", title: "Deliver shared love on schedule.", desc: "Automate milestones, design rich digital coordinate cards, and feel unforgettable." }
              ].map((f, i) => (
                <FadeIn key={i} delay={400 + i * 100}>
                  <div className="flex gap-4 group cursor-default text-left">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--blue-bg)] border border-[var(--blue-bdr)] flex items-center justify-center text-lg shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {f.emoji}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text)] mb-0.5 group-hover:text-[var(--blue)] transition-colors duration-500">{f.title}</h4>
                      <p className="text-xs text-[var(--text-muted)]">{f.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Also in the universe sub-brand pills */}
            <FadeIn delay={700}>
              <div className="border-t border-[var(--border)] pt-8 text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-light)] block mb-4">
                  Also in the ZippZap universe
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setSelectedPopBrand(BRAND_DETAILS["ZippZap Moments"]);
                      dispatchToast("🎉 Loaded ZippZap Moments Collaborative Board.");
                    }}
                    className="inline-flex items-center gap-2 bg-[var(--bg-soft)] hover:bg-[var(--blue-bg)] hover:text-[var(--blue)] hover:border-[var(--blue-bdr)] border border-[var(--border)] px-4 py-2 rounded-xl text-xs font-bold text-[var(--text-mid)] shadow-sm hover:-translate-y-0.5 transition-all duration-500 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                    ZippZap Moments
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPopBrand(BRAND_DETAILS["ZippZap Teams"]);
                      dispatchToast("🏢 Loaded ZippZap Teams Coordinate Board.");
                    }}
                    className="inline-flex items-center gap-2 bg-[var(--bg-soft)] hover:bg-[var(--blue-bg)] hover:text-[var(--blue)] hover:border-[var(--blue-bdr)] border border-[var(--border)] px-4 py-2 rounded-xl text-xs font-bold text-[var(--text-mid)] shadow-sm hover:-translate-y-0.5 transition-all duration-500 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    ZippZap Teams
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPopBrand(BRAND_DETAILS["ZippZap Circle"]);
                      dispatchToast("⭕ Loaded ZippZap Circle Community Space.");
                    }}
                    className="inline-flex items-center gap-2 bg-[var(--bg-soft)] hover:bg-[var(--blue-bg)] hover:text-[var(--blue)] hover:border-[var(--blue-bdr)] border border-[var(--border)] px-4 py-2 rounded-xl text-xs font-bold text-[var(--text-mid)] shadow-sm hover:-translate-y-0.5 transition-all duration-500 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                    ZippZap Circle
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPopBrand(BRAND_DETAILS["ZippZap Gifts"]);
                      dispatchToast("🎁 Loaded ZippZap Gifts Surprise Hub.");
                    }}
                    className="inline-flex items-center gap-2 bg-[var(--bg-soft)] hover:bg-[var(--blue-bg)] hover:text-[var(--blue)] hover:border-[var(--blue-bdr)] border border-[var(--border)] px-4 py-2 rounded-xl text-xs font-bold text-[var(--text-mid)] shadow-sm hover:-translate-y-0.5 transition-all duration-500 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                    ZippZap Gifts
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: High-Contrast Celebrations Collage & Interactive Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-6 relative z-10">
            {/* Collage Segmented Control Tabs */}
            <FadeIn delay={200}>
              <div className="bg-[var(--bg-soft)] p-1 rounded-2xl border border-[var(--border)] grid grid-cols-5 gap-1 shadow-inner relative z-10">
                {[
                  { id: "birthday", emoji: "🎂", label: "Birthday", img: familyGiftsMessagesImg },
                  { id: "wedding", emoji: "💍", label: "Wedding", img: southernWeddingImg },
                  { id: "anniversary", emoji: "💑", label: "Anniversary", img: anniversaryCelebrationImg },
                  { id: "babyshower", emoji: "👶", label: "Baby Shower", img: babyShowerMilestoneImg },
                  { id: "gifting", emoji: "🎁", label: "Gifting", img: luxuryGiftHamperImg }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setHeroGalleryTab(item.id);
                      dispatchToast(`✨ Displaying ${item.label} celebrations gallery!`);
                      triggerConfetti(75, 45);
                    }}
                    className={`py-2 rounded-xl text-[10px] font-bold flex flex-col items-center justify-center gap-0.5 transition-all outline-none select-none active:scale-[0.93] duration-100 cursor-pointer ${
                      heroGalleryTab === item.id
                        ? "bg-white text-[var(--blue)] shadow-md border-b-2 border-[var(--blue)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-white/45"
                    }`}
                  >
                    <span className="text-sm">{item.emoji}</span>
                    <span className="hidden sm:inline-block tracking-tight text-[8.5px]">{item.label}</span>
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Selected Picture Frame with Floating Metadata and Confetti Burst Interactivity */}
            <FadeIn delay={250}>
              <div className="relative aspect-[16/11] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-[var(--border)] group/showcase bg-white transition-all duration-500 hover:shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroGalleryTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={
                        heroGalleryTab === "birthday" ? familyGiftsMessagesImg :
                        heroGalleryTab === "wedding" ? southernWeddingImg :
                        heroGalleryTab === "anniversary" ? anniversaryCelebrationImg :
                        heroGalleryTab === "babyshower" ? babyShowerMilestoneImg :
                        luxuryGiftHamperImg
                      }
                      alt={heroGalleryTab}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/showcase:scale-105"
                    />
                    {/* Vignette vignette and glassmorphism metadata card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-black/35" />
                    
                    <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                      <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white font-extrabold text-[8px] uppercase tracking-widest px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Snapshots
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-left">
                      <span className="text-[8px] tracking-widest uppercase font-extrabold text-[#FBBF24] mb-0.5 block">
                        {
                          heroGalleryTab === "birthday" ? "Happy Celebrations Coordinate" :
                          heroGalleryTab === "wedding" ? "Traditional Heritage Registries" :
                          heroGalleryTab === "anniversary" ? "Silver & Gold Marital Milestones" :
                          heroGalleryTab === "babyshower" ? "Welcome and Support Pools" :
                          "Aesthetic Hamper Marketplace"
                        }
                      </span>
                      <h4 className="font-sans font-black text-xs md:text-sm mb-1 text-white flex items-center gap-1.5">
                        {
                          heroGalleryTab === "birthday" ? "Lively Birthday Bashes" :
                          heroGalleryTab === "wedding" ? "Cultural Traditional Unions" :
                          heroGalleryTab === "anniversary" ? "Milestone Anniversaries" :
                          heroGalleryTab === "babyshower" ? "Newborn Welcoming Pools" :
                          "Artisan surprise hampers & gift boxes"
                        }
                      </h4>
                      <p className="text-[9.5px] md:text-[10px] text-stone-200/90 leading-normal font-sans">
                        {
                          heroGalleryTab === "birthday" ? "Singing, cutting cake, and opening boxes of laughter and joint love together." :
                          heroGalleryTab === "wedding" ? "Aso-Ebi coordination, guestbooks, and secure coordinate cash pools done elegantly." :
                          heroGalleryTab === "anniversary" ? "Celebrating decades of resilient love, mutual dedication, and family toasts." :
                          heroGalleryTab === "babyshower" ? "Gathering nursery furniture investments, diaper bundles, and meal schedules." :
                          "Custom physical arrangements from local creators, compiled on schedule."
                        }
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeIn>

            {/* Overlapping Polaroid Mini Preview Cluster for extra fun visual density */}
            <FadeIn delay={300}>
              <div className="flex items-center justify-center gap-3 py-2 relative h-20 mt-1 select-none overflow-visible">
                <span className="text-[8px] font-black uppercase tracking-widest text-[var(--text-light)] absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden sm:inline">
                  Polaroids
                </span>
                {[
                  { id: "birthday", title: "Birthday", img: familyGiftsMessagesImg, deg: "hover:rotate-[-6deg] rotate-[-4deg]" },
                  { id: "wedding", title: "Wedding", img: southernWeddingImg, deg: "hover:rotate-[5deg] rotate-[2deg] translate-y-1" },
                  { id: "anniversary", title: "Anniversary", img: anniversaryCelebrationImg, deg: "hover:rotate-[-4deg] rotate-[-1deg] -translate-y-1" },
                  { id: "babyshower", title: "Baby Shower", img: babyShowerMilestoneImg, deg: "hover:rotate-[6deg] rotate-[3deg] translate-y-0.5" }
                ].map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setHeroGalleryTab(item.id);
                      dispatchToast(`✨ Displaying ${item.title} snap!`);
                      triggerConfetti(70, 50);
                    }}
                    className={`w-14 h-16 bg-white p-1 pb-3 flex flex-col justify-between border border-stone-200 shadow-sm cursor-pointer transition-all duration-300 transform rounded ${item.deg} ${
                      heroGalleryTab === item.id ? "scale-115 border-indigo-400 ring-2 ring-indigo-100 z-10" : "hover:scale-105 hover:z-20 opacity-85 hover:opacity-100"
                    }`}
                  >
                    <div className="w-full h-11 bg-stone-100 rounded overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[5px] text-stone-500 font-extrabold text-center truncate tracking-tight">{item.title}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ROW 1.2: Premium Interactive Smartphone Illustration Section */}
        <div id="premium-showcase" className="border-t border-[var(--border)] pt-16 mt-8 relative z-10 w-full flex flex-col gap-10 lg:gap-12 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn delay={100} className="w-fit mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--blue-bg)] border border-[var(--blue-bdr)] text-[var(--blue)] text-xs font-black uppercase tracking-wider mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--blue)] animate-ping" />
                <span>Premium Live Demonstration Spotlight</span>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <h2 className="font-[Nunito] text-3xl md:text-5xl font-[950] tracking-tight leading-[1.05] text-[var(--navy)] mb-4">
                Interactive Visualization Engine
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto">
                Select between the milestones, signatures, gifting funds, or scheduled reminders below to see how our realistic smartphone engine adapts and updates in real-time.
              </p>
            </FadeIn>
          </div>

          {/* Interactive Illustration Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Content Visualization with 4 Interactive Pillars */}
            <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
              {[
                {
                  id: "love",
                  emoji: "❤️",
                  title: "Group love. Delivered perfectly.",
                  sub: "Digital connection across distance",
                  desc: "Family members connected from different cities in one beautiful shared celebration experience with live digital greeting cards and message bubbles.",
                  color: "from-rose-500 to-pink-500",
                  bg: "bg-rose-50/70 border-rose-100"
                },
                {
                  id: "contrib",
                  emoji: "👥",
                  title: "Everyone signs. Everyone contributes.",
                  sub: "Secure invitation & signature flow",
                  desc: "Multiple people joining via secure invite links. Hand-written digital signatures, custom messages, and group profile avatars surrounding the milestone coordinates.",
                  color: "from-indigo-500 to-blue-600",
                  bg: "bg-indigo-50/70 border-indigo-100"
                },
                {
                  id: "gifting",
                  emoji: "🎁",
                  title: "Shared gifting made effortless.",
                  sub: "Dynamic joint contribution vault",
                  desc: "Durable shared celebration fund trackers, luxury gift box hampers, and a secure pooled contribution wallet to support milestone goals.",
                  color: "from-amber-500 to-orange-500",
                  bg: "bg-amber-50/70 border-amber-100"
                },
                {
                  id: "schedule",
                  emoji: "🗓️",
                  title: "Deliver shared love on schedule.",
                  sub: "Automated delivery timeline",
                  desc: "Coordinate birthday & anniversary milestones. Setup calendar reminders, scheduled greetings, and automated delivery to recipients right on time.",
                  color: "from-emerald-500 to-teal-600",
                  bg: "bg-emerald-50/70 border-emerald-100"
                }
              ].map((pill, i) => {
                const isActive = activeIllusTab === pill.id;
                return (
                  <FadeIn key={pill.id} delay={150 + i * 80}>
                    <div
                      onClick={() => {
                        setActiveIllusTab(pill.id as any);
                        dispatchToast(`✨ Displaying: ${pill.title}`);
                        triggerConfetti(30, 40);
                      }}
                      className={`group p-5 rounded-2xl border-2 transition-all duration-500 cursor-pointer text-left relative overflow-hidden ${
                        isActive
                          ? "bg-white shadow-lg border-[var(--blue)] -translate-x-1 sm:translate-x-2"
                          : "bg-white/80 hover:bg-white border-stone-200/80 shadow-sm hover:border-stone-300 hover:shadow"
                      }`}
                    >
                      {/* Active highlight side element */}
                      {isActive && (
                        <div className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b ${pill.color}`} />
                      )}

                      <div className="flex gap-4 items-start relative z-10">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-md ${
                          isActive ? `bg-gradient-to-br ${pill.color} text-white` : "bg-stone-50 border border-stone-200 text-stone-700"
                        } group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0`}>
                          {pill.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2.5">
                            <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? "text-[var(--blue)]" : "text-stone-400"}`}>
                              {pill.sub}
                            </span>
                            {isActive && (
                              <span className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                                Active View
                              </span>
                            )}
                          </div>
                          <h4 className={`text-sm md:text-base font-black tracking-tight mt-1 mb-1 leading-tight ${isActive ? "text-[var(--navy)]" : "text-stone-800"}`}>
                            {pill.title}
                          </h4>
                          <p className="text-xs text-[var(--text-muted)] leading-normal mt-1.5">
                            {pill.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Ultra-Premium Real Smartphone Illustration Canvas */}
            <div className="lg:col-span-7 relative flex items-center justify-center py-8 lg:py-16 overflow-visible order-1 lg:order-2">
              
              {/* Background ambient circular rings of connection */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full border border-stone-200/50 absolute animate-spin" style={{ animationDuration: "25s" }} />
                <div className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-indigo-200/50 absolute animate-spin" style={{ animationDuration: "35s", animationDirection: "reverse" }} />
                <div className="w-[120px] h-[120px] sm:w-[220px] sm:h-[220px] rounded-full bg-gradient-to-tr from-indigo-50/15 via-purple-50/10 to-transparent absolute filter blur-xl pointer-events-none" />
              </div>

              {/* FLOATING GRAPHICS & GLASS BADGES (To represent family milestones, invite links, calendars) */}
              
              {/* Floating Avatar 1 (Mother's Greeting bubble - Top Left) */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="absolute top-0 left-4 sm:-left-4 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg border border-pink-100 flex items-center gap-2.5 max-w-[190px] cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-pink-100 border border-pink-300 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <span className="text-sm font-bold">👩</span>
                </div>
                <div className="min-w-0 text-left">
                  <span className="text-[8px] font-black text-pink-500 uppercase block leading-none">Mom (London)</span>
                  <p className="text-[10px] text-stone-700 font-extrabold leading-tight mt-0.5 truncate">"You are my shining star! 🌟"</p>
                </div>
              </motion.div>

              {/* Floating Contribution Widget 2 (Uncle Ronke - Top Right) */}
              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
                className="absolute top-10 right-4 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg border border-indigo-100 flex items-center gap-2.5 max-w-[210px] cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-300 overflow-hidden flex-shrink-0 flex items-center justify-center text-sm">
                  👴
                </div>
                <div className="min-w-0 text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] font-black text-indigo-600 uppercase block leading-none">Uncle Seun</span>
                    <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded-full border border-emerald-100">Sent</span>
                  </div>
                  <p className="text-[10.5px] text-stone-800 font-black leading-tight mt-0.5 whitespace-nowrap">Contributed +$100 Pool 💳</p>
                </div>
              </motion.div>

              {/* Floating Invitation Link Badge 3 (Middle Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute bottom-28 -left-6 z-20 bg-stone-900 text-white px-3.5 py-2.5 rounded-2xl shadow-xl border border-stone-800 hidden md:flex flex-col gap-1 max-w-[155px]"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest block text-left">Secure Invite Link</span>
                <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-lg">
                  <span className="text-[9px] font-mono text-[#60A5FA] truncate">zippzap.com/invite</span>
                  <span className="text-[8px] bg-[#60A5FA]/20 text-[#60A5FA] px-1 rounded">🔒</span>
                </div>
              </motion.div>

              {/* Floating Success Checkmark Card 4 (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute bottom-16 -right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-3 rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-2.5 hidden md:flex max-w-[160px] cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="min-w-0 text-left">
                  <span className="text-[8px] font-black text-emerald-600 uppercase block tracking-wider leading-none">Delivered</span>
                  <p className="text-[10px] text-stone-800 font-extrabold leading-tight mt-0.5">Automated Timeline Completed! ✅</p>
                </div>
              </motion.div>

              {/* Large Premium Smartphone Mockup container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-[325px]"
              >
                {/* 3D Leaning Phone Outline Frame */}
                <div className="mx-auto bg-stone-900 rounded-[3rem] p-3 shadow-[0_25px_60px_-15px_rgba(12,14,30,0.35)] border-4 border-stone-800 w-full select-none transform hover:[transform:rotateY(-5deg)_rotateX(5deg)] transition-all duration-700 ease-out">
                  
                  {/* Speaker and Camera dynamic island bar */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-stone-950 rounded-full z-30 flex items-center justify-between px-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
                    <span className="w-8 h-1 bg-stone-800 rounded-full" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
                  </div>

                  {/* Buttons details */}
                  <div className="absolute -left-1 top-24 w-1 h-10 bg-stone-700 rounded-l" />
                  <div className="absolute -left-1 top-36 w-1 h-10 bg-stone-700 rounded-l" />
                  <div className="absolute -right-1 top-28 w-1 h-14 bg-stone-700 rounded-r" />

                  {/* Smartphone App Screen Wrapper */}
                  <div className="bg-stone-50 rounded-[2.5rem] overflow-hidden aspect-[9/19] h-[520px] relative flex flex-col border border-stone-200">
                    
                    {/* TOP BAR APPS STATUS */}
                    <div className="bg-white px-6 pt-7 pb-2 border-b border-stone-100 flex items-center justify-between z-20 text-[9px] font-mono text-stone-500 font-bold">
                      <span>9:41 📱</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-500">📶 5G</span>
                        <span className="bg-stone-200 text-stone-800 rounded px-1 text-[7px]">100%</span>
                      </div>
                    </div>

                    {/* DYNAMIC SCREEN CONTENT BASED ON ACTIVE TAB */}
                    <div className="flex-1 overflow-hidden relative p-4 flex flex-col gap-3">
                      
                      {/* Active Preview Banner */}
                      <div className="bg-indigo-600 text-white rounded-xl p-2.5 shadow-sm text-left relative overflow-hidden flex-shrink-0 animate-fade-in">
                        <div className="absolute right-0 bottom-0 top-0 w-24 bg-gradient-to-l from-indigo-500/50 to-transparent pointer-events-none" />
                        <span className="text-[7.5px] uppercase font-black tracking-widest text-indigo-200 block">ZippZap Live Coordinator</span>
                        <h5 className="text-[11px] font-black leading-tight mt-0.5">Nosa's 30th Birthday 🎉</h5>
                      </div>

                      {/* Tab 1 content: Love Map & Chat Bubbles */}
                      {activeIllusTab === "love" && (
                        <div className="flex-1 flex flex-col gap-2.5 justify-between animate-fade-in">
                          {/* Illustrated Map connecting family nodes */}
                          <div className="flex-1 bg-white border border-stone-200/60 rounded-xl p-2 relative overflow-hidden flex flex-col items-center justify-center min-h-[160px]">
                            {/* Glowing grid representation */}
                            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px]" />
                            
                            {/* SVG connections map */}
                            <svg className="w-full h-full absolute inset-0 z-0 opacity-80" viewBox="0 0 200 130">
                              <circle cx="40" cy="90" r="3" fill="#1E23F5" />
                              <circle cx="160" cy="40" r="3" fill="#EC4899" />
                              <circle cx="100" cy="70" r="3" fill="#F59E0B" />
                              
                              <path d="M 40 90 Q 70 40 100 70" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3" className="animate-pulse" />
                              <path d="M 100 70 Q 130 50 160 40" fill="none" stroke="#EC4899" strokeWidth="1.5" strokeDasharray="3" className="animate-pulse" />
                            </svg>

                            <span className="text-[8px] bg-rose-50 text-rose-500 border border-rose-100 font-bold px-1.5 py-0.5 rounded-full absolute top-2 right-2 z-10 animate-pulse">
                              🌎 Connecting Distances
                            </span>

                            {/* Node labels */}
                            <span className="text-[7px] font-black text-stone-500 absolute bottom-4 left-4">Lagos</span>
                            <span className="text-[7px] font-black text-stone-500 absolute top-4 right-8">London</span>
                            <span className="text-[7px] font-black text-stone-500 absolute top-16 left-20">New York</span>
                          </div>

                          {/* Chat Roll layout */}
                          <div className="space-y-2 max-h-[180px] overflow-hidden">
                            {[
                              { name: "Dad (Boston)", txt: "So excited to join Nosa's pool! 🥂", bg: "bg-indigo-50" },
                              { name: "Sis Tobi (Abuja)", txt: "Who's designing our milestone card? 🎨", bg: "bg-pink-50" },
                              { name: "David J.", txt: "Count me in for the physical hamper package!", bg: "bg-amber-50" }
                            ].map((msg, idx) => (
                              <div key={idx} className={`p-2 rounded-lg text-left ${msg.bg} border border-stone-100 animate-slide-in`}>
                                <div className="flex items-center justify-between">
                                  <span className="text-[7.5px] font-extrabold text-stone-800">{msg.name}</span>
                                  <span className="text-[6.5px] text-stone-400">Just now</span>
                                </div>
                                <p className="text-[9px] text-stone-600 mt-0.5 leading-tight font-medium">{msg.txt}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tab 2 content: Multiple signatures invites */}
                      {activeIllusTab === "contrib" && (
                        <div className="flex-1 flex flex-col gap-3 justify-start text-left animate-fade-in">
                          {/* Live invitation status */}
                          <div className="bg-white p-3 border border-stone-200 rounded-xl shadow-sm">
                            <span className="text-[7px] bg-indigo-50 text-indigo-600 font-extrabold px-1.5 py-0.5 rounded-full uppercase leading-none border border-indigo-100">Invite Status</span>
                            <h6 className="text-[10px] font-black text-stone-800 mt-1 leading-none">Shared via WhatsApp Link</h6>
                            <p className="text-[8px] text-stone-500 leading-tight mt-1">24 friends clicked the coordinate link, 8 have signed. Anyone with the URL contributed.</p>
                          </div>

                          {/* Profile joining signatures mockup board */}
                          <h6 className="text-[9.5px] font-black text-stone-700 uppercase tracking-wider">Milestone Digital Signatures</h6>
                          <div className="bg-white border-2 border-dashed border-stone-300 rounded-xl p-2.5 space-y-2.5 relative min-h-[180px]">
                            
                            {/* Cursive vector trace signatures */}
                            <div className="border-b border-stone-100 pb-1 flex justify-between items-center">
                              <div>
                                <span className="text-[8px] text-stone-400 block leading-none">Musa Abubakar</span>
                                <span className="text-[9.5px] font-serif italic text-emerald-600 font-bold leading-normal">M. Abubakar ❃</span>
                              </div>
                              <span className="text-[7px] bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded font-extrabold">Signed ✍️</span>
                            </div>

                            <div className="border-b border-stone-100 pb-1 flex justify-between items-center">
                              <div>
                                <span className="text-[8px] text-stone-400 block leading-none">Sarah Morgan</span>
                                <span className="text-[9.5px] font-serif italic text-pink-600 font-bold leading-normal">Sarah_Morgan_Xo</span>
                              </div>
                              <span className="text-[7px] bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded font-extrabold">Signed ✍️</span>
                            </div>

                            <div className="pb-1 flex justify-between items-center">
                              <div>
                                <span className="text-[8px] text-stone-400 block leading-none">Tunde Cole</span>
                                <span className="text-[9.5px] font-serif italic text-indigo-600 font-bold leading-normal">Tunde Cole ♪</span>
                              </div>
                              <span className="text-[7px] bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded font-extrabold">Signed ✍️</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Interactive Gifting contribution simulator index */}
                      {activeIllusTab === "gifting" && (
                        <div className="flex-1 flex flex-col gap-2 justify-between animate-fade-in text-left">
                          
                          {/* Contribution Progress Rings */}
                          <div className="bg-white border border-stone-200/80 rounded-xl p-3 relative flex items-center justify-between gap-3 shadow-inner">
                            <div className="flex-1 min-w-0">
                              <span className="text-[7.5px] bg-amber-50 text-amber-600 border border-amber-100 px-1.5 py-0.5 rounded font-extrabold uppercase">Joint Wallet Balance</span>
                              <h5 className="text-sm font-black text-stone-800 leading-none mt-1.5">${interactivePoolRaised} Raised</h5>
                              <p className="text-[8px] text-stone-500 mt-1">Goal: $2,000 to purchase physical family holiday hampers.</p>
                            </div>

                            {/* SVG progress circle chart */}
                            <div className="relative w-15 h-15 flex-shrink-0 flex items-center justify-center">
                              <svg className="w-full h-full transform -rotate-90">
                                <circle cx="30" cy="30" r="24" stroke="#F5F5F5" strokeWidth="4" fill="transparent" />
                                <circle
                                  cx="30"
                                  cy="30"
                                  r="24"
                                  stroke="#F59E0B"
                                  strokeWidth="4"
                                  fill="transparent"
                                  strokeDasharray="150"
                                  strokeDashoffset={150 - (150 * (interactivePoolRaised / 2000))}
                                  className="transition-all duration-700 ease-out"
                                />
                              </svg>
                              <span className="absolute text-[9px] font-black text-stone-700">
                                {Math.round((interactivePoolRaised / 2000) * 100)}%
                              </span>
                            </div>
                          </div>

                          {/* Wallet transaction list */}
                          <div className="space-y-1.5 max-h-[140px] overflow-hidden">
                            <span className="text-[8.5px] font-black text-stone-400 uppercase tracking-wider block">Recent Pool Contributions</span>
                            <div className="bg-stone-50 p-2 rounded-lg border border-stone-200 flex justify-between items-center">
                              <span className="text-[8.5px] font-extrabold text-stone-800">You (Simulated)</span>
                              <span className="text-[9px] text-amber-600 font-extrabold">+$50</span>
                            </div>
                            <div className="bg-stone-50 p-2 rounded-lg border border-stone-200 flex justify-between items-center opacity-70">
                              <span className="text-[8.5px] font-extrabold text-stone-800">Alex Morgan</span>
                              <span className="text-[9px] text-stone-600 font-extrabold">+$200</span>
                            </div>
                          </div>

                          {/* INTERACTIVE SIMULATOR CHIP BUTTON! Jumps amount raised! */}
                          <button
                            onClick={() => {
                              setInteractivePoolRaised((prev) => (prev >= 2000 ? 1450 : prev + 50));
                              triggerConfetti(25, 45);
                              dispatchToast("💰 Simulated +$50 Group Gifting Contribution!");
                            }}
                            className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-white py-2.5 px-3 rounded-xl border border-amber-600 shadow-md font-black text-[9px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all self-stretch cursor-pointer select-none"
                          >
                            <span>🎁 Click to Contribute +$50 💳</span>
                          </button>
                        </div>
                      )}

                      {/* Tab 4: Delivery scheduled milestones */}
                      {activeIllusTab === "schedule" && (
                        <div className="flex-1 flex flex-col gap-2.5 justify-start text-left animate-fade-in">
                          {/* Calendar reminder milestone alert block */}
                          <div className="bg-white border border-stone-200 p-2.5 rounded-xl flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-base flex-shrink-0">
                              📅
                            </div>
                            <div>
                              <span className="text-[7.5px] text-emerald-600 uppercase font-black tracking-widest block leading-none">Automated Milestone</span>
                              <h6 className="text-[10px] font-black text-stone-800 leading-snug mt-0.5">Birthday countdown alert active</h6>
                              <p className="text-[8.5px] text-stone-400">June 15 at 10:00 AM (Universal Time Zone)</p>
                            </div>
                          </div>

                          {/* Interactive list timeline */}
                          <span className="text-[8.5px] font-black text-stone-400 uppercase tracking-wider block">Delivery Timeline Steps</span>
                          <div className="space-y-2 relative">
                            {/* Decorative line */}
                            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-stone-100 z-0" />

                            {[
                              { label: "1. Group Invitation Link Sent", status: "Completed", icon: "✅", col: "text-emerald-500" },
                              { label: "2. Joint Gifting Pool Finalized", status: "In Progress", icon: "⚡", col: "text-amber-500" },
                              { label: "3. Interactive Greetings Compiled", status: "Scheduled", icon: "🔒", col: "text-stone-400" },
                              { label: "4. Direct Hamper Delivery", status: "Automated", icon: "🚚", col: "text-stone-400" }
                            ].map((step, idx) => (
                              <div key={idx} className="flex gap-2.5 items-start relative z-10 text-[9px]">
                                <span className="bg-white border border-stone-200 rounded-full w-5.5 h-0.5 flex-shrink-0 flex items-center justify-center mt-0.5 text-[8px]">{step.icon}</span>
                                <div className="leading-tight">
                                  <span className="text-stone-800 font-extrabold block leading-none">{step.label}</span>
                                  <span className={`text-[7px] font-bold ${step.col}`}>{step.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* BOTTOM NAV BAR */}
                    <div className="bg-white border-t border-stone-100 px-6 py-3.5 flex items-center justify-between z-20 text-[10px] text-stone-500 font-extrabold flex-shrink-0">
                      <span className={activeIllusTab === "love" ? "text-indigo-600" : ""}>❤️ Love</span>
                      <span className={activeIllusTab === "contrib" ? "text-indigo-600" : ""}>👥 Sign</span>
                      <span className={activeIllusTab === "gifting" ? "text-indigo-600" : ""}>🎁 Gift</span>
                      <span className={activeIllusTab === "schedule" ? "text-indigo-600" : ""}>🗓️ Schedule</span>
                    </div>

                  </div>
                </div>
              </motion.div>

              {/* Smartphone breathing shadow */}
              <motion.div
                animate={{ scaleX: [1, 0.9, 1], opacity: [0.15, 0.08, 0.15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="w-[220px] h-4.5 bg-stone-900 rounded-full filter blur-md absolute bottom-2 pointer-events-none z-0"
              />

            </div>

          </div>
        </div>

        {/* ROW 1.5: Also in the ZippZap Universe (Displaying premium sub-brand cards) */}
        <div id="sub-brands-grid" className="border-t border-[var(--border)] pt-12 mt-6 relative z-10 w-full flex flex-col gap-8 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto mb-2">
            <span className="text-[10px] bg-[var(--blue-bg)] border border-[var(--blue-bdr)] text-[var(--blue)] px-3 py-1 rounded-full font-black uppercase tracking-widest block w-fit mx-auto mb-2.5">
              🚀 Explore The ZippZap Universe
            </span>
            <h3 className="font-sans font-black text-2xl md:text-3.5xl text-[var(--navy)] tracking-tight">
              One account. Infinite ways to coordinate celebrations.
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed mt-2">
              Every cornerstone area has its own customized system layouts, modern interface integrations, and highly targeted milestone features exactly configured inside ZippZap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "ZippZap Moments",
                emoji: "🎉",
                color: "border-pink-200 hover:border-pink-400 shadow-pink-50/40",
                badgeBg: "bg-pink-50 text-pink-600 border-pink-100",
                bullets: ["Milestone card landings", "One-click layout approvals", "Auto countdown delivery", "Group photo boards"],
                illustration: (
                  <div className="w-full bg-pink-50/50 rounded-xl p-3 h-28 border border-pink-100 flex flex-col justify-between overflow-hidden relative group-hover:bg-white transition-all">
                    <span className="text-[8px] uppercase tracking-widest font-black text-pink-500 block">Personal Board</span>
                    <div className="grid grid-cols-3 gap-1.5 z-10">
                      <div className="bg-white border border-pink-100 rounded-lg p-1 text-center scale-95 hover:scale-105 transition-transform">
                        <span className="text-xs block">🎂</span>
                        <span className="text-[6.5px] font-extrabold text-stone-500 block leading-none">Nosa</span>
                      </div>
                      <div className="bg-white border border-pink-100 rounded-lg p-1 text-center scale-105 rotate-2 transition-transform">
                        <span className="text-xs block">💑</span>
                        <span className="text-[6.5px] font-extrabold text-stone-500 block leading-none">Anniversary</span>
                      </div>
                      <div className="bg-white border border-pink-100 rounded-lg p-1 text-center scale-90 hover:scale-105 transition-transform">
                        <span className="text-xs block">👶</span>
                        <span className="text-[6.5px] font-extrabold text-stone-500 block leading-none">Shower</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[7px] text-pink-500 z-10 font-bold self-start bg-white/80 px-1.5 py-0.5 rounded-full">
                      <span>❤️ Shared Greetings</span>
                    </div>
                  </div>
                )
              },
              {
                id: "ZippZap Teams",
                emoji: "🏢",
                color: "border-emerald-200 hover:border-emerald-400 shadow-emerald-50/40",
                badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
                bullets: ["Workday HRIS deep sync", "Slack & MS Teams bots", "Multi-region bulk orders", "Tax-compliant pooling"],
                illustration: (
                  <div className="w-full bg-emerald-50/50 rounded-xl p-3 h-28 border border-emerald-100 flex flex-col justify-between overflow-hidden relative group-hover:bg-white transition-all">
                    <span className="text-[8px] uppercase tracking-widest font-black text-emerald-600 block">Enterprise Hub</span>
                    <div className="bg-white border border-emerald-100 rounded-lg p-2 flex items-center justify-between gap-1 z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] bg-emerald-100 p-0.5 rounded">🤖</span>
                        <div className="leading-none select-none text-left">
                          <span className="text-[7.5px] text-stone-800 font-extrabold block">Slack Bot Sync</span>
                          <span className="text-[6px] text-emerald-600 font-bold">Active Connection</span>
                        </div>
                      </div>
                      <span className="text-[6px] bg-stone-100 px-1 rounded font-bold uppercase">v1.4</span>
                    </div>
                    <div className="flex justify-between items-center text-[7px] font-extrabold text-stone-500 z-10">
                      <span>✓ 240 staff birthdays auto-loaded</span>
                    </div>
                  </div>
                )
              },
              {
                id: "ZippZap Circle",
                emoji: "⭕",
                color: "border-purple-200 hover:border-purple-400 shadow-purple-50/40",
                badgeBg: "bg-purple-50 text-purple-600 border-purple-100",
                bullets: ["Eschew spreadsheets", "Multi-admin permissions", "Rotating ledger history", "Committee fund safety"],
                illustration: (
                  <div className="w-full bg-purple-50/50 rounded-xl p-3 h-28 border border-purple-100 flex flex-col justify-between overflow-hidden relative group-hover:bg-white transition-all">
                    <span className="text-[8px] uppercase tracking-widest font-black text-purple-500 block">Community Savings</span>
                    <div className="bg-white border border-purple-100 rounded-lg p-2.5 flex flex-col gap-1 z-10 text-left">
                      <div className="flex justify-between items-center text-[8px] font-extrabold leading-none text-stone-800">
                        <span>Ledger Pool A</span>
                        <span className="text-purple-600">$850/$1000</span>
                      </div>
                      <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full w-4/5 rounded-full" />
                      </div>
                    </div>
                    <span className="text-[7px] text-purple-600 font-bold self-start">✓ Audit reports auto-compiled</span>
                  </div>
                )
              },
              {
                id: "ZippZap Gifts",
                emoji: "🎁",
                color: "border-amber-200 hover:border-amber-400 shadow-amber-50/40",
                badgeBg: "bg-amber-50 text-amber-600 border-amber-100",
                bullets: ["Local hamper sourcing", "Global retail voucher app", "Incognito hidden delivery", "Premium artisan gifts"],
                illustration: (
                  <div className="w-full bg-amber-50/50 rounded-xl p-3 h-28 border border-amber-100 flex flex-col justify-between overflow-hidden relative group-hover:bg-white transition-all">
                    <span className="text-[8px] uppercase tracking-widest font-black text-amber-500 block">Hamper Delivery</span>
                    <div className="flex items-center gap-1.5 z-10 text-left">
                      <div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-amber-100 text-sm">
                        🧺
                      </div>
                      <div className="leading-none text-[8.5px]">
                        <span className="text-stone-800 font-black block">Luxury Chocolates</span>
                        <span className="text-amber-600 font-bold text-[7px]">Ready to ship</span>
                      </div>
                    </div>
                    <span className="text-[7.5px] text-stone-500 font-bold block self-start">✓ Local artisan network active</span>
                  </div>
                )
              }
            ].map((brand) => {
              const fullDetails = BRAND_DETAILS[brand.id];
              return (
                <div
                  key={brand.id}
                  onClick={() => {
                    setSelectedPopBrand(fullDetails);
                    dispatchToast(`🎉 Loading ${brand.id} premium ecosystem experience.`);
                    triggerConfetti(35, 45);
                  }}
                  className={`bg-white rounded-3xl border-2 ${brand.color} p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between cursor-pointer select-none group relative overflow-hidden`}
                >
                  <div className="flex flex-col gap-3">
                    {/* Modern Feature Illustration */}
                    {brand.illustration}

                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs font-black uppercase px-2.5 py-1 rounded-full border ${brand.badgeBg}`}>
                        {brand.emoji} {brand.id}
                      </span>
                    </div>

                    <h4 className="font-sans font-black text-base text-[var(--navy)] leading-tight text-left">
                      {fullDetails.subtitle}
                    </h4>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed h-[68px] overflow-hidden text-left">
                      {fullDetails.desc}
                    </p>
                  </div>

                  <div className="border-t border-stone-100 pt-3.5 mt-4 text-left">
                    <span className="text-[9px] uppercase font-black text-[var(--text-light)] block mb-2">Key Highlights</span>
                    <div className="grid grid-cols-1 gap-1.5">
                      {brand.bullets.map((bullet, k) => (
                        <div key={k} className="flex gap-1.5 items-center text-[10.5px] text-stone-700">
                          <span className="text-emerald-500 font-black">✓</span>
                          <span className="font-semibold leading-none">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Load prompt */}
                  <div className="mt-5 w-full bg-stone-50 group-hover:bg-[var(--blue-bg)] py-2 px-3 rounded-xl border border-stone-100 group-hover:border-[var(--blue-bdr)] flex items-center justify-between text-[10px] text-stone-600 group-hover:text-[var(--blue)] font-black uppercase transition-all">
                    <span>Manage Workspace</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROW 2: Register Interest form & Continuous Process Mobile Simulator side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start border-t border-[var(--border)] pt-12 mt-4 relative z-10 w-full animate-fade-in">
          {/* Register Interest Form card (6 columns wide) */}
          <div className="lg:col-span-6">
            <FadeIn delay={300}>
              <div className="card card-custom-pattern relative bg-white border-2 border-[var(--border)] rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden animate-border-glow transition-all duration-500 group">
                
                {!formSubmitted ? (
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-[Nunito] font-extrabold text-2xl text-[var(--text)] tracking-tight">
                        {theme === "northern" ? "Raji da Sassafe ✨" : theme === "southern" ? "E darapọ mọ wa ✨" : "Get Early Access ✨"}
                      </h3>
                      <span className="text-[10px] bg-[var(--blue-bg)] text-[var(--blue)] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide">
                        {localLeads.length + 104} Joined
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                      {theme === "northern" 
                        ? "Don shigar da sunanka a rukunin farko. Kasance mai canza sheka a tsarin ZippZap."
                        : theme === "southern"
                        ? "Gba aaye akọkọ rẹ fun ayẹyẹ nla. Di aṣáájú pẹlu ZippZap."
                        : "Whether you're celebrating birthdays with friends or recognizing teams at scale — register your interest and be first through the door."
                      }
                    </p>

                    <form onSubmit={handleSubmitLead} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--text-muted)]">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={lead.firstName}
                            onChange={handleInputChange}
                            placeholder={theme === "northern" ? "Musa" : theme === "southern" ? "Oluwaseun" : "Alex"}
                            className={`bg-[var(--bg-soft)] border-2 ${formErrors.firstName ? "border-red-500" : "border-[var(--border)]"} rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-[var(--blue)] focus:bg-[var(--blue-bg)] transition-all`}
                          />
                          {formErrors.firstName && <span className="text-[9px] text-red-500 font-bold">{formErrors.firstName}</span>}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--text-muted)]">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={lead.lastName}
                            onChange={handleInputChange}
                            placeholder={theme === "northern" ? "Abubakar" : theme === "southern" ? "Adebayor" : "Morgan"}
                            className={`bg-[var(--bg-soft)] border-2 ${formErrors.lastName ? "border-red-500" : "border-[var(--border)]"} rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-[var(--blue)] focus:bg-[var(--blue-bg)] transition-all`}
                          />
                          {formErrors.lastName && <span className="text-[9px] text-red-500 font-bold">{formErrors.lastName}</span>}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--text-muted)]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={lead.email}
                          onChange={handleInputChange}
                          placeholder={theme === "northern" ? "musa@danfodiyo.edu" : theme === "southern" ? "seun@nigeriancocoa.org" : "alex@company.com"}
                          className={`bg-[var(--bg-soft)] border-2 ${formErrors.email ? "border-red-500" : "border-[var(--border)]"} rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-[var(--blue)] focus:bg-[var(--blue-bg)] transition-all`}
                        />
                        {formErrors.email && <span className="text-[9px] text-red-500 font-bold">{formErrors.email}</span>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--text-muted)]">
                            Phone <span className="opacity-60 lowercase font-normal">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={lead.phone}
                            onChange={handleInputChange}
                            placeholder="+234 803 123 4567"
                            className="bg-[var(--bg-soft)] border-2 border-[var(--border)] rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-[var(--blue)] focus:bg-[var(--blue-bg)] transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--text-muted)]">
                            I'm interested as *
                          </label>
                          <select
                            name="interestType"
                            value={lead.interestType}
                            onChange={handleInputChange}
                            className={`bg-[var(--bg-soft)] border-2 ${formErrors.interestType ? "border-red-500" : "border-[var(--border)]"} rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-[var(--blue)] focus:bg-[var(--blue-bg)] cursor-pointer transition-all`}
                          >
                            <option value="">Select type…</option>
                            <option value="Individual">Individual Friend</option>
                            <option value="Business / Corporate">Business Organization</option>
                            <option value="Events Planner / Agency">Events / Wedding Coord</option>
                            <option value="Community / Church / School">Community / Cultural</option>
                            <option value="Other">Other Surprises</option>
                          </select>
                          {formErrors.interestType && <span className="text-[9px] text-red-500 font-bold">{formErrors.interestType}</span>}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] text-white font-[Nunito] font-bold text-xs py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3 relative overflow-hidden"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Securing Your Coordinate...</span>
                          </>
                        ) : (
                          <>
                            <span>
                              {theme === "northern" ? "Yi Rajista Yanzu ⚡" : theme === "southern" ? "Fi orúkọ rẹ sílẹ̀ ⚡" : "Register My Interest ⚡"}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="relative z-10 text-center py-6 animate-pulse">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--blue)] to-[var(--purple)] text-white text-3xl mx-auto mb-6 flex items-center justify-center shadow-md">
                      🎉
                    </div>
                    <h4 className="font-[Nunito] font-extrabold text-2xl text-[var(--text)] mb-3">
                      {theme === "northern" ? "Masha Allah! Kun Shiga." : theme === "southern" ? "Eku ewu! O darapọ." : "You're on the list!"}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm mx-auto mb-6">
                      {theme === "northern" 
                        ? "Mun gode kwarai da rajista. Zamu tuntube ku da zarar an kaddamar da komai."
                        : theme === "southern"
                        ? "Ose nla fun iforukosile re. Je ki a se asopo nla nigba ti a ba bere gangan."
                        : "Thank you! We've received your interest in ZippZap. We'll be in touch the moment we launch — something extraordinary is heading your way."
                      }
                    </p>
                    <div className="inline-block bg-[var(--blue-bg)] border border-[var(--blue-bdr)] text-[var(--blue)] font-bold text-[10px] uppercase tracking-wider py-2.5 px-6 rounded-full">
                      ⚡ Watch this space
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Continuous Process Mobile Simulator (6 columns wide) */}
          <div className="lg:col-span-6">
            <FadeIn delay={400}>
              <div className="relative bg-[#0B0D1E] rounded-[2.8rem] p-3.5 border-4 border-stone-800 shadow-2xl overflow-hidden [perspective:1000px] hover:scale-[1.01] transition-transform duration-500 group select-none">
                {/* Screen Notch & Home Indicator */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-stone-950 rounded-full z-30 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
                </div>
                <div className="absolute inset-x-0 bottom-1 h-1 bg-white/20 rounded-full mx-auto w-24 mb-1 z-30" />
                
                <div className="bg-stone-950 rounded-[2.2rem] p-4.5 pt-7 text-white font-sans relative overflow-hidden flex flex-col gap-4">
                  {/* Background Cosmic Starry Ambient Layout */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-stone-950 to-stone-950 -z-10" />
                  
                  {/* Header bar of steps */}
                  <div className="flex items-center justify-between border-b border-indigo-950/60 pb-3">
                    <div>
                      <span className="text-[7.5px] bg-indigo-500/20 text-indigo-300 font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border border-indigo-500/20">ZippZap Live Process</span>
                      <h4 className="text-xs font-black text-stone-100 mt-1">Unified Gathering Flow</h4>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-bold animate-pulse flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Live
                    </span>
                  </div>

                  {/* Main continuous step flowchart graphic container */}
                  <div className="flex flex-col gap-4.5 relative">
                    
                    {/* Continuous Connecting Laser Line */}
                    <div className="absolute left-5.5 top-3.5 bottom-8 w-[2px] bg-dashed border-l-2 border-dashed border-indigo-900/60 z-0" />
                    <div className="absolute left-5.5 top-3.5 bottom-16 w-[2px] bg-gradient-to-b from-amber-500 via-rose-500 to-teal-400 z-0 animate-pulse" />

                    {/* Step 1 */}
                    <div className="flex gap-3 items-start relative z-10 group/step">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border-2 border-amber-500/25 text-amber-400 flex flex-shrink-0 items-center justify-center text-sm shadow-sm group-hover/step:scale-110 group-hover/step:border-amber-400/40 transition-all duration-300">
                        🔗
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[8.5px] font-black uppercase text-amber-400 tracking-wider">Step 1</span>
                          <span className="bg-amber-500/20 text-amber-200 text-[6.5px] font-extrabold uppercase px-1.5 py-0.5 rounded-full">Link SentByOne</span>
                        </div>
                        <h5 className="text-[10.5px] font-black text-stone-100 leading-tight mt-0.5">Coordinator dispatches link</h5>
                        <p className="text-[9px] text-stone-400 leading-snug mt-0.5">A secure custom-branded portal link is shared with the celebration group via WhatsApp or Slack.</p>
                        {/* Visual link pill */}
                        <div className="bg-stone-900/90 border border-indigo-950/60 p-1.5 rounded-md text-[8px] font-mono text-indigo-300 mt-1.5 flex items-center justify-between">
                          <span className="truncate">zippzap.com/nosa-30th</span>
                          <span className="text-[7px] bg-indigo-500/20 text-indigo-300 px-1 rounded flex-shrink-0">Copy ⚡</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-3 items-start relative z-10 group/step">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border-2 border-rose-500/25 text-rose-400 flex flex-shrink-0 items-center justify-center text-sm shadow-sm group-hover/step:scale-110 group-hover/step:border-rose-400/40 transition-all duration-300">
                        📹
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[8.5px] font-black uppercase text-rose-400 tracking-wider">Step 2</span>
                          <span className="bg-rose-500/20 text-rose-200 text-[6.5px] font-extrabold uppercase px-1.5 py-0.5 rounded-full">RecordedByOne</span>
                        </div>
                        <h5 className="text-[10.5px] font-black text-stone-100 leading-tight mt-0.5">Guests record video wishes</h5>
                        <p className="text-[9px] text-stone-400 leading-snug mt-0.5">Friends from different continents tap the link and easily record high-fidelity video blessings & gift notes directly from their mobile web browsers.</p>
                        {/* Recording element simulation */}
                        <div className="bg-stone-900/90 border border-rose-950 p-1.5 rounded-md text-[8px] mt-1.5 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                            <span className="text-[7.5px] text-stone-300 truncate">Uncle Seun Recording...</span>
                          </div>
                          <span className="text-stone-500 font-mono text-[7px] flex-shrink-0">0:45s</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-3 items-start relative z-10 group/step">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border-2 border-indigo-500/25 text-indigo-400 flex flex-shrink-0 items-center justify-center text-sm shadow-sm group-hover/step:scale-110 group-hover/step:border-indigo-400/40 transition-all duration-300">
                        ⚡
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[8.5px] font-black uppercase text-indigo-400 tracking-wider">Step 3</span>
                          <span className="bg-indigo-500/20 text-indigo-200 text-[6.5px] font-extrabold uppercase px-1.5 py-0.5 rounded-full">Videos Compiled</span>
                        </div>
                        <h5 className="text-[10.5px] font-black text-stone-100 leading-tight mt-0.5">Automatic group compilation</h5>
                        <p className="text-[9px] text-stone-400 leading-snug mt-0.5">One click triggers the compiler engine to automatically stitch multiple video clips, greetings, and financial registries into a seamless digital gift package.</p>
                        {/* Compilation status */}
                        <div className="bg-stone-900/90 border border-indigo-950 p-1 rounded-md text-[8.5px] mt-1.5 flex items-center justify-between">
                          <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden relative border border-indigo-950">
                            <div className="bg-gradient-to-r from-indigo-500 via-rose-500 to-teal-400 h-full w-4/5 rounded-full animate-pulse" />
                          </div>
                          <span className="text-[7.5px] font-extrabold text-indigo-300 flex-shrink-0 ml-2">80% Done</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-3 items-start relative z-10 group/step">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border-2 border-teal-500/25 text-teal-400 flex flex-shrink-0 items-center justify-center text-sm shadow-sm group-hover/step:scale-110 group-hover/step:border-teal-400/40 transition-all duration-300">
                        📦
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[8.5px] font-black uppercase text-teal-400 tracking-wider">Step 4</span>
                          <span className="bg-teal-500/20 text-teal-200 text-[6.5px] font-extrabold uppercase px-1.5 py-0.5 rounded-full">Delivered Perfectly</span>
                        </div>
                        <h5 className="text-[10.5px] font-black text-stone-100 leading-tight mt-0.5">Hampers & pool transfer</h5>
                        <p className="text-[9px] text-stone-400 leading-snug mt-0.5">Funds are routed instantly to the target recipient's account, and elegant hand-crafted physical chocolate gift box hampers arrive safely at their home.</p>
                        {/* Delivery simulator info */}
                        <div className="flex gap-1.5 mt-1.5">
                          <div className="flex-1 bg-stone-900 p-1 rounded-md border border-teal-950/60 flex items-center gap-1 truncate">
                            <span className="text-[8px]">🚚</span>
                            <span className="text-[7.5px] text-stone-300 truncate font-sans">Lagos Dispatch En-route</span>
                          </div>
                          <div className="flex-1 bg-stone-900 p-1 rounded-md border border-teal-950/60 flex items-center gap-1 truncate">
                            <span className="text-[8px]">🏦</span>
                            <span className="text-[7.5px] text-stone-300 truncate font-sans font-medium">Bank Transfer Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex gap-3 items-start relative z-10 group/step">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/10 border-2 border-pink-500/25 text-pink-400 flex flex-shrink-0 items-center justify-center text-sm shadow-sm group-hover/step:scale-110 group-hover/step:border-pink-400/40 transition-all duration-300 animate-bounce" style={{ animationDuration: "1.8s" }}>
                        💖
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[8.5px] font-black uppercase text-pink-400 tracking-wider">Step 5</span>
                          <span className="bg-pink-500/20 text-pink-200 text-[6.5px] font-extrabold uppercase px-1.5 py-0.5 rounded-full">Recived Person Watch</span>
                        </div>
                        <h5 className="text-[10.5px] font-black text-stone-100 leading-tight mt-0.5">Unforgettable absolute joy</h5>
                        <p className="text-[9px] text-stone-400 leading-snug mt-0.5">The recipient watches their compiled video roll, opens card signatures, and jumps with ultimate tearful celebration. Group love is perfectly completed!</p>
                        {/* Happy family watch block */}
                        <div className="mt-1.5 p-1 rounded-lg bg-gradient-to-r from-rose-500/10 to-indigo-500/10 border border-indigo-950 flex items-center gap-1.5">
                           <div className="w-7 h-7 rounded bg-stone-900 overflow-hidden flex-shrink-0">
                            <img src={familyCelebrationGiftsImg} alt="family joy" className="w-full h-full object-cover animate-pulse" />
                           </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[7.5px] font-extrabold text-stone-100 block truncate font-sans">Nosa watching wishes...</span>
                            <span className="text-[6.5px] text-rose-300 block font-sans">♥ Crying happy tears!</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Interactive tester button */}
                  <button
                    type="button"
                    onClick={() => {
                      triggerConfetti(60, 50);
                      dispatchToast("💖 Feeling the ultimate user joy! All video moments automatically compiled.");
                    }}
                    className="w-full mt-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500 text-white font-black text-[9px] uppercase tracking-widest py-2.5 px-4 rounded-xl shadow-lg hover:shadow-indigo-500/25 cursor-pointer transition-transform active:scale-95 duration-100 flex items-center justify-center gap-1.5"
                  >
                    <span>Simulate Recipient Joy Experience 🎁</span>
                    <span>✨</span>
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OCCASIONS STRIP (Interactive Slider Layout) ────────────────────────── */}
      <section className="bg-[var(--bg-section)] border-t border-b border-[var(--border)] py-10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-6">
            Perfect for any celebration coordinate
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "🎂 Birthdays", bg: "bg-red-50 hover:bg-red-100/80 border-red-200" },
              { label: "💑 Anniversaries", bg: "bg-pink-50 hover:bg-pink-100/80 border-pink-200" },
              { label: "💒 Weddings", bg: "bg-indigo-50 hover:bg-indigo-100/80 border-indigo-200" },
              { label: "🍼 Baby Showers", bg: "bg-amber-50 hover:bg-amber-100/80 border-amber-200" },
              { label: "🎓 Graduations", bg: "bg-emerald-50 hover:bg-emerald-100/80 border-emerald-200" },
              { label: "🏆 Work Milestones", bg: "bg-teal-50 hover:bg-teal-100/80 border-teal-200" },
              { label: "🎉 Retirements", bg: "bg-violet-50 hover:bg-violet-100/80 border-violet-200" },
              { label: "🐪 Arewa Shagali", bg: "bg-green-50 hover:bg-green-100/80 border-green-200" },
              { label: "📿 Southern Traditional", bg: "bg-orange-50 hover:bg-orange-100/80 border-orange-200" }
            ].map((chip, idx) => (
              <div
                key={idx}
                onClick={() => {
                  const details = CELEBRATION_PRESETS[chip.label];
                  if (details) {
                    setSelectedCelebration(details);
                    dispatchToast(`✨ Loaded detail coordinates for ${chip.label}!`);
                    triggerConfetti(50, 40);
                  } else {
                    dispatchToast(`✨ Celebrations for ${chip.label} will feature custom layout presets!`);
                  }
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border bg-white ${chip.bg} text-xs font-semibold text-[var(--text-mid)] drop-shadow-sm hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer select-none`}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PHONE PREVIEW & FAMILY JOY EXPERIENCE SANDBOX ── */}
      <section className="bg-stone-50 border-b border-[var(--border)] py-16 md:py-24 px-6 md:px-16 relative overflow-hidden z-20">
        {/* Soft background glow accents */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-200/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-200/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Phone Mockup Screen Simulator (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative [perspective:1200px]">
            <FadeIn delay={150} className="w-full">
              <div className="text-center mb-8 lg:hidden">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[var(--blue)] bg-[var(--blue-bg)] px-3.5 py-1 rounded-full mb-2.5 inline-block border border-[var(--blue-bdr)]">
                  Device Experience Sandbox
                </span>
                <h3 className="font-sans font-black text-2xl text-[var(--navy)]">Try the Custom Live App</h3>
                <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">Interact directly below! Type note signages or click progress contributions to test-drive standard user flows.</p>
              </div>
            </FadeIn>

            {/* Smart Phone Shell Container - with gorgeous modern 3D tilted leaning perspective and vertical floating animation */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut"
              }}
              className="w-full relative flex flex-col items-center justify-center"
            >
              <div className="relative mx-auto bg-[#0C0E1E] rounded-[3.2rem] p-3.5 shadow-2xl border-4 border-stone-800 w-full max-w-[340px] select-none hover:shadow-indigo-100/50 transition-all duration-700 ease-out transform [transform:rotateY(-12deg)_rotateX(8deg)_rotateZ(-2.7deg)] hover:[transform:none] hover:scale-[1.04] origin-center z-15">
                {/* Dynamic Camera Notch / Dynamic Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-stone-950 rounded-full z-30 flex items-center justify-between px-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
                  <span className="w-8 h-1 bg-stone-800 rounded-full" />
                </div>

                {/* Volume & Power buttons overlays */}
                <div className="absolute -left-1.5 top-28 w-1 h-12 bg-stone-700 rounded-l-md" />
                <div className="absolute -left-1.5 top-44 w-1 h-12 bg-stone-700 rounded-l-md" />
                <div className="absolute -right-1.5 top-36 w-1 h-16 bg-stone-700 rounded-r-md" />

                {/* Phone screen inner view */}
                <div className="bg-stone-50 rounded-[2.6rem] overflow-hidden aspect-[9/19.2] h-[550px] relative flex flex-col justify-between border border-stone-200 shadow-inner">
                  <PhoneSimulator parentTheme={theme} customLogoUrl={customLogoUrl} />
                </div>
              </div>

              {/* Floating Family Celebration Jump Badge with Gift Box */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -right-4 bottom-14 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-rose-100 max-w-[135px] hidden md:flex flex-col items-center text-center cursor-pointer group"
                whileHover={{ scale: 1.1, translateY: -5 }}
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden mb-2 border border-amber-100 bg-amber-50">
                  <img
                    src={familyCelebrationGiftsImg}
                    alt="Happy family celebrations jump"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-0 right-0 bg-rose-500 text-white rounded-full p-0.5 text-[8px] font-bold animate-bounce" style={{ animationDuration: "1.2s" }}>🎁</span>
                </div>
                <span className="text-[7.5px] uppercase font-black text-rose-500 tracking-wider">Joint Gift Joy</span>
                <span className="text-[8.5px] text-stone-800 font-extrabold leading-tight">Families Celebrate! 🎉</span>
              </motion.div>
            </motion.div>
            
            {/* Phone shell shadow base with breathing resize animation mapping */}
            <motion.div
              animate={{ scaleX: [1, 0.88, 1], opacity: [0.14, 0.07, 0.14] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut"
              }}
              className="w-[220px] h-4 bg-stone-900 rounded-full filter blur-md mt-4 pointer-events-none"
            />
          </div>

          {/* RIGHT: Family enjoying photo and copy highlights (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--blue-bg)] border border-[var(--blue-bdr)] text-[var(--blue)] text-xs font-bold uppercase tracking-wider mb-6">
                <span>📱 Zero Install Web Standard</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight leading-[1.1] text-[var(--navy)] mb-6">
                Loved by Grandparents.<br />
                <em className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent not-italic font-sans font-black">Adored by youth.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-8">
                No complex downloads, logins, or App Store hassle. Guests simply scan a secure venue QR code or tap a group text link to read warm wishes, admire custom photography, and contribute to standard pools securely in any web browser.
              </p>
            </FadeIn>

            {/* Embedded Real Family Photo with floating metadata */}
            <FadeIn delay={400} className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-[var(--border)] group/family mb-8 bg-[var(--bg-soft)]">
              <img
                src={familyMilestoneImg}
                alt="Loved ones celebrating together with ZippZap"
                referrerPolicy="no-referrer"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-1000 group-hover/family:scale-[1.03]"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white">
                <span className="text-[8px] tracking-widest uppercase font-extrabold text-amber-400 mb-0.5 block">Active Celebration Coordinate</span>
                <p className="text-[10px] md:text-xs font-semibold text-stone-100 leading-relaxed italic">
                  "Our elderly relatives in Enugu signed the greeting list effortlessly. We pooled ₦250,000 for local hampers in under an hour right from our parlor!"
                </p>
                <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-white/10">
                  <span className="text-[9px] text-[#A8A29E]">— Alhaji J. Yusuf & Family, Abuja</span>
                  <div className="flex items-center gap-0.5 text-amber-400 text-[10px]">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Micro Highlights of standard alignment features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[var(--border)] rounded-2xl p-4.5">
                <div className="font-bold text-xs text-[var(--text)] flex items-center gap-2 mb-1.5">
                  <span className="text-emerald-500 text-base">✓</span> Fully Optimized Alignment
                </div>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">Coded with fluid percentage margins to render beautifully from small portable phone screens back up to ultra-wide desktop monitors.</p>
              </div>
              <div className="bg-white border border-[var(--border)] rounded-2xl p-4.5">
                <div className="font-bold text-xs text-[var(--text)] flex items-center gap-2 mb-1.5">
                  <span className="text-emerald-500 text-base">✓</span> High-Fidelity Performance
                </div>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">Compressed vector styling guarantees pristine performance even during dense mobile data roaming in remote regions.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── B2B / TEAMS ORGANIZATIONS SECTION ────────────────── */}
      <section className="bg-gradient-to-tr from-[var(--navy)] via-[var(--dark-mid)] to-[var(--navy)] text-white py-20 px-6 md:px-16 relative overflow-hidden transition-all duration-500" id="teams">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle coordinate grids overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* TEAMS LEFT */}
          <div className="lg:col-span-6">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--blue)]/10 border border-[var(--blue-bdr)] text-[var(--blue-l)] text-xs font-bold uppercase tracking-wider mb-6">
                <Building className="w-3.5 h-3.5" />
                <span>ZippZap Teams — For Organizations</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="font-[Nunito] text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Celebrations at scale,
                <span className="block text-[var(--blue-l)] mt-2 font-black">culture made visible.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-sm md:text-base text-stone-400 leading-relaxed mb-10 max-w-lg">
                The comprehensive infrastructure for meaningful employee celebrations. Automate major life milestones, recognize distributed teams, and cultivate genuine culture through shared coordinates.
              </p>
            </FadeIn>

            {/* Sub feature bullet cards */}
            <div className="space-y-6 mb-10">
              {[
                { icon: <Settings className="w-4 h-4 text-[var(--blue-l)]" />, title: "Automate organization milestones", desc: "Sync birthdays and work anniversaries seamlessly with your HR systems." },
                { icon: <Globe className="w-4 h-4 text-[var(--blue-l)]" />, title: "Built for distributed global teams", desc: "Enable remote co-workers to post, coordinate, and pool gifts inside slack." },
                { icon: <CheckCircle2 className="w-4 h-4 text-[var(--blue-l)]" />, title: "Automatic HRIS Integrations", desc: "Integrate natively with Workday, Slack, MS Teams, and BambooHR." }
              ].map((f, i) => (
                <FadeIn key={i} delay={400 + i * 100}>
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[var(--blue)]/10 border border-[var(--blue)]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5 group-hover:text-[var(--blue-l)] transition-colors duration-300">{f.title}</h4>
                      <p className="text-xs text-stone-400">{f.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* B2B Action buttons */}
            <FadeIn delay={700}>
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <button
                  onClick={() => dispatchToast("📞 Booking calendar loading... We'll be in touch!")}
                  className="bg-[var(--blue)] hover:bg-[var(--blue-l)] text-white font-[Nunito] font-extrabold text-xs py-3.5 px-7 rounded-2xl shadow-lg hover:shadow-[var(--blue)]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2 duration-300"
                >
                  <span>Book ZippZap Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => dispatchToast("📘 Documentation portal is in setup. Watch out for our whitepaper!")}
                  className="bg-[#12163C] border border-[#252E7A] hover:border-indigo-400 text-indigo-200 font-[Nunito] font-extrabold text-xs py-3.5 px-7 rounded-2xl hover:bg-[#1D225C] hover:text-white transition-all cursor-pointer duration-300 shadow-sm"
                >
                  See How It Works
                </button>
              </div>
            </FadeIn>
 
            {/* Social Logos */}
            <FadeIn delay={800}>
              <div className="flex flex-wrap items-center gap-6 opacity-30 mt-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">
                  Trusted by teams at
                </span>
                <div className="flex flex-wrap gap-5 text-xs font-semibold text-[#2B2BE8]">
                  <span className="hover:opacity-100 cursor-pointer">Acme Corp</span>
                  <span className="hover:opacity-100 cursor-pointer">Radius Partners</span>
                  <span className="hover:opacity-100 cursor-pointer">Brightly Labs</span>
                  <span className="hover:opacity-100 cursor-pointer">Cloudix SaaS</span>
                  <span className="hover:opacity-100 cursor-pointer">Sitemark Global</span>
                </div>
              </div>
            </FadeIn>
          </div>
 
          {/* TEAMS RIGHT: HIGH-FIDELITY INTERACTIVE DASHBOARD PREVIEW */}
          <div className="lg:col-span-6">
            <FadeIn delay={400}>
              <div className="bg-[#0E1236]/95 border border-[#232B78] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 hover:shadow-[var(--blue-bg)]/20 transition-all duration-500 group">
                
                {/* Browser top chrome */}
                <div className="bg-[#090C28] px-6 py-4 flex items-center justify-between border-b border-[#232B78]">
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[10px] font-bold text-indigo-400 font-mono tracking-widest">
                    SECURE_PANEL // TEAMS_PREVIEW
                  </span>
                </div>
 
                {/* Dashboard Core Body */}
                <div className="p-6 md:p-8 space-y-6">
                  
                  {/* Greeting header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Welcome back, Olivia 👋</h4>
                      <p className="text-[10px] text-indigo-300/70 font-semibold">Corporate Administrator Coordinate Panel</p>
                    </div>
                    <span className="text-[10px] uppercase font-bold bg-[var(--blue)]/20 text-indigo-200 border border-[var(--blue)]/30 px-3 py-1 rounded-full animate-pulse">
                      Live connection
                    </span>
                  </div>
 
                  {/* Operational stats row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { l: "Upcoming", v: "24", c: "text-white" },
                      { l: "Messages", v: "128", c: "text-white" },
                      { l: "Joint Vault", v: "₦1.8M", c: "text-[var(--teal)] font-bold animate-pulse" },
                      { l: "Engagement", v: "92%", c: "text-[var(--teal)] font-bold" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-[#080B22]/75 p-3.5 rounded-2xl border border-[#1E2568] hover:border-[var(--blue-bdr)]/40 hover:bg-[#13194B]/50 border-l-4 border-l-[var(--teal)] transition-all duration-350">
                        <span className="text-[9px] text-indigo-300 font-bold uppercase tracking-wider block mb-1">{stat.l}</span>
                        <span className={`text-base font-extrabold ${stat.c}`}>{stat.v}</span>
                      </div>
                    ))}
                  </div>
 
                  {/* Scheduled elements list */}
                  <div className="bg-[#080B22] rounded-2xl border border-[#1E2568] overflow-hidden">
                    <div className="px-5 py-3.5 border-b border-[#1E2568] flex justify-between items-center bg-[#090C28]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">Upcoming Workplace Celebrations</span>
                      <button
                        onClick={() => dispatchToast("⭐ Loading all coordinates directory...")}
                        className="text-[10px] text-[var(--blue-l)] hover:text-white font-bold tracking-wide hover:underline transition-colors duration-250"
                      >
                        View calendar
                      </button>
                    </div>
 
                    <div className="divide-y divide-[#131744] bg-[#080B22]">
                      {[
                        { short: "EJ", name: "Emma Johnson", date: "May 12", role: "Product Architecture", style: "bg-indigo-600", tag: "🎂 Birthday" },
                        { short: "DL", name: "David Lee", date: "May 15", role: "VP Engineering", style: "bg-cyan-600", tag: "🏆 3-Yr Anniv" },
                        { short: "SM", name: "Sophia Martinez", date: "May 18", role: "People Lead", style: "bg-purple-600", tag: "🎂 Birthday" },
                        { short: "JW", name: "James Wilson", date: "May 21", role: "Account Director", style: "bg-emerald-600", tag: "🍼 Baby Shower" }
                      ].map((u, i) => (
                        <div key={i} className="p-4 flex items-center justify-between gap-3 hover:bg-[#13184C]/50 transition-colors duration-250">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${u.style} flex items-center justify-center text-[10px] font-black text-white`}>
                              {u.short}
                            </div>
                            <div>
                              <h5 className="text-xs font-bold text-stone-200">{u.name}</h5>
                              <p className="text-[9px] text-indigo-300/70 font-semibold">{u.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-semibold text-indigo-300/80">{u.date}</span>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#131945] text-indigo-300 border border-[#252E7A]">
                              {u.tag}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ── THE FOUR WORLDS UNIVERSE BENTO GRID ───────────────────── */}
      <section className="bg-[var(--bg-section)] py-20 px-6 md:px-16" id="universe">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[var(--blue)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)] font-mono">The ZippZap Universe</span>
                <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[var(--blue)]" />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="font-[Nunito] text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--navy)] mb-4">
                One Coordinate. <em className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent not-italic font-black">Four Worlds.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                A highly comprehensive, beautifully designed ecosystem for gifting, recognition, and coordination—expertly crafted for individuals, teams, families, and cultural communities.
              </p>
            </FadeIn>
          </div>

          {/* Core Universe Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🎉",
                title: "ZippZap Moments",
                aud: "For Individuals & Family",
                desc: "Seamless group greetings, memory vaults, and joint gifting coordination for friends. Make birthdays, baby showers, and weddings unforgettable.",
                borderClass: "hover:border-[var(--blue)] hover:shadow-[var(--blue)]/10",
                image: classicGatheringImg
              },
              {
                emoji: "🏢",
                title: "ZippZap Teams",
                aud: "For Workplaces",
                desc: "Enterprise-grade workplace celebration structures. Automate milestone calendars, synchronize directory channels, and cultivate active inclusion.",
                borderClass: "hover:border-emerald-600 hover:shadow-emerald-600/10",
                image: corporateMilestoneImg
              },
              {
                emoji: "⭕",
                title: "ZippZap Circle",
                aud: "For Communities",
                desc: "Bring group pooling, digital greetings, and celebratory organization to your local school, cultural committee, or neighborhood coordinate circles.",
                borderClass: "hover:border-violet-600 hover:shadow-violet-600/10",
                image: southernWeddingImg
              },
              {
                emoji: "🎁",
                title: "ZippZap Gifts",
                aud: "Surprise Infrastructure",
                desc: "Durable shared marketplace of physical gift surprise coordinate baskets, custom retail vouchers, and physical milestones sourced globally.",
                borderClass: "hover:border-amber-600 hover:shadow-amber-600/10",
                image: luxuryGiftHamperImg
              }
            ].map((sub, i) => (
              <FadeIn key={i} delay={100 + i * 100}>
                <div
                  onClick={() => {
                    const details = BRAND_DETAILS[sub.title as keyof typeof BRAND_DETAILS];
                    if (details) {
                      setSelectedPopBrand(details);
                      dispatchToast(`📖 Loaded details for ${sub.title}!`);
                    } else {
                      dispatchToast(`🚀 ${sub.title} details under compilation.`);
                    }
                  }}
                  className={`bg-white border-2 border-[var(--border)] rounded-2xl p-5 flex flex-col justify-between h-full hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden group ${sub.borderClass}`}
                >
                  {/* Top corner gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* High-fidelity card header frame with real photograph representing the world */}
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-[var(--border)] group-hover:shadow-md transition-all duration-500">
                      <img 
                        src={sub.image} 
                        alt={sub.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-stone-200/50 w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {sub.emoji}
                      </div>
                    </div>

                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[var(--blue)] block mb-1">
                      {sub.aud}
                    </span>
                    <h3 className="font-sans font-extrabold text-base text-[var(--text)] mb-3 tracking-snug">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6 font-medium">
                      {sub.desc}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-soft)] border border-[var(--border)] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] cs-dot-animated" />
                    <span className="text-[8px] font-bold uppercase tracking-wider text-stone-400">Coming Soon</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── CORE FEATURES STRIP ──────────────────────────── */}
      <section className="bg-[#0B0F2A] text-white border-t border-[#1C235F] divide-y md:divide-y-0 md:divide-x divide-[#1C235F] grid grid-cols-1 md:grid-cols-4 select-none relative z-10" id="how-it-works">
        {[
          { 
            icon: <Zap className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />, 
            title: "Extremely Easy Setup", 
            desc: "Initiate coordinates in seconds and invite anyone easily.",
            hoverBg: "hover:bg-amber-500/5",
            accentColor: "text-amber-400",
            borderColor: "group-hover:border-amber-400/40",
            iconBg: "bg-amber-500/10 border-amber-500/20"
          },
          { 
            icon: <ShieldCheck className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />, 
            title: "Secure Vault Safeguard", 
            desc: "Encrypted payments, strict private vaults, and total control.",
            hoverBg: "hover:bg-emerald-500/5",
            accentColor: "text-emerald-400",
            borderColor: "group-hover:border-emerald-400/40",
            iconBg: "bg-emerald-500/10 border-emerald-500/20"
          },
          { 
            icon: <Globe className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />, 
            title: "Works Universally", 
            desc: "Operate natively with hybrid, local, or remote coordinates.",
            hoverBg: "hover:bg-cyan-500/5",
            accentColor: "text-cyan-400",
            borderColor: "group-hover:border-cyan-400/40",
            iconBg: "bg-cyan-500/10 border-cyan-500/20"
          },
          { 
            icon: <Heart className="w-5 h-5 text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />, 
            title: "Genuinely Memorable", 
            desc: "Aesthetic card envelopes that make contributors look amazing.",
            hoverBg: "hover:bg-pink-500/5",
            accentColor: "text-pink-400",
            borderColor: "group-hover:border-pink-400/40",
            iconBg: "bg-pink-500/10 border-pink-500/20"
          }
        ].map((f, i) => (
          <div key={i} className={`p-8 ${f.hoverBg} cursor-default transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[190px]`}>
            {/* Subtle light overlay */}
            <div className="absolute inset-0 bg-radial-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div>
              <div className={`mb-4 w-fit p-3 rounded-2xl border ${f.iconBg} ${f.borderColor} transition-all duration-350 group-hover:scale-110 flex items-center justify-center`}>
                {f.icon}
              </div>
              <h4 className={`text-xs font-black uppercase tracking-wider mb-2 transition-colors duration-300 ${f.accentColor}`}>
                {f.title}
              </h4>
              <p className="text-xs text-indigo-200/70 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
            
            {/* Tiny accent corner dot */}
            <div className={`w-1.5 h-1.5 rounded-full absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ backgroundColor: `currentColor` }} />
          </div>
        ))}
      </section>

      {/* ── THE LIVING ART OF CULTURAL CELEBRATIONS: HIGH-FIDELITY GALLERY ── */}
      <section className="bg-[var(--bg)] py-20 px-6 md:px-16 border-t border-b border-[var(--border)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[var(--blue)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)] font-mono">Living Milestones Directory</span>
                <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[var(--blue)]" />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--navy)] mb-4">
                The Living Art of <em className="bg-gradient-to-r from-[var(--purple)] to-[var(--pink)] bg-clip-text text-transparent not-italic font-sans font-black">Culture & Celebration</em>
              </h2>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Explore real, authentic snapshots of the rich traditions and milestones ZippZap coordinates perfectly. No matter where you are, coordinate family and workplace milestones instantly.
              </p>
            </FadeIn>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: classicGatheringImg,
                title: "Classic Milestone Coordinates",
                location: "London • Atlanta • global",
                desc: "Modern multi-ethnic celebrations, birthdays, graduations, and collective corporate anniversaries integrated beautifully.",
                badge: "🎂 Classic"
              },
              {
                src: northernShagaliImg,
                title: "Arewa Cultural Heritage Shagali",
                location: "Kano • Abuja • Kaduna",
                desc: "Traditional Hausa celebrations, Durbar-style horse gatherings, royal embroidered kaftan delivery coordinates.",
                badge: "🕌 Northern"
              },
              {
                src: southernWeddingImg,
                title: "Southern Royal Coral Majesty",
                location: "Lagos • Enugu • Ibadan",
                desc: "Vibrant Yoruba & Igbo weddings, traditional Aso-Ebi registries, royal red coral beads, and fully-vetted guest gift bookkeeping.",
                badge: "👑 Southern"
              },
              {
                src: luxuryGiftHamperImg,
                title: "Artisanal Hampers & Handcrafted Boxes",
                location: "Domestic & Diaspora Delivery",
                desc: "Curated premium surprise boxes with gourmet treats, local craft gifts, wine arrangements, and customized blessing cards.",
                badge: "🎁 Marketplace"
              }
            ].map((photo, pIdx) => (
              <FadeIn key={pIdx} delay={100 + pIdx * 100}>
                <div className="group rounded-3xl bg-white border-2 border-[var(--border)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--bg-soft)]">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[9px] font-extrabold uppercase tracking-widest text-[var(--blue)] border border-stone-200/50 shadow-sm animate-pulse">
                      {photo.badge}
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col justify-between h-[180px]">
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-stone-400 block mb-1">
                        {photo.location}
                      </span>
                      <h4 className="font-sans font-extrabold text-[#0C0E1E] text-xs sm:text-sm line-clamp-1 mb-2 group-hover:text-[var(--blue)] transition-colors duration-300">
                        {photo.title}
                      </h4>
                      <p className="text-[11px] text-[var(--text-muted)] leading-relaxed line-clamp-3 font-medium">
                        {photo.desc}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => {
                        dispatchToast(`✨ Coordinate mapping for "${photo.title}" loaded!`);
                        triggerConfetti(50, 50);
                      }}
                      className="text-[9px] font-bold uppercase tracking-wider text-[var(--blue)] hover:text-[var(--blue-l)] text-left flex items-center gap-1.5 cursor-pointer mt-3 group/btn"
                    >
                      <span>Explore presets</span>
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL CAROUSEL SECTION ───────────────────────── */}
      <section className="bg-[var(--bg-section)] py-16 px-6 md:px-16 border-t border-[var(--border)] relative z-10" id="testimonials">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 bg-[var(--blue-bg)] border border-[var(--blue-bdr)] px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[var(--blue)] mb-3">
              <span className="w-1.5 h-1.5 bg-[var(--blue)] rounded-full animate-ping" />
              Verified Global Stories
            </div>
            <h3 className="font-[Nunito] font-[900] text-2xl md:text-4xl text-[var(--navy)] tracking-tight">
              Loved by Celebrators Worldwide
            </h3>
            <p className="text-xs text-[var(--text-light)] max-w-sm mx-auto mt-2 font-medium">
              See how modern friends, remote teams, and multi-country families use ZippZap to coordinate group love.
            </p>
          </div>

          <div className="bg-white border-2 border-[var(--border)] rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-md max-w-3xl mx-auto hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle_at_top_right,_var(--blue-bg)_0%,_transparent_60%)] pointer-events-none" />
            
            {/* Quote decoration */}
            <span className="absolute top-4 left-6 text-7xl text-[var(--blue-bdr)] opacity-40 font-serif select-none pointer-events-none">“</span>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {TESTIMONIALS.map((t, idx) => {
                  const isActive = activeTestimonialIdx === idx;
                  if (!isActive) return null;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col md:flex-row md:items-start gap-6"
                    >
                      <img
                        src={t.avatar}
                        referrerPolicy="no-referrer"
                        alt={t.author}
                        className="w-16 h-16 rounded-2xl border-2 border-[var(--blue-bdr)] object-cover shadow-sm self-center md:self-start flex-shrink-0"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-xs sm:text-sm italic font-semibold text-[var(--text-mid)] leading-relaxed mb-4">
                          "{t.quote}"
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-1 sm:gap-2">
                          <span className="text-xs font-black text-[#0C0E1E]">{t.author}</span>
                          <span className="hidden sm:inline text-stone-300">•</span>
                          <span className="text-[9px] font-extrabold text-[var(--blue)] uppercase bg-[var(--blue-bg)] px-2.5 py-0.5 rounded-full inline-block w-fit mx-auto sm:mx-0 border border-[var(--blue-bdr)]">
                            {t.role} ({t.location})
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-8 border-t border-[var(--border)] pt-4 relative z-10">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveTestimonialIdx(idx);
                      dispatchToast(`💬 Loaded story from ${TESTIMONIALS[idx].author}`);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonialIdx === idx 
                        ? "w-7 bg-[var(--blue)]" 
                        : "w-2.5 bg-stone-200 hover:bg-stone-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveTestimonialIdx((prev) => (prev - 1 + 4) % 4);
                  }}
                  className="w-9 h-9 rounded-xl border border-[var(--border)] hover:border-[var(--blue-bdr)] hover:bg-[var(--blue-bg)] hover:text-[var(--blue)] text-stone-600 flex items-center justify-center text-xs font-black transition-all cursor-pointer shadow-sm active:scale-90"
                >
                  ←
                </button>
                <button
                  onClick={() => {
                    setActiveTestimonialIdx((prev) => (prev + 1) % 4);
                  }}
                  className="w-9 h-9 rounded-xl border border-[var(--border)] hover:border-[var(--blue-bdr)] hover:bg-[var(--blue-bg)] hover:text-[var(--blue)] text-stone-600 flex items-center justify-center text-xs font-black transition-all cursor-pointer shadow-sm active:scale-90"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER PAGE SECTION (DARK MIDNIGHT FOOTER) ─────────────────── */}
      <footer className="bg-gradient-to-b from-[#090C28] to-[#050618] text-indigo-100 border-t border-[#1C2568] relative overflow-hidden z-10 font-sans" id="about-us">
        {/* Colorful top divider ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[var(--blue)] via-[var(--pink)] to-[var(--gold)]" />

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[radial-gradient(ellipse_at_bottom,_var(--blue-bg)_0%,_transparent_70%)]" />

        {/* Dynamic Connected Coordinate route visualization */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-10 pointer-events-none select-none">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#1C2568] pb-6 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl animate-bounce">🇳🇬</span>
              <div className="h-[2px] w-14 md:w-28 bg-dashed border-t border-dashed border-indigo-500/30 relative">
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[10px] animate-pulse">⚡</span>
              </div>
              <span className="text-xl animate-bounce" style={{ animationDelay: "0.2s" }}>🇬🇧</span>
              <div className="h-[2px] w-14 md:w-28 bg-dashed border-t border-dashed border-indigo-500/30 relative">
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[10px] animate-pulse">🎁</span>
              </div>
              <span className="text-xl animate-bounce" style={{ animationDelay: "0.4s" }}>🌎</span>
            </div>
            
            <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#FBBF24] bg-[#13194B] px-3 py-1 rounded-full border border-[#232B78] flex items-center gap-1.5 self-center sm:self-start">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              Real-time Global Deliveries Active
            </div>
          </div>
        </div>

        {/* Upper Banner Section for Global Celebration Channels */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-10 border-b border-[#1C2568] flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 text-amber-500 mb-2 justify-center lg:justify-start">
              <span>✨</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FBBF24]">
                The Global Diaspora Celebration Channels
              </span>
            </div>
            <h3 className="font-serif font-[900] text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Bridges our distances, <em className="text-[#EC4899] italic not-italic font-serif font-black">perfects our love.</em>
            </h3>
          </div>

          {/* Subscription Input Box */}
          <div className="w-full max-w-md bg-[#080B23]/90 border border-[#1C2568] rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 shadow-inner">
            <div className="flex-1 w-full relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 text-xs">✉</span>
              <input
                type="email"
                placeholder="Receive early premium invite"
                className="w-full pl-8 pr-3 py-2 bg-transparent text-xs text-white placeholder-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button
              onClick={() => {
                dispatchToast("🚀 Welcome! You are joined to the premium invitation registry!");
                triggerConfetti(50, 50);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-500 hover:to-pink-400 text-white font-black text-[10px] uppercase tracking-wider rounded-xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 duration-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Join List</span>
              <span>🚀</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 relative z-10">
          {/* Main Footer Contents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            
            {/* Branding Column */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-4">
              <ZippZapLogo isDarkBg={true} customLogoUrl={customLogoUrl} />
              <p className="text-xs text-indigo-200/70 leading-relaxed text-center lg:text-left max-w-sm font-medium mt-1 animate-fade-in">
                Making great experiences and community milestone celebrations dynamic. Bridging mainland connections seamlessly with the global diaspora community.
              </p>
              
              <div className="flex flex-col items-center lg:items-start gap-2.5 mt-2">
                <button
                  onClick={() => {
                    dispatchToast("🛡️ Secure Diaspora Railway protocol initialized safely.");
                    triggerConfetti(50, 70);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#13194B] hover:bg-[#1A2160] border border-[#232B78] rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#FBBF24] cursor-pointer shadow-md select-none transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Secure Diaspora Railway
                </button>
              </div>
            </div>

            {/* Navigation Block */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 w-full h-full text-center md:text-left">
              
              {/* OUR PRODUCTS */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-[#3B82F6] mb-4">
                  Our Products
                </h4>
                <div className="flex flex-col gap-3 font-semibold text-xs text-indigo-200/70">
                  <button
                    onClick={() => {
                      setSelectedPopBrand(BRAND_DETAILS["ZippZap Moments"]);
                      dispatchToast("🎉 Loaded ZippZap Moments detail card.");
                    }}
                    className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer self-center md:self-start text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B2BE8]" />
                    ZippZap Moments
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPopBrand(BRAND_DETAILS["ZippZap Teams"]);
                      dispatchToast("🏢 Loaded ZippZap Teams workspace card.");
                    }}
                    className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer self-center md:self-start text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                    ZippZap Teams
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPopBrand(BRAND_DETAILS["ZippZap Circle"]);
                      dispatchToast("⭕ Loaded ZippZap Circle coordinate card.");
                    }}
                    className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer self-center md:self-start text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
                    ZippZap Circle
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPopBrand(BRAND_DETAILS["ZippZap Gifts"]);
                      dispatchToast("🎁 Loaded ZippZap Gifts coordinate card.");
                    }}
                    className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer self-center md:self-start text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    ZippZap Gifts
                  </button>
                </div>
              </div>

              {/* HEADQUARTERS */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-[#FBBF24] mb-4">
                  Headquarters
                </h4>
                <div className="flex flex-col gap-3 font-semibold text-xs text-indigo-200/70">
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <span className="text-xs">📍</span>
                    <span className="hover:text-white transition-colors">
                      Lekki Phase 1, Lagos, Nigeria
                    </span>
                  </div>
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <span className="text-xs">📍</span>
                    <span className="hover:text-white transition-colors">
                      Canary Wharf, London, UK
                    </span>
                  </div>
                  <a
                    href="mailto:info@zippzap.com"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatchToast("✉ Connecting to info@zippzap.com support registry.");
                      window.location.href = "mailto:info@zippzap.com";
                    }}
                    className="flex items-start gap-2 justify-center md:justify-start text-[#EC4899] font-black hover:underline cursor-pointer"
                  >
                    <span className="text-xs">✉</span>
                    <span>info@zippzap.com</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          <hr className="border-[#1E2568] my-8" />

          {/* Sub-Footer Legal & Socials Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-xs text-indigo-200/70 font-medium text-center md:text-left">
                © 2026 ZippZap Ltd. All rights reserved. | Crafted with 💚 for African Milestones & the Global Diaspora
              </span>
              <p className="text-[10px] text-indigo-300/60 max-w-lg text-center md:text-left">
                Disclaimer: Group gifting, digital greetings, surprise boxes, and coordinate envelopes are subject to regulatory compliance. Celebrate responsibly.
              </p>
            </div>

            {/* Social connections links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                { icon: <Twitter className="w-4 h-4" />, label: "X_Twitter" }
              ].map((soc, i) => (
                <button
                  key={soc.label}
                  onClick={() => dispatchToast(`🚀 Find us on ${soc.label}! Coming soon.`)}
                  className="w-10 h-10 rounded-xl border border-[#1E2568] hover:border-[var(--blue-l)] hover:bg-[#13194B] bg-[#080B22] flex items-center justify-center text-indigo-400 hover:text-white duration-300 hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-sm"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Animated Pop-Up Modal */}
      {selectedPopBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop screen filter */}
          <div
            onClick={() => setSelectedPopBrand(null)}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          />
          
          {/* Modal dialogue card */}
          <div className="bg-white border-2 border-[var(--border)] rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative z-10 overflow-hidden transform transition-all animate-scale-up-mod">
            {/* Top decorative gradient band */}
            <div 
              className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(to right, var(--blue), ${
                  selectedPopBrand.title === "ZippZap Teams" 
                    ? "#10B981" 
                    : selectedPopBrand.title === "ZippZap Circle" 
                    ? "#8B5CF6" 
                    : selectedPopBrand.title === "ZippZap Gifts" 
                    ? "#F59E0B" 
                    : "var(--purple)"
                })`
              }}
            />
            
            <button
              onClick={() => setSelectedPopBrand(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] hover:bg-stone-200 text-stone-600 hover:scale-[1.08] active:scale-95 flex items-center justify-center text-xs font-black transition-all cursor-pointer shadow-sm"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[var(--blue-bg)] border border-[var(--blue-bdr)] flex items-center justify-center text-3xl shadow-sm">
                {selectedPopBrand.emoji}
              </div>
              <div>
                <h3 className="font-[Nunito] font-[900] text-lg text-[#0C0E1E] leading-none mb-1">
                  {selectedPopBrand.title}
                </h3>
                <p className="text-[10px] font-black text-[var(--blue)] uppercase tracking-widest leading-none">
                  {selectedPopBrand.subtitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-[var(--text-mid)] leading-relaxed mb-6 font-medium bg-[var(--bg-soft)] p-4 rounded-xl border border-[var(--border)]">
              {selectedPopBrand.desc}
            </p>

            <h4 className="text-[10px] font-black text-[#0C0E1E] uppercase tracking-widest mb-3.5">
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {selectedPopBrand.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 group/item">
                  <div className="w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex-shrink-0 flex items-center justify-center text-[10px] font-black mt-0.5 group-hover/item:scale-110 transition-transform">
                    ✓
                  </div>
                  <span className="text-[11px] font-bold text-[var(--text-mid)] leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-end border-t border-[var(--border)] pt-4">
              <button
                onClick={() => setSelectedPopBrand(null)}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-extrabold rounded-xl transition-all cursor-pointer border border-[#E7E5E0] active:scale-[0.98]"
              >
                Close View
              </button>
              <button
                onClick={() => {
                  setSelectedPopBrand(null);
                  dispatchToast(`🎉 You registered pre-launch interest in ${selectedPopBrand.title}!`);
                  triggerConfetti(50, 50);
                }}
                className="px-5 py-2.5 bg-[var(--blue)] hover:bg-[var(--blue-l)] text-white text-xs font-extrabold rounded-xl shadow-lg shadow-[var(--blue)]/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              >
                Register Interest
              </button>
            </div>

          </div>
        </div>
      )}
      </div>

      {/* Celebration Details Pop-Up Modal */}
      <AnimatePresence>
        {selectedCelebration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCelebration(null)}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-md"
            />
            
            {/* Modal dialogue card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className={`bg-white border-2 border-[var(--border)] rounded-3xl w-full max-w-lg p-6 md:p-8 ${selectedCelebration.glowColor} relative z-10 overflow-hidden shadow-2xl`}
            >
              {/* Top decorative gradient band */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${selectedCelebration.themeColor}`}
              />
              
              <button
                onClick={() => setSelectedCelebration(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)] hover:bg-stone-200 text-stone-600 hover:scale-[1.08] active:scale-95 flex items-center justify-center text-xs font-black transition-all cursor-pointer shadow-sm"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-3xl shadow-sm">
                  {selectedCelebration.emoji}
                </div>
                <div>
                  <h3 className="font-[Nunito] font-[900] text-lg text-[#0C0E1E] leading-none mb-1.5 flex items-center gap-2">
                    {selectedCelebration.title}
                    <span className="text-[10px] bg-indigo-50 border border-indigo-100 text-[var(--blue)] px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                      Coordinate
                    </span>
                  </h3>
                  <p className={`text-[10px] font-black ${selectedCelebration.textColor} uppercase tracking-widest leading-none`}>
                    {selectedCelebration.tagline}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[var(--text-mid)] leading-relaxed mb-6 font-semibold bg-[var(--bg-soft)] p-4 rounded-xl border border-[var(--border)]">
                {selectedCelebration.desc}
              </p>

              <h4 className="text-[10px] font-black text-[#0C0E1E] uppercase tracking-widest mb-3.5">
                Coordinate Features
              </h4>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {selectedCelebration.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 group/item">
                    <div className="w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex-shrink-0 flex items-center justify-center text-[10px] font-black mt-0.5 group-hover/item:scale-110 transition-transform">
                      ✓
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-mid)] leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 justify-end border-t border-[var(--border)] pt-4">
                <button
                  onClick={() => setSelectedCelebration(null)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-extrabold rounded-xl transition-all cursor-pointer border border-[#E7E5E0] active:scale-[0.98]"
                >
                  Close View
                </button>
                <button
                  onClick={() => {
                    setSelectedCelebration(null);
                    dispatchToast(`🎉 Initialized your ${selectedCelebration.title} workspace!`);
                    triggerConfetti(90, 45);
                  }}
                  className={`px-5 py-2.5 bg-gradient-to-r ${selectedCelebration.themeColor} text-white text-xs font-extrabold rounded-xl hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer hover:brightness-105`}
                >
                  {selectedCelebration.cta}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
