"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, TrendingDown, Zap, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CALENDLY_URL } from "@/lib/config";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-20"
    >
      {/* Gradient orbs */}
      <div className="absolute top-24 left-1/4 w-[480px] h-[480px] bg-primary-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-32 right-1/4 w-[400px] h-[400px] bg-accent-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-10 sm:pb-20 relative z-10 w-full">
        <div className="text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
            {t.hero.badge}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {t.hero.headline}
            {t.hero.headlineHighlight1 && (
              <>
                {" "}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  {t.hero.headlineHighlight1}
                </span>
              </>
            )}
            {t.hero.headlineMiddle && <> {t.hero.headlineMiddle}</>}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* Social proof line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden sm:flex items-center justify-center gap-2 mb-10"
          >
            <CheckCircle2 className="text-green-500 flex-shrink-0" size={16} />
            <p className="text-sm text-gray-500 font-medium">{t.hero.subheadlineCompanies}</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button onClick={openCalendly} variant="primary" size="lg" className="group">
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button onClick={() => scrollToSection("solutions")} variant="outline" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto"
          >
            <div className="flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
              <TrendingDown className="text-primary-600 mb-1.5" size={22} />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">35%</div>
              <div className="text-xs text-gray-500 text-center mt-1 leading-tight">{t.hero.stats.cloud}</div>
            </div>
            <div className="flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
              <Zap className="text-accent-600 mb-1.5" size={22} />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">3×</div>
              <div className="text-xs text-gray-500 text-center mt-1 leading-tight">{t.hero.stats.fastClosings}</div>
            </div>
            <div className="flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
              <Users className="text-green-600 mb-1.5" size={22} />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">85%</div>
              <div className="text-xs text-gray-500 text-center mt-1 leading-tight">{t.hero.stats.aiResolution}</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Logo Carousel - hidden */}
      {/* <div className="w-full py-8 bg-white/80 backdrop-blur-sm border-t border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            {t.hero.clients}
          </p>
          <LogoCarousel
            logos={[
              { name: "Booking.com", image: "/clients/booking.png" },
              { name: "Check Point", image: "/clients/checkpoint.png" },
              { name: "Roku", image: "/clients/roku.png" },
              { name: "Fiverr", image: "/clients/fiverr.png" },
              { name: "Artlist", image: "/clients/artlist.png" },
              { name: "Cyera", image: "/clients/cyera.png" },
              { name: "Sapiens", image: "/clients/sapiens.png" },
            ]}
            speed={30}
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
