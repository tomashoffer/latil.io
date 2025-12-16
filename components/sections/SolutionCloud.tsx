"use client";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { Check, Cloud, Zap, Shield, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionCloud = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-primary-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            {t.solutions.cloud.title}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            {t.solutions.cloud.subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <FadeIn direction="right">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.solutions.cloud.how}:
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.solutions.cloud.description}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: "1",
                    title: t.solutions.cloud.step1,
                    description: t.solutions.cloud.step1Desc,
                  },
                  {
                    step: "2",
                    title: t.solutions.cloud.step2,
                    description: t.solutions.cloud.step2Desc,
                  },
                  {
                    step: "3",
                    title: t.solutions.cloud.step3,
                    description: t.solutions.cloud.step3Desc,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {t.solutions.cloud.results}:
                </h4>
                <ul className="space-y-3">
                  {[
                    t.solutions.cloud.r1,
                    t.solutions.cloud.r2,
                    t.solutions.cloud.r3,
                    t.solutions.cloud.r4,
                  ].map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold text-gray-900">{t.solutions.cloud.for}?</span>{" "}
                  {t.solutions.cloud.forDesc}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{t.solutions.cloud.roles}:</span>{" "}
                  {t.solutions.cloud.rolesDesc}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">{t.solutions.cloud.clients}:</p>
                <p className="text-sm font-medium text-gray-700">
                  {t.solutions.cloud.clientsDesc}
                </p>
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                variant="primary"
                size="lg"
                className="group"
              >
                {t.solutions.cloud.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeIn>

          {/* Visual */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-bold text-gray-900">
                      Dashboard de Optimización
                    </h4>
                    <Cloud className="text-primary-600" size={24} />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Ahorro este mes</span>
                        <Zap className="text-green-600" size={16} />
                      </div>
                      <div className="text-3xl font-bold text-green-700">
                        $127K
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        +23% vs mes anterior
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="text-xs text-gray-600 mb-1">
                          Recursos optimizados
                        </div>
                        <div className="text-2xl font-bold text-blue-700">342</div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <div className="text-xs text-gray-600 mb-1">
                          Tiempo ahorrado
                        </div>
                        <div className="text-2xl font-bold text-purple-700">156h</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="text-gray-600" size={16} />
                        <span className="text-sm font-medium text-gray-900">
                          Workflows activos
                        </span>
                      </div>
                      <div className="space-y-2">
                        {["Auto-scaling", "RI Optimization", "Cleanup"].map(
                          (workflow, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-gray-600">{workflow}</span>
                              <span className="text-green-600 font-semibold">
                                Activo
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-accent-500 text-white rounded-lg p-3 shadow-lg"
              >
                <Target size={20} />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SolutionCloud;

