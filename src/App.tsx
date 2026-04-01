/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { ArrowUpRight, ArrowRight, Star, Menu, Check, Plus, Minus, X, ArrowLeft, ArrowUp, Mail, MapPin, Phone, Instagram, Twitter,  Linkedin,
  Search,
  Sun,
  Battery,
  Zap,
  Globe,
  Cpu,
  Layers,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import FlowingMenu from './components/FlowingMenu';
import DarkVeil from './components/DarkVeil';
import StarBorder from './components/StarBorder';

import rostraImg from './assets/work/rostra.png';
import orvionImg from './assets/work/orvion.png';
import nexisImg from './assets/work/nexis.png';
import toolinoImg from './assets/work/toolino.png';
import aboutStudioImg from './assets/about_studio.png';
import logoImg from './assets/logo.jpg';
import uiUxImg from './assets/services/ui_ux.png';
import webDevImg from './assets/services/web_dev.png';
import brandingImg from './assets/services/branding.png';
import strategyImg from './assets/services/strategy.png';
import heroBgImg from './assets/hero-bg.png';

import solutionCreativeImg from './assets/redesign/solution_creative.png';
import solutionTechImg from './assets/redesign/solution_tech.png';
import solutionGrowthImg from './assets/redesign/solution_growth.png';
import statsFeatureImg from './assets/redesign/stats_feature.png';
import aboutUsFeatureImg from './assets/redesign/about_us_feature.png';
import serviceWebDesignImg from './assets/redesign/service_web_design.png';
import serviceWebDevImg from './assets/redesign/service_web_dev.png';
import serviceEcommerceImg from './assets/redesign/service_ecommerce.png';
import serviceSeoImg from './assets/redesign/service_seo.png';
import serviceMarketingImg from './assets/redesign/service_digital_marketing.png';
import team1Img from './assets/redesign/team_1.png';
import team2Img from './assets/redesign/team_2.png';
import team3Img from './assets/redesign/team_3.png';
import team4Img from './assets/redesign/team_4.png';




const Asterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className={className}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="6.34" y1="6.34" x2="17.66" y2="17.66" />
    <line x1="6.34" y1="17.66" x2="17.66" y2="6.34" />
  </svg>
);

const PROJECTS = [
  {
    id: 1,
    title: "Rostra",
    image: rostraImg,
    category: "Web Agency",
    year: "2024",
    link: "https://rostra.in"
  },
  {
    id: 2,
    title: "Orvion",
    image: orvionImg,
    category: "SaaS platform",
    year: "2024",
    link: "https://orvion.studio.nextgenaiinx.com/"
  },
  {
    id: 3,
    title: "Nexis",
    image: nexisImg,
    category: "Web Agency",
    year: "2024",
    link: "https://nexis-cff09.web.app/"
  },
  {
    id: 4,
    title: "Toolino",
    image: toolinoImg,
    category: "E-commerce",
    year: "2024",
    link: "https://toolino-3cf4c.web.app/"
  }
];


const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    role: "CEO, Tech Innovations Ltd.",
    result: "+280% leads in 30 days",
    text: "The website PixelOwl designed for us exceeded our expectations. It's beautiful and highly functional, bringing in more clients than ever before.",
    image: "https://i.pravatar.cc/150?u=emily"
  },
  {
    name: "Michael Brown",
    role: "Marketing Director, Green Solutions Inc.",
    result: "User engagement skyrocketed",
    text: "Our new site is a masterpiece. PixelOwl understood our vision perfectly and executed it flawlessly. Our user engagement has skyrocketed.",
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Sarah Miller",
    role: "Founder, EcoFriendly Store",
    result: "Live in 7 days, zero revisions",
    text: "We needed a website that could handle high traffic and look great on all devices. PixelOwl delivered on all fronts. Highly recommended!",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Wilson",
    role: "COO, Organic Market",
    result: "+40% online sales",
    text: "The new design has transformed our online presence. Our customers love the site, and it has significantly improved our sales.",
    image: "https://i.pravatar.cc/150?u=david"
  }
];

