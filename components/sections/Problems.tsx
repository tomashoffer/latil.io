"use client";

import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
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

  const firstRow = problems.slice(0, 3);
  const secondRow = problems.slice(3);

  const renderCard = (problem: typeof problems[0], idx: number) => {
    const IconComponent = problem.icon;
    return (
      <FadeIn key={idx} delay={idx * 0.1}>
        <Link href={problem.href} className="block h-full group">
          <Card hover className="h-full transition-all duration-300 group-hover:border-primary-300 group-hover:shadow-lg">
            <div className="flex flex-col h-full">
              <div className="mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary-200 group-hover:to-accent-200 transition-all">
                  <IconComponent className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {problem.pain}
                </p>
              </div>

              <div className="mt-auto">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{problem.consequencesTitle}</h4>
                <ul className="space-y-2 mb-5">
                  {problem.consequences.map((consequence, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-1.5"></span>
                      <span>{consequence}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>{t.nav.viewSolution}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </FadeIn>
    );
  };

  return (
    <section id="problems" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t.problems.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {firstRow.map((problem, idx) => renderCard(problem, idx))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {secondRow.map((problem, idx) => renderCard(problem, idx + 3))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
