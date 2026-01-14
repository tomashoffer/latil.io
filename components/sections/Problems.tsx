"use client";

import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { Cloud, Calculator, DollarSign, Clock, AlertTriangle, BarChart3, FileSearch, Stethoscope, ShieldAlert, ArrowRight, Code2, Lightbulb, Settings, PenTool } from "lucide-react";
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
      consequences: [
        { icon: DollarSign, text: t.problems.cloud.c1 },
        { icon: Clock, text: t.problems.cloud.c2 },
        { icon: BarChart3, text: t.problems.cloud.c3 },
        { icon: AlertTriangle, text: t.problems.cloud.c4 },
      ],
    },
    {
      icon: Calculator,
      title: t.problems.finance.title,
      pain: t.problems.finance.pain,
      consequencesTitle: t.problems.finance.consequences,
      href: "/solutions/finance",
      consequences: [
        { icon: Clock, text: t.problems.finance.c1 },
        { icon: AlertTriangle, text: t.problems.finance.c2 },
        { icon: Clock, text: t.problems.finance.c3 },
        { icon: AlertTriangle, text: t.problems.finance.c4 },
      ],
    },
    {
      icon: FileSearch,
      title: t.problems.taxIntelligence.title,
      pain: t.problems.taxIntelligence.pain,
      consequencesTitle: t.problems.taxIntelligence.consequences,
      href: "/solutions/tax-intelligence",
      consequences: [
        { icon: DollarSign, text: t.problems.taxIntelligence.c1 },
        { icon: AlertTriangle, text: t.problems.taxIntelligence.c2 },
        { icon: Clock, text: t.problems.taxIntelligence.c3 },
        { icon: BarChart3, text: t.problems.taxIntelligence.c4 },
      ],
    },
    {
      icon: Stethoscope,
      title: t.problems.healthcare.title,
      pain: t.problems.healthcare.pain,
      consequencesTitle: t.problems.healthcare.consequences,
      href: "/solutions/healthcare",
      consequences: [
        { icon: Clock, text: t.problems.healthcare.c1 },
        { icon: AlertTriangle, text: t.problems.healthcare.c2 },
        { icon: Clock, text: t.problems.healthcare.c3 },
        { icon: BarChart3, text: t.problems.healthcare.c4 },
      ],
    },
    {
      icon: ShieldAlert,
      title: t.problems.quantumSecurity.title,
      pain: t.problems.quantumSecurity.pain,
      consequencesTitle: t.problems.quantumSecurity.consequences,
      href: "/solutions/quantum-security",
      consequences: [
        { icon: AlertTriangle, text: t.problems.quantumSecurity.c1 },
        { icon: DollarSign, text: t.problems.quantumSecurity.c2 },
        { icon: AlertTriangle, text: t.problems.quantumSecurity.c3 },
        { icon: BarChart3, text: t.problems.quantumSecurity.c4 },
      ],
    },
    {
      icon: Code2,
      title: t.problems.custom.title,
      pain: t.problems.custom.pain,
      consequencesTitle: t.problems.custom.consequences,
      href: "/solutions/custom",
      consequences: [
        { icon: PenTool, text: t.problems.custom.c1 },
        { icon: Lightbulb, text: t.problems.custom.c2 },
        { icon: Settings, text: t.problems.custom.c3 },
        { icon: BarChart3, text: t.problems.custom.c4 },
      ],
    },
  ];

  // Split problems into rows: 3 + 3
  const firstRow = problems.slice(0, 3);
  const secondRow = problems.slice(3);

  const renderCard = (problem: typeof problems[0], idx: number) => {
    const IconComponent = problem.icon;
    return (
      <FadeIn key={idx} delay={idx * 0.1}>
        <Link href={problem.href} className="block h-full group">
          <Card hover className="h-full transition-all duration-300 group-hover:border-primary-300 group-hover:shadow-lg">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary-200 group-hover:to-accent-200 transition-all">
                  <IconComponent className="text-primary-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {problem.pain}
                </p>
              </div>

              <div className="mt-auto">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {problem.consequencesTitle}
                </h4>
                <ul className="space-y-3 mb-6">
                  {problem.consequences.map((consequence, cIdx) => {
                    const ConsequenceIcon = consequence.icon;
                    return (
                      <li
                        key={cIdx}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <ConsequenceIcon
                          className="text-primary-600 flex-shrink-0 mt-0.5"
                          size={20}
                        />
                        <span>{consequence.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
                  <span>{t.hero.ctaSecondary.includes("Ver") ? "Ver solución" : "View solution"}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {firstRow.map((problem, idx) => renderCard(problem, idx))}
        </div>

        {/* Second row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {secondRow.map((problem, idx) => renderCard(problem, idx + 3))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
