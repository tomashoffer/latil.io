"use client";

import Button from "@/components/ui/Button";
import { Check, ArrowRight, TrendingDown, Zap, RefreshCw, Settings, BarChart2, GitBranch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CALENDLY_URL } from "@/lib/config";
import FadeIn from "@/components/animations/FadeIn";

const FinOpsPage = () => {
  const { t } = useLanguage();
  const solution = t.solutions.cloud;

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  const steps = [
    { num: "1", icon: Zap,       title: solution.step1, desc: solution.step1Desc },
    { num: "2", icon: BarChart2, title: solution.step2, desc: solution.step2Desc },
    { num: "3", icon: GitBranch, title: solution.step3, desc: solution.step3Desc },
  ];

  const metrics = [
    { value: "~35%", label: solution.r1 },
    { value: "~75%", label: solution.r2 },
    { value: "~90%", label: solution.r3 },
    { value: "1-click", label: solution.r4 },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary-50/70 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <FadeIn>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-5">
                FinOps Optimization
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {solution.title.replace("Latil ", "").replace(":", "")}
              </h1>
              <p className="text-lg text-primary-600 font-medium mb-4">
                {solution.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {solution.hero}
              </p>
              <Button onClick={openCalendly} variant="primary" size="lg">
                {solution.cta} <ArrowRight className="ml-2" size={18} />
              </Button>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative max-w-md mx-auto lg:ml-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-semibold text-gray-900 text-sm">{solution.visual.title}</h3>
                    <RefreshCw size={14} className="text-gray-400" />
                  </div>
                  <div className="px-5 py-4 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">{solution.visual.savings}</span>
                      <div className="flex items-center gap-1 text-green-600 text-xs">
                        <TrendingDown size={12} />
                        <span className="font-medium">{solution.visual.active}</span>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">$127K</span>
                      <span className="text-xs text-green-600 font-medium">+23%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="px-5 py-3 border-r border-gray-100">
                      <p className="text-xs text-gray-500 mb-0.5">{solution.visual.optimizedResources}</p>
                      <p className="text-xl font-bold text-gray-900">342</p>
                    </div>
                    <div className="px-5 py-3">
                      <p className="text-xs text-gray-500 mb-0.5">{solution.visual.timeSaved}</p>
                      <p className="text-xl font-bold text-gray-900">156h</p>
                    </div>
                  </div>
                  <div className="px-5 py-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-gray-700">{solution.visual.activeWorkflows}</span>
                    </div>
                    <div className="space-y-2">
                      {["Auto-scaling", "RI Optimization", "Cleanup"].map((name, idx) => (
                        <div key={idx} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                          <span className="text-xs text-gray-600">{name}</span>
                          <span className="text-xs font-medium text-green-600">{solution.visual.active}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  35% savings
                </div>
                <div className="absolute -bottom-3 -left-3 bg-accent-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Zap size={12} />
                  Zero code
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="py-10 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{m.value}</div>
                <div className="text-xs text-primary-200 leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              {solution.how.replace(":", "")}
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              {solution.description}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                  <div className="h-full p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-primary-200 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.num}
                      </div>
                      <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center border border-primary-100">
                        <Icon size={16} className="text-primary-600" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{solution.for}</h2>
                <p className="text-gray-600 leading-relaxed">{solution.forDesc}</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">{solution.roles}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.rolesDesc.split(", ").map((role, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1.5 rounded-full border border-primary-100">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-lg text-white/80 mb-8">{t.contact.subtitle}</p>
          <Button onClick={openCalendly} variant="secondary" size="lg" className="bg-white text-primary-700 hover:bg-gray-50">
            {solution.cta} <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default FinOpsPage;
