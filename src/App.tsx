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
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current && observer) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
      subtitle: "ZippZap makes group greetings, gifting, and celebration coordination seamless. Collect messages and contributions in one link."
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
      className={`theme-transition font-sans bg-[var(--bg)] text-[var(--text)] min-h-screen relative overflow-x-hidden`}
    >
      {/* Dynamic Global Theme-Variable Smooth Transitions Embedding */}
      <style>{`
        .theme-transition, .theme-transition *, body, section, nav, input, select, button, div, span, h1, h2, h3, p, a {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          transition: background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
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
      <nav className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] min-h-[105px] py-3.5 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 transition-all duration-500">
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
      <section className="hero section-pattern-mesh relative px-6 md:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center overflow-hidden z-20" id="individuals">
        
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

        {/* HERO LEFT COLUMN */}
        <div className="lg:col-span-7 relative z-10 flex flex-col justify-center">
          <FadeIn delay={100} className="w-fit">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[var(--blue-bg)] border border-[var(--blue-bdr)] text-[var(--blue)] text-xs font-bold uppercase tracking-wider mb-8 shadow-sm transition-all duration-500 animate-bounce">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] animate-ping" />
              <span>{greetings[greetingIndex].badge}</span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="font-[Nunito] text-4xl md:text-6xl font-[900] tracking-tight leading-[1.05] text-[var(--navy)] mb-6 transition-colors duration-500">
              {greetings[greetingIndex].title}
              <span className="block bg-gradient-to-r from-[var(--blue)] via-[var(--purple)] to-[var(--pink)] bg-clip-text text-transparent transform hover:scale-[1.01] transition-transform duration-500">
                {greetings[greetingIndex].accent}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl mb-10 transition-colors duration-500">
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
                <div className="flex gap-4 group cursor-default">
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
            <div className="border-t border-[var(--border)] pt-8">
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

        {/* HERO RIGHT COLUMN: Interactive Card Form */}
        <div className="lg:col-span-5 relative z-10">
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
                borderClass: "hover:border-[var(--blue)] hover:shadow-[var(--blue)]/10"
              },
              {
                emoji: "🏢",
                title: "ZippZap Teams",
                aud: "For Workplaces",
                desc: "Enterprise-grade workplace celebration structures. Automate milestone calendars, synchronize directory channels, and cultivate active inclusion.",
                borderClass: "hover:border-emerald-600 hover:shadow-emerald-600/10"
              },
              {
                emoji: "⭕",
                title: "ZippZap Circle",
                aud: "For Communities",
                desc: "Bring group pooling, digital greetings, and celebratory organization to your local school, cultural committee, or neighborhood coordinate circles.",
                borderClass: "hover:border-violet-600 hover:shadow-violet-600/10"
              },
              {
                emoji: "🎁",
                title: "ZippZap Gifts",
                aud: "Surprise Infrastructure",
                desc: "Durable shared marketplace of physical gift surprise coordinate baskets, custom retail vouchers, and physical milestones sourced globally.",
                borderClass: "hover:border-amber-600 hover:shadow-amber-600/10"
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
                  className={`bg-white border-2 border-[var(--border)] rounded-2xl p-6 flex flex-col justify-between h-full hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden group ${sub.borderClass}`}
                >
                  {/* Top corner gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[var(--bg-soft)] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {sub.emoji}
                    </div>

                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[var(--blue)] block mb-1">
                      {sub.aud}
                    </span>
                    <h3 className="font-[Nunito] font-extrabold text-base text-[var(--text)] mb-3 tracking-snug">
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
