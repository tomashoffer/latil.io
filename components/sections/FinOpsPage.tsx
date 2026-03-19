"use client";

import Button from "@/components/ui/Button";
import { Check, ArrowRight, TrendingDown, Zap, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CALENDLY_URL } from "@/lib/config";

const FinOpsPage = () => {
  const { t } = useLanguage();
  const solution = t.solutions.cloud;

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      {/* Hero Header */}
      <section className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h1>
          <p className="text-xl text-primary-600 font-medium">
            {solution.subtitle}
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            {solution.hero}
          </p>
        </div>
      </section>

      {/* Two column layout */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
            {/* Left column */}
            <div className="space-y-6">
              {/* How it works */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-primary-600" },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-primary-600" },
                    { num: "3", title: solution.step3, desc: solution.step3Desc, color: "bg-accent-600" },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-7 h-7 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                        {step.num}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{solution.results}</h3>
                <div className="space-y-2">
                  {[solution.r1, solution.r2, solution.r3, solution.r4].map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* For whom */}
              <div className="bg-white/60 rounded-xl p-5 backdrop-blur-sm">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{solution.for}</span> {solution.forDesc}
                </p>
              </div>
            </div>

            {/* Right column - Dashboard */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                  <h3 className="font-semibold text-gray-900 text-sm">Optimization Dashboard</h3>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <RefreshCw size={14} className="text-gray-400" />
                  </button>
                </div>
                <div className="px-5 py-4 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Savings this month</span>
                    <div className="flex items-center gap-1 text-accent-600 text-xs">
                      <TrendingDown size={12} />
                      <span className="font-medium">Active</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">$127K</span>
                    <span className="text-xs text-accent-600 font-medium">+23%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100">
                  <div className="px-5 py-3 border-r border-gray-100">
                    <p className="text-xs text-gray-500 mb-0.5">Optimized resources</p>
                    <p className="text-xl font-bold text-gray-900">342</p>
                  </div>
                  <div className="px-5 py-3">
                    <p className="text-xs text-gray-500 mb-0.5">Time saved</p>
                    <p className="text-xl font-bold text-gray-900">156h</p>
                  </div>
                </div>
                <div className="px-5 py-3">
                  <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-accent-600 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-gray-700">Active workflows</span>
                  </div>
                  <div className="space-y-2">
                    {["Auto-scaling", "RI Optimization", "Cleanup"].map((name, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                        <span className="text-xs text-gray-600">{name}</span>
                          <span className="text-xs font-medium text-accent-600">Active</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-accent-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg">
                35% savings
              </div>
              <div className="absolute -bottom-2 -left-2 bg-primary-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                <Zap size={12} />
                Zero code
              </div>
            </div>
          </div>

          {/* Mobile/Tablet layout */}
          <div className="lg:hidden space-y-8">
            {/* Dashboard first on mobile */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                  <h3 className="font-semibold text-gray-900 text-sm">Optimization Dashboard</h3>
                  <RefreshCw size={14} className="text-gray-400" />
                </div>
                <div className="px-5 py-4 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Savings this month</span>
                    <div className="flex items-center gap-1 text-accent-600 text-xs">
                      <TrendingDown size={12} />
                      <span className="font-medium">Active</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">$127K</span>
                    <span className="text-xs text-accent-600 font-medium">+23%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100">
                  <div className="px-5 py-3 border-r border-gray-100">
                    <p className="text-xs text-gray-500 mb-0.5">Optimized</p>
                    <p className="text-xl font-bold text-gray-900">342</p>
                  </div>
                  <div className="px-5 py-3">
                    <p className="text-xs text-gray-500 mb-0.5">Time saved</p>
                    <p className="text-xl font-bold text-gray-900">156h</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-accent-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                35% savings
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-primary-600" },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-primary-600" },
                    { num: "3", title: solution.step3, desc: solution.step3Desc, color: "bg-accent-600" },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-7 h-7 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                        {step.num}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{solution.results}</h3>
                <div className="space-y-2">
                  {[solution.r1, solution.r2, solution.r3, solution.r4].map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/60 rounded-xl p-5 backdrop-blur-sm">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{solution.for}</span> {solution.forDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-6 text-center">{solution.clients || "Industries using it:"}</p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {((solution as any).clientsList || ["Fintech", "Banking", "Retail", "SaaS", "Tech"]).map((industry: string, idx: number) => (
              <div 
                key={idx} 
                className="bg-white text-gray-700 font-semibold text-sm md:text-base px-5 py-2.5 rounded-lg shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">{t.contact.subtitle}</p>
          <Button onClick={openCalendly} variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            {solution.cta} <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FinOpsPage;
