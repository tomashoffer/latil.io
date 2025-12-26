"use client";

import Button from "@/components/ui/Button";
import { Check, ArrowRight, FileSearch, Globe, Database, TrendingUp, AlertTriangle, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TaxIntelligencePage = () => {
  const { t } = useLanguage();
  const solution = t.solutions.taxIntelligence;

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50/30">
      {/* Hero Header */}
      <section className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileSearch className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h1>
          <p className="text-xl text-green-600 font-medium mb-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">
            {/* Left column */}
            <div className="space-y-6">
              {/* How it works */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-green-500", icon: Database },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-teal-500", icon: Eye },
                    { num: "3", title: solution.step3, desc: solution.step3Desc, color: "bg-emerald-500", icon: AlertTriangle },
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
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Shadow Economy Detection</h3>
                    <Eye size={20} className="text-green-500" />
                  </div>

                  {/* Main stat */}
                  <div className="px-5 py-5 border-b border-gray-100 bg-gradient-to-r from-green-50 to-teal-50">
                    <p className="text-xs text-gray-500 mb-1">Hidden Revenue Identified</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-600">$2.4B</span>
                      <span className="text-sm text-green-500 font-medium">this quarter</span>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="px-5 py-4 border-r border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Cases Generated</p>
                      <p className="text-2xl font-bold text-gray-900">12,847</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-xs text-gray-500 mb-1">Match Accuracy</p>
                      <p className="text-2xl font-bold text-green-600">99%</p>
                    </div>
                  </div>

                  {/* Detection types */}
                  <div className="px-5 py-4 space-y-3">
                    <p className="text-xs font-medium text-gray-500">Active Detections</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Globe size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Unregistered businesses</span>
                        </div>
                        <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">4,231</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Unreported income</span>
                        </div>
                        <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">6,892</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Digital marketplace gaps</span>
                        </div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">1,724</span>
                      </div>
                    </div>
                  </div>

                  {/* Efficiency */}
                  <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">vs Manual Audits</span>
                      <span className="text-sm font-bold text-green-600">10x more efficient</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg">
                99% accuracy
              </div>
              <div className="absolute -bottom-2 -left-2 bg-teal-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                <Eye size={12} />
                AI-powered
              </div>
            </div>
          </div>

          {/* Mobile/Tablet layout */}
          <div className="lg:hidden space-y-8 mt-8">
            {/* Dashboard first on mobile */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 text-sm">Shadow Economy Detection</h3>
                    <Eye size={16} className="text-green-500" />
                  </div>
                  <div className="px-4 py-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-teal-50">
                    <p className="text-xs text-gray-500 mb-1">Hidden Revenue Identified</p>
                    <p className="text-2xl font-bold text-green-600">$2.4B</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-3 border-r border-gray-100">
                      <p className="text-xs text-gray-500">Cases</p>
                      <p className="text-xl font-bold text-gray-900">12,847</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-xs text-gray-500">Accuracy</p>
                      <p className="text-xl font-bold text-green-600">99%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                99% accuracy
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-green-500" },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-teal-500" },
                    { num: "3", title: solution.step3, desc: solution.step3Desc, color: "bg-emerald-500" },
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

      {/* Clients Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-6 text-center">{solution.clients || "Organizations using it:"}</p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {((solution as any).clientsList || ["National Tax Authorities", "State Revenue Agencies", "International Organizations"]).map((org: string, idx: number) => (
              <div 
                key={idx} 
                className="bg-white text-gray-700 font-semibold text-sm md:text-base px-5 py-2.5 rounded-lg shadow-sm border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200"
              >
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-teal-600">
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

export default TaxIntelligencePage;

