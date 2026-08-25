"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Cloud, Brain, Bot, Stethoscope, Eye, ArrowRight, Code2, ShieldAlert, Building2, Coins } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const SolutionsOverview = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Cloud,
      title: t.solutions.cloud.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.cloud.subtitle,
      benefits: [t.solutions.cloud.b1, t.solutions.cloud.b2],
      outcome: t.solutions.cloud.cardOutcome,
      href: "/solutions/finops",
    },
    {
      icon: ShieldAlert,
      title: t.solutions.dtect.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.dtect.subtitle,
      benefits: [t.solutions.dtect.b1, t.solutions.dtect.b2],
      outcome: t.solutions.dtect.cardOutcome,
      href: "/solutions/evidence-guard",
    },
    {
      icon: Bot,
      title: t.solutions.taxIntelligence.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.taxIntelligence.subtitle,
      benefits: [t.solutions.taxIntelligence.b1, t.solutions.taxIntelligence.b2],
      outcome: t.solutions.taxIntelligence.cardOutcome,
      href: "/solutions/customer-platform",
    },
    {
      icon: Brain,
      title: t.solutions.finance.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.finance.subtitle,
      benefits: [t.solutions.finance.b1, t.solutions.finance.b2],
      outcome: t.solutions.finance.cardOutcome,
      href: "/solutions/finance",
    },
    {
      icon: Eye,
      title: t.solutions.quantumSecurity.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.quantumSecurity.subtitle,
      benefits: [t.solutions.quantumSecurity.b1, t.solutions.quantumSecurity.b2],
      outcome: t.solutions.quantumSecurity.cardOutcome,
      href: "/solutions/vision-shield",
    },
    {
      icon: Coins,
      title: t.solutions.tokenOptimization.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.tokenOptimization.subtitle,
      benefits: [t.solutions.tokenOptimization.b1, t.solutions.tokenOptimization.b2],
      outcome: t.solutions.tokenOptimization.cardOutcome,
      href: "/solutions/token-optimization",
    },
    {
      icon: Building2,
      title: t.solutions.juganu.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.juganu.subtitle,
      benefits: [t.solutions.juganu.b1, t.solutions.juganu.b2],
      outcome: t.solutions.juganu.cardOutcome,
      href: "/solutions/smart-spaces",
    },
    {
      icon: Stethoscope,
      title: t.solutions.healthcare.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.healthcare.subtitle,
      benefits: [t.solutions.healthcare.b1, t.solutions.healthcare.b2],
      outcome: t.solutions.healthcare.cardOutcome,
      href: "/solutions/healthcare",
    },
    {
      icon: Code2,
      title: t.solutions.custom.title.replace(":", ""),
      subtitle: t.solutions.custom.subtitle,
      benefits: [t.solutions.custom.b1, t.solutions.custom.b2],
      outcome: t.solutions.custom.cardOutcome,
      href: "/solutions/custom",
    },
  ];

  const renderCard = (solution: typeof solutions[0], idx: number) => {
    const IconComponent = solution.icon;

    return (
      <FadeIn key={idx} delay={idx * 0.08}>
        <Link href={solution.href} className="block h-full group">
          <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm group-hover:shadow-xl group-hover:border-accent-200 group-hover:-translate-y-1 transition-all duration-300">
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl flex items-center justify-center ring-1 ring-accent-200/60">
                  <IconComponent className="text-accent-600" size={28} />
                </div>
                <span className="text-5xl font-black text-accent-100 leading-none select-none">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors leading-snug">
                {solution.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">
                {solution.subtitle}
              </p>
              <ul className="space-y-1.5 mb-5">
                {solution.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-gray-600 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-gray-50">
                <div className="flex items-center justify-between gap-3">
                  <span className="min-w-0 inline-flex items-center px-2.5 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-semibold leading-snug">
                    {solution.outcome}
                  </span>
                  <div className="flex items-center gap-1.5 text-accent-600 font-medium text-sm whitespace-nowrap shrink-0 group-hover:gap-2.5 transition-all">
                    <span>{t.nav.learnMore}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </FadeIn>
    );
  };

  return (
    <section id="solutions" className="pt-12 lg:pt-16 pb-10 lg:pb-28 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            {t.nav.solutionsSectionTitle}
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.nav.solutionsSubtitle}
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => renderCard(solution, idx))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
