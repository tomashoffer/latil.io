"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Cloud, Calculator, FileSearch, Stethoscope, Eye, ArrowRight, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const Problems = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: Cloud,
      title: t.problems.cloud.title,
      pain: t.problems.cloud.pain,
      consequencesTitle: t.problems.cloud.consequences,
      href: "/solutions/finops",
      consequences: [t.problems.cloud.c1, t.problems.cloud.c2, t.problems.cloud.c3],
    },
    {
      icon: Calculator,
      title: t.problems.finance.title,
      pain: t.problems.finance.pain,
      consequencesTitle: t.problems.finance.consequences,
      href: "/solutions/finance",
      consequences: [t.problems.finance.c1, t.problems.finance.c2, t.problems.finance.c3],
    },
    {
      icon: FileSearch,
      title: t.problems.taxIntelligence.title,
      pain: t.problems.taxIntelligence.pain,
      consequencesTitle: t.problems.taxIntelligence.consequences,
      href: "/solutions/customer-platform",
      consequences: [t.problems.taxIntelligence.c1, t.problems.taxIntelligence.c2, t.problems.taxIntelligence.c3],
    },
    {
      icon: Stethoscope,
      title: t.problems.healthcare.title,
      pain: t.problems.healthcare.pain,
      consequencesTitle: t.problems.healthcare.consequences,
      href: "/solutions/healthcare",
      consequences: [t.problems.healthcare.c1, t.problems.healthcare.c2, t.problems.healthcare.c3],
    },
    {
      icon: Eye,
      title: t.problems.quantumSecurity.title,
      pain: t.problems.quantumSecurity.pain,
      consequencesTitle: t.problems.quantumSecurity.consequences,
      href: "/solutions/vision-shield",
      consequences: [t.problems.quantumSecurity.c1, t.problems.quantumSecurity.c2, t.problems.quantumSecurity.c3],
    },
    {
      icon: Code2,
      title: t.problems.custom.title,
      pain: t.problems.custom.pain,
      consequencesTitle: t.problems.custom.consequences,
      href: "/solutions/custom",
      consequences: [t.problems.custom.c1, t.problems.custom.c2, t.problems.custom.c3],
    },
  ];

  const renderCard = (problem: typeof problems[0], idx: number) => {
    const IconComponent = problem.icon;

    return (
      <FadeIn key={idx} delay={idx * 0.08}>
        <Link href={problem.href} className="block h-full group">
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors leading-snug">
                {problem.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-5 flex-grow">
                {problem.pain}
              </p>
              <div className="mt-auto">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">{problem.consequencesTitle}</h4>
                <ul className="space-y-2 mb-5">
                  {problem.consequences.map((consequence, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0 mt-1.5" />
                      <span>{consequence}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-accent-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>{t.nav.viewSolution}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </FadeIn>
    );
  };

  return (
    <section id="problems" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t.problems.title}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {problems.slice(0, 3).map((problem, idx) => renderCard(problem, idx))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.slice(3).map((problem, idx) => renderCard(problem, idx + 3))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
