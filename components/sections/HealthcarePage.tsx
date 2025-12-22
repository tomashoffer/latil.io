"use client";

import Button from "@/components/ui/Button";
import { Check, ArrowRight, Clock, FileText, Users, Activity, Stethoscope, ClipboardList, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HealthcarePage = () => {
  const { t } = useLanguage();
  const solution = t.solutions.healthcare;

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50/30">
      {/* Hero Header */}
      <section className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Stethoscope className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h1>
          <p className="text-xl text-blue-600 font-medium mb-6">
            {solution.subtitle}
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {solution.hero}
          </p>
        </div>
      </section>

      {/* Two column layout */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '3rem', alignItems: 'start' }} className="hidden lg:grid">
            {/* Left column */}
            <div className="space-y-6">
              {/* How it works */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-blue-500" },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-cyan-500" },
                    { num: "3", title: solution.step3, desc: solution.step3Desc, color: "bg-sky-500" },
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
                      <Check className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
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
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
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
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">AI Healthcare Dashboard</h3>
                    <Heart size={20} className="text-blue-500" />
                  </div>

                  {/* Main stats */}
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="px-5 py-4 border-r border-gray-100 bg-gradient-to-br from-blue-50 to-white">
                      <p className="text-xs text-gray-500 mb-1">Notes automated daily</p>
                      <p className="text-2xl font-bold text-blue-600">150+</p>
                      <p className="text-xs text-gray-400">per clinician</p>
                    </div>
                    <div className="px-5 py-4 bg-gradient-to-bl from-cyan-50 to-white">
                      <p className="text-xs text-gray-500 mb-1">Hours saved weekly</p>
                      <p className="text-2xl font-bold text-cyan-600">10-15</p>
                      <p className="text-xs text-gray-400">per clinician</p>
                    </div>
                  </div>

                  {/* Workflows */}
                  <div className="px-5 py-4 space-y-3">
                    <p className="text-xs font-medium text-gray-500">Active Workflows</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Clinical notes</span>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ClipboardList size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Pre-visit summaries</span>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Patient engagement</span>
                        </div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Running</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Analytics & insights</span>
                        </div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Running</span>
                      </div>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Documentation reduced</p>
                        <p className="text-xl font-bold text-blue-600">30%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">ROI</p>
                        <p className="text-xl font-bold text-cyan-600">50x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg">
                AI-powered
              </div>
              <div className="absolute -bottom-2 -left-2 bg-cyan-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                <Clock size={12} />
                24/7 automation
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden space-y-8">
            {/* Dashboard first on mobile */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 text-sm">AI Healthcare Dashboard</h3>
                    <Heart size={16} className="text-blue-500" />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-3 border-r border-gray-100">
                      <p className="text-xs text-gray-500">Notes/day</p>
                      <p className="text-xl font-bold text-blue-600">150+</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-xs text-gray-500">Hours saved</p>
                      <p className="text-xl font-bold text-cyan-600">10-15</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Docs reduced</p>
                        <p className="text-lg font-bold text-blue-600">30%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">ROI</p>
                        <p className="text-lg font-bold text-cyan-600">50x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                AI-powered
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-blue-500" },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-cyan-500" },
                    { num: "3", title: solution.step3, desc: solution.step3Desc, color: "bg-sky-500" },
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
                      <Check className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
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
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
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

      {/* CTA - No clients section since they don't have any yet */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">{t.contact.subtitle}</p>
          <Button onClick={scrollToContact} variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            {solution.cta} <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;

