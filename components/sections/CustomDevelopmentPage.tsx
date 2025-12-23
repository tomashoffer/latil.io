"use client";

import Button from "@/components/ui/Button";
import { Check, ArrowRight, Code2, Users, Lightbulb, Rocket, GitBranch, Puzzle, Clock, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CustomDevelopmentPage = () => {
  const { t } = useLanguage();
  const solution = t.solutions.custom;

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50/30">
      {/* Hero Header */}
      <section className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Code2 className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h1>
          <p className="text-xl text-orange-600 font-medium mb-6">
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
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-orange-500" },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-amber-500" },
                    { num: "3", title: solution.step3, desc: solution.step3Desc, color: "bg-yellow-500" },
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
                      <Check className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
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
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Development Partner</h3>
                    <Code2 size={20} className="text-orange-500" />
                  </div>

                  {/* Main stats */}
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="px-5 py-4 border-r border-gray-100 bg-gradient-to-br from-orange-50 to-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Award size={14} className="text-orange-500" />
                        <p className="text-xs text-gray-500">Experience</p>
                      </div>
                      <p className="text-2xl font-bold text-orange-600">20+</p>
                      <p className="text-xs text-gray-400">years</p>
                    </div>
                    <div className="px-5 py-4 bg-gradient-to-bl from-amber-50 to-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Users size={14} className="text-amber-500" />
                        <p className="text-xs text-gray-500">Team</p>
                      </div>
                      <p className="text-2xl font-bold text-amber-600">Dev + PM</p>
                      <p className="text-xs text-gray-400">full stack</p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="px-5 py-4 space-y-3">
                    <p className="text-xs font-medium text-gray-500">What we build</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Puzzle size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Custom software</span>
                        </div>
                        <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Core</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Lightbulb size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Product management</span>
                        </div>
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Strategy</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GitBranch size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Technical consulting</span>
                        </div>
                        <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">Advisory</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Rocket size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">Process automation</span>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Delivery</span>
                      </div>
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="px-5 py-4 bg-gradient-to-r from-orange-50 to-amber-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-orange-600" />
                        <span className="text-sm text-gray-600">Agile methodology</span>
                      </div>
                      <span className="text-sm font-bold text-orange-600">100% transparent</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg">
                20+ years
              </div>
              <div className="absolute -bottom-2 -left-2 bg-amber-500 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                <Users size={12} />
                Full team
              </div>
            </div>
          </div>

          {/* Mobile/Tablet layout */}
          <div className="lg:hidden space-y-8 mt-8">
            {/* Dashboard first on mobile */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 text-sm">Development Partner</h3>
                    <Code2 size={16} className="text-orange-500" />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-3 border-r border-gray-100">
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="text-xl font-bold text-orange-600">20+ yrs</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-xs text-gray-500">Team</p>
                      <p className="text-xl font-bold text-amber-600">Dev + PM</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gradient-to-r from-orange-50 to-amber-50 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-orange-600" />
                      <span className="text-xs font-medium text-gray-600">Agile • 100% transparent</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                20+ years
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{solution.how}</h2>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                <div className="space-y-4">
                  {[
                    { num: "1", title: solution.step1, desc: solution.step1Desc, color: "bg-orange-500" },
                    { num: "2", title: solution.step2, desc: solution.step2Desc, color: "bg-amber-500" },
                    { num: "3", title: solution.step3, desc: solution.step3Desc, color: "bg-yellow-500" },
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
                      <Check className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
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

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-6">Nuestros servicios</p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {["Custom Development", "Product Management", "Technical Consulting", "Process Automation"].map((service, idx) => (
              <div key={idx} className="text-gray-600 font-semibold text-sm bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-amber-500">
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

export default CustomDevelopmentPage;

