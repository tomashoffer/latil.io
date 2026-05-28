"use client";

import Button from "@/components/ui/Button";
import { ArrowRight, Code2, Lightbulb, Rocket, Puzzle, Compass, GitBranch, Zap, Award, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CALENDLY_URL } from "@/lib/config";
import FadeIn from "@/components/animations/FadeIn";

const CustomDevelopmentPage = () => {
  const { t } = useLanguage();
  const solution = t.solutions.custom;
  const d = solution.dashboard;

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  const steps = [
    { num: "1", icon: Lightbulb, title: solution.step1, desc: solution.step1Desc },
    { num: "2", icon: Code2,     title: solution.step2, desc: solution.step2Desc },
    { num: "3", icon: Rocket,    title: solution.step3, desc: solution.step3Desc },
  ];

  const useCases = [
    { icon: Puzzle,    title: solution.uc1, desc: solution.uc1Desc },
    { icon: Compass,   title: solution.uc2, desc: solution.uc2Desc },
    { icon: GitBranch, title: solution.uc3, desc: solution.uc3Desc },
    { icon: Zap,       title: solution.uc4, desc: solution.uc4Desc },
  ];

  const metrics = [
    { value: "20+",       label: "Years combined experience" },
    { value: "Dev + PM",  label: "Complete team included" },
    { value: "3 phases",  label: "Structured delivery" },
    { value: "100%",      label: "Agile & transparent" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-slate-100/70 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <FadeIn>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-5">
                Custom Development
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {solution.title.replace(":", "")}
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
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-0.5 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900 text-sm">{d.title}</h3>
                      <Code2 size={16} className="text-primary-600" />
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100">
                      <div className="px-5 py-4 border-r border-gray-100 bg-primary-50/40">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Award size={12} className="text-primary-500" />
                          <p className="text-xs text-gray-400">{d.stat1Label}</p>
                        </div>
                        <p className="text-2xl font-bold text-primary-600">{d.stat1Value}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{d.stat1Sub}</p>
                      </div>
                      <div className="px-5 py-4 bg-accent-50/40">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Users size={12} className="text-accent-500" />
                          <p className="text-xs text-gray-400">{d.stat2Label}</p>
                        </div>
                        <p className="text-2xl font-bold text-accent-600">{d.stat2Value}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{d.stat2Sub}</p>
                      </div>
                    </div>
                    <div className="px-5 py-3">
                      <p className="text-xs font-semibold text-gray-400 mb-2">{d.buildLabel}</p>
                      <div className="space-y-1.5">
                        {[
                          { icon: Puzzle,    label: d.row1Label, badge: d.badge1, color: "text-primary-700 bg-primary-50" },
                          { icon: Lightbulb, label: d.row2Label, badge: d.badge2, color: "text-accent-700 bg-accent-50" },
                          { icon: GitBranch, label: d.row3Label, badge: d.badge3, color: "text-accent-700 bg-accent-50" },
                          { icon: Rocket,    label: d.row4Label, badge: d.badge4, color: "text-accent-700 bg-accent-50" },
                        ].map((row, idx) => {
                          const Icon = row.icon;
                          return (
                            <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                              <div className="flex items-center gap-2">
                                <Icon size={13} className="text-gray-400" />
                                <span className="text-sm text-gray-700">{row.label}</span>
                              </div>
                              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${row.color}`}>{row.badge}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="px-5 py-3 bg-gradient-to-r from-primary-50 to-accent-50 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-primary-500" />
                        <span className="text-xs text-gray-500">{d.footerLabel}</span>
                      </div>
                      <span className="text-sm font-bold text-primary-600">{d.footerValue}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  {d.float1}
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white text-primary-600 border border-primary-200 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Users size={12} />
                  {d.float2}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-400 mb-1">{m.value}</div>
                <div className="text-xs text-gray-400 leading-snug">{m.label}</div>
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
                      <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
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

      {/* What we build */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              {solution.useCases.replace(":", "")}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.08} className="h-full">
                  <div className="h-full p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg border border-primary-100 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{uc.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{solution.for}</h2>
                <p className="text-gray-600 leading-relaxed">{solution.forDesc}</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">{solution.roles}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.rolesDesc.split(", ").map((role, idx) => (
                    <span key={idx} className="bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
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
      <section className="py-16 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-lg text-gray-400 mb-8">{t.contact.subtitle}</p>
          <Button onClick={openCalendly} variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-50">
            {solution.cta} <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default CustomDevelopmentPage;
