"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import LogoCarousel from "@/components/ui/LogoCarousel";
import { ArrowRight, TrendingDown, Zap, Layers, CheckCircle2, Target, ShieldCheck } from "lucide-react";
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
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-20 pb-12"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            {t.hero.headlineMiddle && (
              <>
                {" "}
                {t.hero.headlineMiddle}
              </>
            )}
            {t.hero.headlineHighlight2 && (
              <>
                {" "}
                <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                  {t.hero.headlineHighlight2}
                </span>
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed font-medium"
          >
            {t.hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold max-w-4xl">
              {t.hero.subheadlineCompanies}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={openCalendly}
              variant="primary"
              size="lg"
              className="group"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("problems")}
              variant="outline"
              size="lg"
            >
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* Stats - First row: 3 items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-6"
          >
            <div className="flex flex-col items-center">
              <TrendingDown className="text-primary-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">35%</div>
              <div className="text-sm text-gray-600">{t.hero.stats.cloud}</div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="text-accent-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">50%</div>
              <div className="text-sm text-gray-600">{t.hero.stats.finance}</div>
            </div>
            <div className="flex flex-col items-center">
              <Layers className="text-primary-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">{t.hero.stats.solutions}</div>
            </div>
          </motion.div>

          {/* Stats - Second row: 2 items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-8"
          >
            <div className="flex flex-col items-center">
              <Target className="text-green-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">{t.hero.stats.accuracy}</div>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-blue-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">{t.hero.stats.security}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Logos Carousel Section */}
      {/* <div id="clients" className="absolute bottom-0 left-0 right-0 py-8 bg-white/50 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base md:text-lg font-medium text-gray-600 mb-6">
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

