"use client";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { Check, Brain, Clock, FileText, Globe, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SolutionFinance = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Inteligencia Artificial para Finanzas:
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Cierres 3x más rápidos, cero errores
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <FadeIn direction="right">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-bold text-gray-900">
                      Proceso de Cierre Automatizado
                    </h4>
                    <Brain className="text-accent-600" size={24} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Antes</div>
                        <div className="text-2xl font-bold text-gray-900">5 días</div>
                      </div>
                      <ArrowRight className="text-gray-400" size={20} />
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Ahora</div>
                        <div className="text-2xl font-bold text-green-700">8 horas</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { icon: FileText, label: "Cierre mensual", status: "Completado", color: "green" },
                        { icon: BarChart3, label: "Conciliaciones", status: "En proceso", color: "blue" },
                        { icon: Globe, label: "Consolidación multi-país", status: "Pendiente", color: "gray" },
                      ].map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="text-gray-600" size={18} />
                              <span className="text-sm font-medium text-gray-900">
                                {item.label}
                              </span>
                            </div>
                            <span
                              className={`text-xs font-semibold px-2 py-1 rounded ${
                                item.color === "green"
                                  ? "bg-green-100 text-green-700"
                                  : item.color === "blue"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="text-accent-600" size={16} />
                        <span className="text-sm font-medium text-gray-900">
                          Tiempo ahorrado este mes
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-accent-700">142 horas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-primary-500 text-white rounded-lg p-3 shadow-lg"
              >
                <Check size={20} />
              </motion.div>
            </div>
          </FadeIn>

          {/* Text Content */}
          <FadeIn direction="left" delay={0.2}>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo funciona:
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Un agente de IA aprende cómo trabaja tu equipo financiero (Excel,
                ERPs, sistemas) y replica esos procesos automáticamente:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: "1",
                    title: "Observa y aprende",
                    description:
                      "mirá cómo tu equipo hace cierres, conciliaciones o reportes",
                  },
                  {
                    step: "2",
                    title: "Construye workflows",
                    description:
                      "el agente crea la automatización adaptada a tu lógica única",
                  },
                  {
                    step: "3",
                    title: "Ejecuta en segundos",
                    description:
                      "corre el proceso completo con un clic, siempre con posibilidad de pausar, editar o revertir",
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
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold">
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

              <div className="bg-white rounded-xl p-6 shadow-md mb-8 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Casos de uso:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Cierre mensual/trimestral end-to-end",
                    "Conciliaciones bancarias y de cuentas",
                    "Revenue recognition y tie-outs",
                    "Análisis de variaciones (budget vs actual)",
                    "Consolidaciones multi-país",
                  ].map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-600 mt-0.5">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md mb-8 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Resultados concretos:
                </h4>
                <ul className="space-y-3">
                  {[
                    "30% menos tiempo en tareas manuales repetitivas",
                    "Cierres 3-5x más rápidos (días → horas)",
                    "Menos errores y más control (audit trail completo)",
                    "Sin contratar: más capacidad con el mismo equipo",
                  ].map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold text-gray-900">¿Para quién?</span>{" "}
                  Empresas 50-500+ empleados con finanzas complejas: fintech,
                  e-commerce, travel, SaaS, retail, banca
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Roles clave:</span>{" "}
                  CFO, Controller, VP Finance, FP&A Lead, Regional Finance VP
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">Clientes que lo usan:</p>
                <p className="text-sm font-medium text-gray-700">
                  Booking.com • Fiverr • Public.com • Artlist • Fortune 500
                </p>
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                variant="secondary"
                size="lg"
                className="group"
              >
                Agendar demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SolutionFinance;

