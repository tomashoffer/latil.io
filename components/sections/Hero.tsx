"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import LogoCarousel from "@/components/ui/LogoCarousel";
import { ArrowRight, TrendingDown, Zap, Briefcase } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-20 pb-40"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Reduce costos cloud hasta{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              35%
            </span>{" "}
            y acelera tus procesos financieros con{" "}
            <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
              IA
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Ayudamos a empresas en LATAM y Europa a automatizar la optimización
            de infraestructura cloud y liberar hasta{" "}
            <span className="font-semibold text-gray-900">30%</span> del tiempo
            de equipos financieros, con soluciones enterprise probadas por{" "}
            <span className="font-semibold text-gray-900">
              Booking.com, Check Point
            </span>{" "}
            y Fortune 500.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="lg"
              className="group"
            >
              Agendar Reunión
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("problems")}
              variant="outline"
              size="lg"
            >
              Ver Soluciones
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-24"
          >
            <div className="flex flex-col items-center">
              <TrendingDown className="text-primary-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">35%</div>
              <div className="text-sm text-gray-600">Reducción en costos cloud</div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="text-accent-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">30%</div>
              <div className="text-sm text-gray-600">Tiempo liberado en finanzas</div>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="text-primary-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">75%</div>
              <div className="text-sm text-gray-600">Menos trabajo manual</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Logos Carousel Section */}
      <div className="absolute bottom-0 left-0 right-0 py-8 bg-white/50 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6">
            Empresas que confían en nuestras soluciones
          </p>
          <LogoCarousel
            logos={[
              { name: "Booking.com", image: "/logos/booking.svg" },
              { name: "Check Point", image: "/logos/checkpoint.svg" },
              { name: "Roku", image: "/logos/roku.svg" },
              { name: "Fiverr", image: "/logos/fiverr.svg" },
              { name: "Public.com", image: "/logos/public.svg" },
              { name: "Artlist", image: "/logos/artlist.svg" },
              { name: "Cyera", image: "/logos/cyera.svg" },
              { name: "Sapiens", image: "/logos/sapiens.svg" },
            ]}
            speed={30}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