const FAQS = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically, a landing page takes 1-2 weeks, while a more complex multi-page site can take 4-6 weeks depending on requirements."
  },
  {
    question: "Can you help with SEO?",
    answer: "Yes, all our websites are built with SEO best practices in mind, including meta tags, semantic HTML, and fast loading speeds."
  },
  {
    question: "What if I need changes after the site is launched?",
    answer: "We offer ongoing support and maintenance packages to ensure your site stays up to date and continues to perform."
  },
  {
    question: "Do you offer ongoing support after the website is launched?",
    answer: "Absolutely. We provide various support tiers to help with content updates, security patches, and performance monitoring."
  }
];

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (o: boolean) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About us", to: "/about" },
    { label: "Services", to: "/services" }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 transition-all duration-500 z-9999 pointer-events-none ${!isHome || scrolled ? 'py-4 bg-black/90 backdrop-blur-2xl border-b border-white/10' : 'py-6 bg-transparent border-b border-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left */}
      <div className="flex-1 flex justify-start pointer-events-auto">
        <Link
          to="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-3 group"
        >
          <img src={logoImg} alt="PixelOwl Logo" className="w-10 h-10 rounded-full border border-white/10 group-hover:scale-110 transition-all" />
          <span className="text-xl font-medium tracking-tight text-white transition-colors" style={{ fontFamily: 'var(--font-space)' }}>PixelOwl</span>
        </Link>
      </div>

      {/* Center - Links (Desktop Only) */}
      <div className="hidden lg:flex items-center gap-8 px-8 py-3 pointer-events-auto">
        {navLinks.map((link, i) => {
          const isActive = location.pathname === link.to;
          const isWhitePage = !isHome;
          
          let textColor;
          if (isActive) {
            textColor = isWhitePage ? 'text-white' : 'text-[#C8FF00]';
          } else {
            textColor = isWhitePage ? 'text-white/60 hover:text-white' : 'text-white/60 hover:text-[#C8FF00]';
          }

          return (
            <Link key={i} to={link.to} className={`text-sm font-semibold transition-colors ${textColor}`}>{link.label}</Link>
          );
        })}
      </div>

      <div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-4 pl-6 pr-2 py-2 rounded-xl font-semibold transition-all group text-black"
          style={{ background: 'var(--accent)', fontSize: '15px' }}
        >
          Get in touch
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black text-[#C8FF00] relative overflow-hidden">
            <ArrowRight size={16} className="absolute transition-transform duration-300 group-hover:translate-x-8" />
            <ArrowRight size={16} className="absolute -translate-x-8 transition-transform duration-300 group-hover:translate-x-0" />
          </div>
        </Link>
        <button
          className="lg:hidden p-2 transition-colors text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = () => (
  <section
    className="relative min-h-screen flex flex-col items-start px-6 md:px-16 pt-32 pb-8 md:pb-6 text-left overflow-hidden bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${heroBgImg})` }}
  >
    {/* Dark overlay with bottom gradient for readability */}
    <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>
    <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-0 pointer-events-none"></div>

    <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay pointer-events-none">
      <DarkVeil hueShift={0} noiseIntensity={0.05} scanlineIntensity={0.1} speed={1} scanlineFrequency={2} warpAmount={0.1} />
    </div>

    {/* Background Outline Text */}
    <div className="absolute bottom-[-2%] md:bottom-[-5%] left-0 w-full overflow-hidden flex justify-center z-0 opacity-[0.15] pointer-events-none select-none">
      <h1 className="text-[35vw] md:text-[25vw] font-bold tracking-tighter leading-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent', fontFamily: 'var(--font-space)' }}>
        PIXELOWL
      </h1>
    </div>

    <div className="relative z-10 w-full max-w-7xl px-0 md:px-0 flex flex-col mt-auto pb-0 pointer-events-none">
      <div
        style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(44px, 12vw, 98px)', lineHeight: 1, fontWeight: 500, letterSpacing: '-2px' }}
        className="tracking-tight mb-4 md:mb-6 text-left flex flex-col"
      >
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Digital agency
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          that moves the
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>business forward</span>
        </motion.div>
      </div>

      <motion.p
        className="text-sm md:text-lg text-white max-w-2xl mb-4 md:mb-0 leading-relaxed font-medium text-left drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        At PixelOwl, we don't just build websites; we engineer comprehensive digital ecosystems designed to dominate your market. We blend cutting-edge technology, user-centric design principles, and data-driven growth strategies to maximize efficiency and long-term value. Join the shift toward high-performance digital presence, outpace your competition, and take absolute control of your brand's legacy today.
      </motion.p>
    </div>

    {/* Bottom Widgets */}
    <motion.div 
      className="relative md:absolute md:bottom-12 md:right-16 mt-6 md:mt-0 z-10 flex flex-col items-start md:items-end gap-4 pointer-events-auto w-full md:w-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Explore Button */}
        <Link to="/contact" className="pl-6 pr-2 py-2 bg-white rounded-full flex items-center gap-4 group transition-colors hover:bg-neutral-200">
          <span className="text-black font-semibold text-sm">Explore now</span>
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-black relative overflow-hidden" style={{ backgroundColor: 'var(--accent)' }}>
            <ArrowRight size={20} className="absolute transition-transform duration-300 group-hover:translate-x-8" />
            <ArrowRight size={20} className="absolute -translate-x-8 transition-transform duration-300 group-hover:translate-x-0" />
          </div>
        </Link>
        
        {/* Avatars */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?u=user${i}`}
                alt="Reviewer"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white leading-tight">25+ reviews</span>
            <span className="text-sm font-bold leading-tight" style={{ color: 'var(--accent)' }}>4.96 of 5</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const MarqueeStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const points = [
    "Web Design",
    "Framer Development",
    "Webflow",
    "Brand Identity",
    "Motion Design",
    "UX Strategy",
    "Conversion Optimization",
    "Web Design",
    "Framer Development",
    "Webflow",
    "Brand Identity",
    "Motion Design",
    "UX Strategy",
    "Conversion Optimization",
  ];

  return (
    <div ref={ref} className="py-8 bg-neutral-900 overflow-hidden border-y border-white/5 w-full">
      <motion.div
        animate={isInView ? { x: ["0%", "-50%"] } : {}}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center will-change-transform"
      >
        {points.map((point, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
              {point}
            </span>
            <Asterisk className="w-4 h-4 text-[#C8FF00]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const DeliveryMarquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const points = [
    "FIGMA TO FRAMER",
    "PIXEL PERFECT",
    "MOBILE FIRST",
    "SEO OPTIMISED",
    "FAST DELIVERY",
    "CLEAN CODE",
    "FIGMA TO FRAMER",
    "PIXEL PERFECT",
    "MOBILE FIRST",
    "SEO OPTIMISED",
    "FAST DELIVERY",
    "CLEAN CODE",
  ];

  return (
    <div ref={ref} className="py-6 bg-neutral-900 overflow-hidden border-y border-white/5 w-full">
      <motion.div
        animate={isInView ? { x: ["-50%", "0%"] } : {}}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center will-change-transform"
      >
        {points.map((point, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-xl md:text-2xl font-medium uppercase tracking-tighter text-white/80">
              {point}
            </span>
            <Asterisk className="w-6 h-6 text-neutral-400" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SolutionsSection = () => {
  const solutions = [
    { title: "Creative Design", desc: "Crafting visually stunning experiences that captivate.", img: solutionCreativeImg },
    { title: "Tech Excellence", desc: "Building robust, scalable digital infrastructures.", img: solutionTechImg },
    { title: "Growth Strategy", desc: "Driving measurable results through data-led insights.", img: solutionGrowthImg }
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black font-bold">Our Services</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black mt-4 leading-tight">
          Customized digital strategies<br />that fit your needs
        </h2>
        <p className="text-black mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          We don't believe in one-size-fits-all. Every project is a unique opportunity to innovate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {solutions.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl mb-6 shadow-2xl">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-medium text-white mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm line-clamp-2">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};const AgencyStatsSection = () => {
  const bulletPoints = [
    "Custom Web Design & UI/UX",
    "High-Performance Development",
    "E-commerce Strategy & Builds",
    "Technical SEO Optimization",
    "Conversion Rate Optimization",
    "Ongoing Website Maintenance"
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Stats */}
        <div className="md:col-span-3 flex flex-col justify-between self-stretch">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black font-medium text-base leading-relaxed"
          >
            At PixelOwl, we help brands and businesses switch to high-performance digital experiences—reducing complexity and increasing efficiency.
          </motion.p>
          
          <div className="mt-16 lg:mt-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[100px] md:text-[140px] font-medium leading-none tracking-tighter text-black"
            >
              3
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black font-bold text-base mt-2"
            >
              Years of delivering<br />high-end digital solutions
            </motion.p>
          </div>
        </div>

        {/* Center Column: Image & Badge */}
        <div className="md:col-span-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-xl relative aspect-4/5 bg-neutral-100"
          >
            <img src={aboutUsFeatureImg} alt="PixelOwl Team" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Rotating Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-6 -left-6 w-32 h-32 z-20 drop-shadow-xl"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="38" fill="#C8FF00" />
                  <path
                    id="circlePath"
                    d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-bold tracking-widest fill-black uppercase">
                    <textPath xlinkHref="#circlePath">
                      About us ✦ About us ✦ About us ✦ About us ✦
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-5 flex flex-col items-start lg:pl-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black mb-10 leading-tight"
          >
            Comprehensive digital agency solutions
          </motion.h2>
          
          <div className="space-y-4 mb-10">
            {bulletPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <Check size={12} className="stroke-2" />
                </div>
                <span className="text-lg text-black font-medium tracking-tight">{point}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/about" 
              className="inline-flex items-center gap-4 bg-[#C8FF00] rounded-2xl p-1.5 group transition-all shadow-lg shadow-[#C8FF00]/10 hover:bg-[#b0e600]"
            >
              <span className="text-black font-semibold text-base px-6 py-1.5">About us</span>
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-[#C8FF00] relative overflow-hidden">
                <ArrowRight size={18} className="absolute transition-transform duration-300 group-hover:translate-x-10" />
                <ArrowRight size={18} className="absolute -translate-x-10 transition-transform duration-300 group-hover:translate-x-0" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CapabilitiesGrid = () => {
  const capabilities = [
    { title: "Deep Analysis", desc: "Understanding your market and identifying gaps others miss.", icon: <Search size={24} /> },
    { title: "Core Strategy", desc: "Mapping out every interaction for maximum ROI.", icon: <Globe size={24} /> },
    { title: "UI/UX Design", desc: "Pixel-perfect interfaces that feel completely natural.", icon: <Layers size={24} /> },
    { title: "Development", desc: "Clean, performant code built for long-term scalability.", icon: <Cpu size={24} /> },
    { title: "Launch Ready", desc: "Smooth go-lives with zero downtime and full support.", icon: <Zap size={24} /> },
    { title: "Maintenance", desc: "Always on, always optimized, forever evolving.", icon: <ExternalLink size={24} /> }
  ];

  return (
    <section className="bg-neutral-50 py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-black">Our Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mt-4">Built for performance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {capabilities.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-black border border-neutral-100">
                {c.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-3">{c.title}</h3>
                <p className="text-black font-medium leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const serviceItems = [
    { link: '/services', text: 'Web Design', image: serviceWebDesignImg },
    { link: '/services', text: 'Web Development', image: serviceWebDevImg },
    { link: '/services', text: 'E-commerce', image: serviceEcommerceImg },
    { link: '/services', text: 'SEO Optimization', image: serviceSeoImg },
    { link: '/services', text: 'Digital Marketing', image: serviceMarketingImg }
  ];

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#C8FF00] font-bold uppercase tracking-[0.3em] text-sm block mb-4"
        >
          Our Expertise
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
        >
          Services we offer
        </motion.h2>
      </div>

      <div className="border-t border-white/10" style={{ position: 'relative' }}>
        <FlowingMenu
          items={serviceItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#000000"
          marqueeBgColor="#C8FF00"
          marqueeTextColor="#000000"
          borderColor="rgba(255,255,255,0.1)"
        />
      </div>
    </section>
  );
};
const ProjectsSection = () => {
  return (
    <section id="work" className="bg-[#C8FF00] py-24 md:py-40 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Neon Intro Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap size={18} className="text-black fill-black" />
              <span className="text-sm font-bold uppercase text-black/90 tracking-widest">SELECTED WORK</span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black leading-[1.1]" style={{ fontFamily: 'var(--font-space)' }}>
              Innovations in<br />
              green technology<br />
              for the future
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-black/80 text-lg font-medium mb-10 leading-relaxed">
              We build digital solutions that not only look stunning but drive real environmental impact through optimized code and green infrastructure.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-black rounded-xl py-4 pl-8 pr-3 group hover:scale-[1.02] transition-all">
              <span className="text-white font-semibold text-sm">View all work</span>
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black relative overflow-hidden">
                <ArrowRight size={16} className="absolute transition-transform duration-300 group-hover:translate-x-8" />
                <ArrowRight size={16} className="absolute -translate-x-8 transition-transform duration-300 group-hover:translate-x-0" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-8 md:p-10 flex flex-col group h-full transition-colors hover:bg-neutral-900 border border-black"
            >
              {/* Top Metadata */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-[#C8FF00] font-medium text-sm">
                    <span className="text-white/40">{"{"}</span>
                    {project.category}
                    <span className="text-white/40">{"}"}</span>
                  </span>
                  <span className="text-white/30 text-sm font-medium">5/31/24</span>
                </div>
                <h3 className="text-3xl md:text-3xl font-medium text-white mb-2" style={{ fontFamily: 'var(--font-space)' }}>
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm font-medium tracking-tight">
                  Premium Web Design & Development
                </p>
              </div>

              <div className="mt-auto relative w-full aspect-4/3 overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-100"
                  referrerPolicy="no-referrer"
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                />
              </div>
            </motion.div>
          ))}

          {/* View All Card - Themed to Black/Neon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black p-10 flex flex-col items-center justify-center text-center cursor-pointer group transition-colors hover:bg-neutral-950 border border-black lg:col-span-2"
          >
            <Link to="/contact" className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full border border-[#C8FF00]/20 flex items-center justify-center text-[#C8FF00] transition-transform group-hover:scale-110 group-hover:bg-[#C8FF00] group-hover:text-black">
                <ArrowUpRight size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white uppercase tracking-tight">View all projects</h3>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mt-2">Explore full portfolio</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { id: "01", title: "ANALYSE", duration: "~2 days", desc: "We ask the questions most agencies skip. Business goals, competitors, target audience — we don't open Figma until we understand the problem." },
    { id: "02", title: "STRATEGIZE", duration: "~2 days", desc: "Mapping out the user journey and site architecture to ensure every interaction is purposeful. Wireframes first, always." },
    { id: "03", title: "DESIGN", duration: "~5 days", desc: "High-fidelity in Figma. You'll see every component, every hover state, every breakpoint before we write a single line of code." },
    { id: "04", title: "DEVELOP", duration: "~7 days", desc: "We build exactly what we designed. No shortcuts, no template hacks. Clean code, cross-browser tested, ready to scale." }
  ];

  return (
    <section id="process" className="py-40 px-6 md:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30">04 — Process</span>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-4 py-2">The Process</h2>
          </motion.div>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-white/10 group"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-xl font-mono text-[#C8FF00] font-medium">{step.id}</span>
                <div>
                  <h3 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <span className="inline-block mt-3 text-xs font-mono text-white/30 border border-white/10 rounded-full px-3 py-1 tracking-widest">
                    {step.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColRef.current,
        pinSpacing: false,
        scrub: false,
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const plans = [
    {
      id: 'basic',
      title: "Basic Plan",
      price: "$150.00",
      desc: "Essential web presence and reliable performance for small businesses starting out.",
      theme: 'light',
      features: [
        { name: "Custom Web Design", included: true },
        { name: "Responsive Development", included: true },
        { name: "Basic SEO Setup", included: true },
        { name: "Monthly Maintenance", included: false },
        { name: "Priority Support", included: false }
      ]
    },
    {
      id: 'professional',
      title: "Professional Plan",
      price: "$250.00",
      desc: "Best suited for scaling businesses requiring advanced functionality and ongoing optimization.",
      theme: 'dark',
      features: [
        { name: "Complex Web Applications", included: true },
        { name: "E-commerce Integration", included: true },
        { name: "Advanced SEO & Analytics", included: true },
        { name: "Performance Tuning", included: true },
        { name: "Priority Support", included: false }
      ]
    },
    {
      id: 'premium',
      title: "Premium Plan",
      price: "$500.00",
      desc: "A full-scale digital ecosystem tailored for high-growth and established organizations.",
      theme: 'light',
      features: [
        { name: "Enterprise-Grade Solutions", included: true },
        { name: "Custom Software Architecture", included: true },
        { name: "Continuous CRO & Testing", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "24/7 Premium Support", included: true }
      ]
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-start min-h-screen bg-white"
    >
      <AnimatePresence>
        {selectedPlan && (
          <OrderModal
            plan={selectedPlan}
            isOpen={!!selectedPlan}
            onClose={() => setSelectedPlan(null)}
          />
        )}
      </AnimatePresence>

      {/* GSAP Pinned Left Column */}
      <div 
        ref={leftColRef} 
        className="w-full lg:w-[35%] flex flex-col justify-center lg:h-screen px-6 lg:pl-16 lg:pr-8 py-24 lg:py-0"
      >
        <div className="flex items-center gap-2 mb-6">
          <Zap size={16} className="text-black" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">BEST PRICING PLANS</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-black leading-tight mb-8">
          Flexible<br />
          best pricing<br />
          plans for you
        </h2>
        
        <p className="text-base text-black font-medium leading-relaxed mb-10 max-w-sm">
          Choose a plan that fits your needs today and scales effortlessly as your business grows. No hidden fees or complexity.
        </p>

        <Link to="/contact" className="flex items-center justify-center gap-3 bg-[#C8FF00] rounded-xl p-1 group transition-all shadow-md shadow-[#C8FF00]/10 w-max hover:bg-[#b0e600]">
          <span className="text-black font-semibold text-sm px-5 py-1.5">Get in touch</span>
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-[#C8FF00] relative overflow-hidden">
            <ArrowRight size={14} className="absolute transition-transform duration-300 group-hover:translate-x-8" />
            <ArrowRight size={14} className="absolute -translate-x-8 transition-transform duration-300 group-hover:translate-x-0" />
          </div>
        </Link>
      </div>

      {/* Scrollable Right Column */}
      <div className="w-full lg:w-[65%] flex flex-col gap-8 px-6 lg:pl-12 lg:pr-16 py-12 lg:py-32">
        {plans.map((plan, i) => (
          <div 
            key={i}
            className={`rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-start gap-10 border transition-all duration-500 min-h-[450px] ${
              plan.theme === 'dark' 
              ? 'bg-black text-white border-black shadow-xl' 
              : 'bg-[#F9F4FF]/50 backdrop-blur-sm text-black border-neutral-100 shadow-lg'
            }`}
          >
            {/* Card Left: Plan Details */}
            <div className="flex-1 flex flex-col w-full">
              <h3 className={`text-xl font-semibold mb-6 ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {plan.title}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-semibold tracking-tighter">{plan.price}</span>
                <span className={`text-xs opacity-60 font-medium ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Per Month
                </span>
              </div>

              <p className={`text-sm font-medium leading-relaxed mb-8 flex-grow ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {plan.desc}
              </p>

              <button 
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-3.5 rounded-lg font-semibold text-base transition-all duration-500 transform hover:scale-[1.01] ${
                  plan.theme === 'dark'
                  ? 'bg-[#C8FF00] text-black hover:bg-white'
                  : 'bg-black text-white hover:bg-[#C8FF00] hover:text-black'
                }`}
              >
                Purchase plan
              </button>
            </div>

            {/* Card Right: Features */}
            <div className="w-full md:w-5/12 md:border-l border-black/5 md:pl-8 mt-8 md:mt-0">
              <h4 className={`text-sm font-semibold mb-6 ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Whats included ?
              </h4>
              <div className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                      feature.included 
                      ? 'bg-[#C8FF00] border-[#C8FF00] text-black' 
                      : 'bg-transparent border-neutral-300 text-black'
                    }`}>
                      {feature.included ? (
                        <Check size={12} className="stroke-3" />
                      ) : (
                        <X size={12} className={`stroke-3 ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`} />
                      )}
                    </div>
                    <span className={`text-sm font-bold ${
                      plan.theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });
  const column1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const column2 = [...TESTIMONIALS, ...TESTIMONIALS].reverse();

  return (
    <section ref={ref} className="py-40 px-6 md:px-16 overflow-hidden relative">
      <div className="mb-24 relative z-10">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/30">06 — Results</span>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase mt-3">Client Results</h2>
        <p className="text-xl text-white/50 mt-8 max-w-2xl font-light">
          Hearing directly from clients is the best way to understand the impact of the work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px] relative">
        {/* Column 1: Up to Down */}
        <div className="relative h-full overflow-hidden">
          <motion.div
            animate={isInView ? { y: ["0%", "-50%"] } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-8 will-change-transform"
          >
            {column1.map((t, i) => (
              <div key={i} className="p-10 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={12} className="fill-white/80 text-white/80" />
                    ))}
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed mb-8 font-light italic">"{t.text}"</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#C8FF00] uppercase tracking-widest mb-4">{t.result}</div>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-medium text-white uppercase tracking-tight">{t.name}</h4>
                      <p className="text-xs text-white/30 uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Column 2: Down to Up */}
        <div className="relative h-full overflow-hidden hidden md:block">
          <motion.div
            animate={isInView ? { y: ["-50%", "0%"] } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-8 will-change-transform"
          >
            {column2.map((t, i) => (
              <div key={i} className="p-10 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={12} className="fill-white/80 text-white/80" />
                    ))}
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed mb-8 font-light italic">"{t.text}"</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#C8FF00] uppercase tracking-widest mb-4">{t.result}</div>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-medium text-white uppercase tracking-tight">{t.name}</h4>
                      <p className="text-xs text-white/30 uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-40 px-6 md:px-16">
      <div className="text-center mb-24">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/30">(5) FAQ</span>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase mt-4">Frequently Asked Questions</h2>
        <p className="text-xl text-white/50 mt-8 max-w-2xl mx-auto font-light">
          Here are some of the most common questions I get about my web design services:
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-white/10">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-10 flex justify-between items-center text-left group"
            >
              <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-tight group-hover:text-white/70 transition-colors">{faq.question}</h3>
              {openIndex === i ? <Minus size={32} /> : <Plus size={32} />}
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-10 text-xl text-white/40 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="pt-40 pb-20 px-6 md:px-16">
    <div className="text-center mb-40">
      <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-medium tracking-tighter uppercase leading-[0.9] mb-16">
        You've scrolled this far.<br />You already know.
      </h2>
      <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-16 font-light">
        We have one spot open this month. First conversation is free.
      </p>
      <Link to="/contact" className="px-12 pr-4 py-4 bg-white rounded-full inline-flex items-center gap-6 group transition-colors hover:bg-neutral-200 text-black mx-auto">
        <span className="font-bold text-2xl">Start a project</span>
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-black relative overflow-hidden" style={{ backgroundColor: 'var(--accent)' }}>
          <ArrowUpRight size={28} className="absolute transition-transform duration-300 group-hover:translate-x-10 group-hover:-translate-y-10" />
          <ArrowUpRight size={28} className="absolute -translate-x-10 translate-y-10 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
      </Link>
      <p className="mt-8 text-sm text-white/30 font-mono tracking-widest">pixelowl.agency@gmail.com</p>
    </div>


    {/* Large wordmark */}
    <div className="border-t border-white/10 pt-16 mb-16 relative">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold tracking-tighter uppercase leading-none" style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
            PixelOwl
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">Available for projects · Est. 2024</span>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group shrink-0"
        >
          <ArrowUp size={32} className="group-hover:-translate-y-2 transition-transform duration-300" />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pt-12 border-t border-white/10">
      <div className="md:col-span-1">
        <p className="text-sm text-white/20 font-mono leading-loose">
          © 2026 PixelOwl Studio.<br />
          Made in Figma. Broken in<br />Webflow. Fixed at 2am.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30 mb-8">Contact</h4>
        <div className="flex flex-col gap-4 text-lg font-medium">
          <a href="mailto:pixelowl.agency@gmail.com" className="hover:text-white/60 transition-colors">pixelowl.agency@gmail.com</a>
        </div>

      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30 mb-8">Socials</h4>
        <div className="flex flex-col gap-4 text-lg font-medium">
          <a href="https://www.instagram.com/pixelowl_digital?igsh=aWt2d3VmbnB0MGZt" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Instagram</a>
        </div>

      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30 mb-8">Pages</h4>
        <div className="flex flex-col gap-4 text-lg font-medium">
          <a href="#work" className="hover:text-white/60 transition-colors">Work</a>
          <Link to="/about" className="hover:text-white/60 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
          <Link to="/terms" className="hover:text-white/60 transition-colors text-white/40 text-sm">Terms</Link>
          <Link to="/privacy" className="hover:text-white/60 transition-colors text-white/40 text-sm">Privacy</Link>
        </div>
      </div>
    </div>
  </footer>
);

const PolicyPage = ({ title, content }: { title: string; content: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-3 text-black/50 hover:text-black transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase mb-16 leading-[0.9]">
            {title}
          </h1>
          <div className="prose prose-lg max-w-none text-black/60 font-light leading-relaxed space-y-8">
            {content}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TermsPage = () => (
  <PolicyPage
    title="Terms & Conditions"
    content={
      <>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">1. Engagement</h2>
          <p>By using PixelOwl Studio's services, you enter into a binding agreement. We provide boutique web design and development services tailored to your project's unique requirements.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">2. Project Scope & Revisions</h2>
          <p>The specific deliverables and revision rounds are outlined in your project proposal. Any work outside this scope will be subject to a separate quote.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">3. Payment Terms</h2>
          <p>A non-refundable deposit is required to begin work. Final payment is due before the website's transfer or launch. Timely payments ensure the project stays on schedule.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">4. Intellectual Property</h2>
          <p>Ownership of the final design and code is transferred to the client upon full payment. PixelOwl Studio reserves the right to showcase the project in promotional materials.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">5. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be resolved in the jurisdiction of PixelOwl Studio's operating location.</p>
        </section>
      </>
    }
  />
);

const PrivacyPage = () => (
  <PolicyPage
    title="Privacy Policy"
    content={
      <>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">1. Data Collection</h2>
          <p>We collect personal information (name, email, business details) that you voluntarily provide through our contact forms and order modals. This data is used solely to facilitate project discussions and service delivery.</p>
        </section>
        <section>
          <h2 className="2xl font-medium text-black uppercase tracking-tight mb-4">2. Cookies & Tracking</h2>
          <p>We use essential cookies for site functionality and to remember your privacy preferences. We do not use third-party tracking cookies without your explicit consent via our consent banner.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">3. Third-Party Processing</h2>
          <p>Your form submissions are processed through Web3Forms. They adhere to strict privacy standards and do not sell your data. We do not share your information with any other third parties.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">4. Your Rights</h2>
          <p>Under GDPR and other privacy laws, you have the right to access, correct, or request the deletion of your personal data. Contact us at pixelowl.agency@gmail.com to exercise these rights.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">5. Security</h2>
          <p>We implement industry-standard security measures to protect your data, including HTTPS encryption and secure form handling protocols.</p>
        </section>
      </>
    }
  />
);

const RefundPage = () => (
  <PolicyPage
    title="Refund Policy"
    content={
      <>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">1. Project Deposits</h2>
          <p>A non-refundable deposit is required to secure your project slot. This deposit covers the initial research and strategy phase.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-black uppercase tracking-tight mb-4">2. Milestone Payments</h2>
          <p>Payments made upon the completion of project milestones are non-refundable as they represent work already completed and approved.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">3. Project Cancellation</h2>
          <p>If a project is cancelled by the client, no refunds will be issued for work already performed. Any outstanding balances for completed work must be paid.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">4. Satisfaction Guarantee</h2>
          <p>We strive for excellence. If you are not satisfied with the direction of the project, we will work with you to make it right within the scope of the original agreement.</p>
        </section>
      </>
    }
  />
);

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/50">
          <Check size={40} className="text-emerald-500" />
        </div>
        <h3 className="text-3xl font-medium uppercase tracking-tight mb-4 text-black">Message Sent!</h3>
        <p className="text-black/40 font-light max-w-sm mx-auto">We've received your inquiry and will get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-semibold uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-black/30">Your Name</label>
        <input required type="text" name="name" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-xl font-light text-black placeholder:text-black/20" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-black/30">Email Address</label>
        <input required type="email" name="email" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-xl font-light text-black placeholder:text-black/20" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-black/30">Project Details</label>
        <textarea required name="message" rows={4} className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors text-xl font-light text-black placeholder:text-black/20 resize-none" placeholder="Tell me about your project..." />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        disabled={status === 'submitting'}
        type="submit"
        className="w-full py-6 bg-white text-black rounded-2xl font-bold text-xl flex items-center justify-center gap-3 mt-12 hover:bg-neutral-200 transition-all disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>Send Message <ArrowUpRight size={24} /></>
        )}
      </button>

      {/* Honeypot field for spam protection */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
};

const OrderModal = ({ plan, isOpen, onClose }: { plan: any; isOpen: boolean; onClose: () => void }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("service_tier", plan.title);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden max-h-[95vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-white/40 hover:text-white z-10 transition-colors">
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/50">
                <Check size={40} className="text-emerald-500" />
              </div>
              <h3 className="text-3xl font-medium uppercase tracking-tight mb-4">Request Sent!</h3>
              <p className="text-white/40 font-light">We've received your project details for the {plan.title} plan. We'll reach out shortly.</p>
              <button onClick={onClose} className="mt-8 px-8 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-xs">Close</button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-purple-500 mb-1 block">New Project</span>
                <h2 className="text-3xl font-medium tracking-tighter uppercase">{plan.title} Package</h2>
                <p className="text-sm text-white/40 mt-1">Fill in your details and let's get started.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Your Name</label>
                    <input required type="text" name="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors text-sm" placeholder="Full Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</label>
                    <input required type="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors text-sm" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Business Name</label>
                    <input required type="text" name="business_name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors text-sm" placeholder="Your Company" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Business Type</label>
                    <input required type="text" name="business_type" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors text-sm" placeholder="e.g. Agency, E-commerce" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Selected Service</label>
                  <input readOnly value={plan.title} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white/60 outline-none cursor-not-allowed text-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Project Goals</label>
                  <textarea required name="message" rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors resize-none text-sm" placeholder="What are we building?" />
                </div>

                {/* Honeypot field for spam protection */}
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                {status === 'error' && (
                  <p className="text-red-400 text-xs font-medium">Something went wrong. Please try again.</p>
                )}



                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full py-5 bg-white text-black rounded-xl font-bold text-lg flex items-center justify-center gap-3 mt-4 hover:bg-neutral-200 transition-all disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    </span>
                  ) : (
                    <>Submit Proposal <ArrowUpRight size={20} /></>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAction = (choice: 'accept' | 'decline') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-[400px] z-[99999] bg-neutral-900 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl"
    >
      <h4 className="text-lg font-medium uppercase tracking-tight mb-4 text-white">Privacy & Cookies</h4>
      <p className="text-sm text-white/40 font-light leading-relaxed mb-8">
        We use essential cookies to ensure the best experience on our site. No personal data is tracked without your consent.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => handleAction('accept')}
          className="flex-1 py-4 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
        >
          Accept
        </button>
        <button
          onClick={() => handleAction('decline')}
          className="flex-1 py-4 bg-transparent border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
        >
          Decline
        </button>
      </div>
    </motion.div>
  );
};

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6 relative overflow-hidden text-center">
      <div className="absolute inset-0 -z-10 opacity-5">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/30">404 Error</span>
        <h1 className="text-[120px] md:text-[200px] font-bold tracking-tighter leading-none my-8 opacity-5">404</h1>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase mb-8">Page Not Found</h2>
        <p className="text-black/40 font-light max-w-sm mx-auto mb-12">
          The link you followed may be broken, or the page may have been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-neutral-800 transition-all"
        >
          Return Home <ArrowUpRight size={16} />
        </Link>
      </motion.div>
    </div>
  );
};

const AboutPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-3 text-black/50 hover:text-black transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-black/30">About the Studio</span>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-6 leading-[0.9] text-black">
              Crafting Digital<br />Masterpieces.
            </h1>
            <p className="text-xl md:text-2xl text-black/50 mt-12 font-light leading-relaxed">
              A boutique design and development studio dedicated to helping ambitious businesses stand out online. Artistic vision meets technical precision — no middlemen, no handoffs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-black/5"
          >
            <img
              src={aboutStudioImg}
              alt="About PixelOwl"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-40">
          {[
            { title: "Vision", desc: "To redefine the digital experience by creating websites that are not just tools, but extensions of a brand's soul." },
            { title: "Mission", desc: "Empowering startups and established brands with high-performance, aesthetically superior web solutions." },
            { title: "Values", desc: "Quality over quantity, transparency in every step, and a relentless pursuit of perfection." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            >
              <h3 className="text-2xl font-medium uppercase tracking-tight mb-6">{item.title}</h3>
              <p className="text-black/40 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-3 text-black/50 hover:text-black transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-black/30">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-6 leading-[0.9]">
              Let's Start<br />Something Big.
            </h1>

            <div className="mt-16 space-y-12">
              {[
                { icon: Mail, label: "Email", value: "pixelowl.agency@gmail.com" },
                { icon: MapPin, label: "Location", value: "India" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-black/60">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-black/30 mb-2">{item.label}</h4>
                    <p className="text-2xl font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-50/80 backdrop-blur-sm border border-black/5 p-10 md:p-16 rounded-3xl"
          >
            <ContactForm />
          </motion.div>
        </div>

        <div className="mt-20 flex gap-6">
          <a href="https://www.instagram.com/pixelowl_digital?igsh=aWt2d3VmbnB0MGZt" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all text-black hover:text-white">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
const TeamPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>
      <button onClick={() => navigate(-1)} className="mb-12 flex items-center gap-3 text-black/50 hover:text-black transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-black/30">Behind the scenes</span>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-6 leading-[0.9] mb-20 text-black">
            Meet the<br />Team.
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Alex Mercer", role: "CEO & Founder", image: team1Img },
            { name: "Jordan Lee", role: "Lead Designer", image: team2Img },
            { name: "Taylor Swift", role: "Senior Developer", image: team3Img },
            { name: "Sam Wilson", role: "Digital Marketer", image: team4Img }
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 * i }}>
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 filter grayscale hover:grayscale-0 transition-all duration-500 border border-black/5 underline-offset-4">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-medium uppercase tracking-tight">{t.name}</h3>
              <p className="text-black/40 text-sm mt-2 font-mono uppercase tracking-widest">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>
      <button onClick={() => navigate(-1)} className="mb-12 flex items-center gap-3 text-black/50 hover:text-black transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-7xl mx-auto mb-20 px-6 md:px-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-black/30">What we do</span>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-6 leading-[0.9] text-black">
            Our<br />Services.
          </h1>
        </motion.div>
      </div>
        
      <div className="w-full border-t border-black/10 pt-12 relative">
        <FlowingMenu
          items={[
            { link: '#', text: 'Web Design', image: serviceWebDesignImg },
            { link: '#', text: 'Web Development', image: serviceWebDevImg },
            { link: '#', text: 'E-commerce', image: serviceEcommerceImg },
            { link: '#', text: 'SEO Optimization', image: serviceSeoImg },
            { link: '#', text: 'Digital Marketing', image: serviceMarketingImg }
          ]}
          speed={15}
          textColor="#000000"
          bgColor="#ffffff"
          marqueeBgColor="#C8FF00"
          marqueeTextColor="#000000"
          borderColor="rgba(0,0,0,0.1)"
        />
      </div>
    </div>
  );
};

const NewsPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>
      <button onClick={() => navigate(-1)} className="mb-12 flex items-center gap-3 text-black/50 hover:text-black transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-black/30">Company Updates</span>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-6 leading-[0.9] mb-20 text-black">
            Latest<br />News.
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 * i }} className="group cursor-pointer">
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 bg-neutral-100 border border-black/5 relative flex items-center justify-center">
                <span className="text-black/10 font-bold uppercase tracking-[0.4em] pointer-events-none transition-transform duration-500 group-hover:scale-110">Thumbnail {i}</span>
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs font-mono text-black/40 uppercase tracking-widest">
                <span>Press Release</span>
                <span className="w-1 h-1 rounded-full bg-[#C8FF00]" />
                <span>Mar 1{i}, 2026</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tighter uppercase leading-tight mb-4 group-hover:text-black/70 transition-colors">PixelOwl Launches New Web Platform For Tech Startups.</h3>
              <p className="text-black/50 leading-relaxed font-light line-clamp-2">Our recent push towards scalable architectures brings robust, enterprise-level tooling to early-stage founders for a fraction of the cost.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


const HomePage = () => (
   <>
    <Hero />
    <MarqueeStrip />
    <ProjectsSection />
    <SolutionsSection />
    <AgencyStatsSection />
    <ServicesSection />
    <DeliveryMarquee />
    <PricingSection />
    <TestimonialsSection />
    <Footer />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MobileOverlayMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const location = useLocation();
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-3xl z-99998 pointer-events-auto"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed top-0 left-0 w-full bg-black z-99999 p-12 pt-40 flex flex-col items-center pointer-events-auto rounded-b-[40px] border-b border-white/5"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-10 w-full">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.to}
                      onClick={onClose}
                      className={`text-5xl font-medium tracking-tight uppercase block transition-colors ${isActive ? 'text-[#C8FF00]' : 'text-white/40 hover:text-white'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <main className="bg-transparent text-white selection:bg-white selection:text-black">
        <ScrollToTop />
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <MobileOverlayMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}
