"use client";

import Button from "@/components/ui/Button";
import { Check, ArrowRight, Shield, Lock, Search, AlertTriangle, CheckCircle2, Key, FileKey } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CALENDLY_URL } from "@/lib/config";

const QuantumSecurityPage = () => {
  const { t } = useLanguage();
  const solution = t.solutions.quantumSecurity;

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50/30">
      {/* Hero Header */}
      <section className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h1>
          <p className="text-xl text-accent-600 font-medium mb-6">
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
          <div className="hidden lg:grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">
            {/* Left column */}
            <div className="space-y-6">
              {/* How it works */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-accent-600" },
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
              <div className="bg-gradient-to-br from-accent-600 to-primary-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Quantum Readiness Assessment</h3>
                    <Shield size={20} className="text-accent-600" />
                  </div>

                  {/* Main score */}
                  <div className="px-5 py-5 border-b border-gray-100 bg-gradient-to-r from-accent-50 to-primary-50">
                    <p className="text-xs text-gray-500 mb-2">Migration Readiness Score</p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                          <circle cx="40" cy="40" r="36" stroke="url(#gradient)" strokeWidth="6" fill="none" 
                            strokeDasharray={`${72 * 2.26} ${226.2 - 72 * 2.26}`} strokeLinecap="round" />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#7c3aed" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-accent-600">72%</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p className="font-medium text-gray-700">Good progress</p>
                        <p>28% to full quantum-safe</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="px-5 py-4 border-r border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Assets scanned</p>
                      <p className="text-2xl font-bold text-gray-900">2,847</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-xs text-gray-500 mb-1">Vulnerabilities</p>
                      <p className="text-2xl font-bold text-primary-600">124</p>
                    </div>
                  </div>

                  {/* Status items */}
                  <div className="px-5 py-4 space-y-3">
                    <p className="text-xs font-medium text-gray-500">Cryptographic Status</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Key size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">RSA-2048 keys</span>
                        </div>
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">Vulnerable</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Lock size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">TLS certificates</span>
                        </div>
                        <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full">In review</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileKey size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Data encryption</span>
                        </div>
                        <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full">Migrated</span>
                      </div>
                    </div>
                  </div>

                  {/* Protection */}
                  <div className="px-5 py-4 bg-accent-50 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent-600" />
                      <span className="text-sm font-medium text-accent-700">Protected against &quot;harvest now&quot; attacks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-accent-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg">
                Post-quantum
              </div>
              <div className="absolute -bottom-2 -left-2 bg-primary-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                <Shield size={12} />
                Future-proof
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
                    <h3 className="font-semibold text-gray-900 text-sm">Quantum Readiness</h3>
                    <Shield size={16} className="text-accent-600" />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-3 border-r border-gray-100">
                      <p className="text-xs text-gray-500">Readiness</p>
                      <p className="text-xl font-bold text-accent-600">72%</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-xs text-gray-500">Assets</p>
                      <p className="text-xl font-bold text-gray-900">2,847</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-accent-50 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent-600" />
                      <span className="text-xs font-medium text-accent-700">Protected against harvest attacks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-accent-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                Post-quantum
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-accent-600" },
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

      {/* Industries Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-6 text-center">{solution.clients || "Industries we serve:"}</p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {((solution as any).clientsList || ["Banks", "Insurance", "Healthcare", "Government", "Defense"]).map((industry: string, idx: number) => (
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

export default QuantumSecurityPage;

