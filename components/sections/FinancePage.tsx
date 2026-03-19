"use client";

import Button from "@/components/ui/Button";
import { Check, ArrowRight, Clock, FileText, BarChart3, Globe, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CALENDLY_URL } from "@/lib/config";

const FinancePage = () => {
  const { t } = useLanguage();
  const solution = t.solutions.finance;

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      {/* Hero Header */}
      <section className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h1>
          <p className="text-xl text-accent-600 font-medium">
            {solution.subtitle}
          </p>
        </div>
      </section>

      {/* Two column layout */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">
            {/* Left column */}
            <div className="space-y-6">
              {/* How it works */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-primary-600" },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-accent-500" },
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

              {/* Use Cases */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{solution.useCases}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[solution.uc1, solution.uc2, solution.uc3, solution.uc4, solution.uc5].filter(Boolean).map((uc, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="text-accent-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{uc}</span>
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
              <div className="bg-gradient-to-br from-accent-600 to-primary-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Automated Closing Process</h3>
                    <Brain size={20} className="text-accent-500" />
                  </div>

                  {/* Time comparison */}
                  <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Before</p>
                        <p className="text-2xl font-bold text-gray-400">5 days</p>
                      </div>
                      <ArrowRight className="text-accent-500" size={24} />
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">Now</p>
                        <p className="text-2xl font-bold text-accent-600">8 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="px-5 py-3 space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <FileText size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">Monthly closing</span>
                      </div>
                      <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded-full">Completed</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <BarChart3 size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">Reconciliations</span>
                      </div>
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">In process</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Globe size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">Multi-country consolidation</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Pending</span>
                    </div>
                  </div>

                  {/* Time saved */}
                  <div className="px-5 py-4 bg-gradient-to-r from-accent-50 to-primary-50 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock size={14} className="text-accent-600" />
                      <span className="text-xs text-gray-500">Time saved this month</span>
                    </div>
                    <p className="text-2xl font-bold text-accent-600">142 hours</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-accent-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg">
                3x faster
              </div>
              <div className="absolute -bottom-2 -left-2 bg-accent-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                <Check size={12} />
                Zero errors
              </div>
            </div>
          </div>

          {/* Mobile/Tablet layout */}
          <div className="lg:hidden space-y-8">
            {/* Dashboard first on mobile */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 text-sm">Automated Closing Process</h3>
                    <Brain size={16} className="text-accent-500" />
                  </div>
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Before</p>
                        <p className="text-xl font-bold text-gray-400">5 days</p>
                      </div>
                      <ArrowRight className="text-accent-500" size={20} />
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Now</p>
                        <p className="text-xl font-bold text-accent-600">8 hours</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gradient-to-r from-accent-50 to-primary-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock size={12} className="text-accent-600" />
                      <span className="text-xs text-gray-500">Time saved</span>
                    </div>
                    <p className="text-xl font-bold text-accent-600">142 hours</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-accent-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                3x faster
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
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-accent-500" },
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

              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{solution.useCases}</h3>
                <div className="space-y-2">
                  {[solution.uc1, solution.uc2, solution.uc3, solution.uc4, solution.uc5].filter(Boolean).map((uc, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="text-accent-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{uc}</span>
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
          <p className="text-sm text-gray-500 mb-6 text-center">{solution.clients || "Clients using it:"}</p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {((solution as any).clientsList || ["Travel", "E-commerce", "Fintech", "SaaS", "Retail", "Banking"]).map((industry: string, idx: number) => (
              <div 
                key={idx} 
                className="bg-white text-gray-700 font-semibold text-sm md:text-base px-5 py-2.5 rounded-lg shadow-sm border border-gray-200 hover:border-accent-300 hover:shadow-md transition-all duration-200"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-accent-600 to-primary-600">
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

export default FinancePage;

