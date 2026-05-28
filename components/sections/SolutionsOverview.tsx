"use client";

import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { Cloud, Brain, Bot, Stethoscope, Eye, ArrowRight, Code2 } from "lucide-react";
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
      icon: Brain,
      title: t.solutions.finance.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.finance.subtitle,
      benefits: [t.solutions.finance.b1, t.solutions.finance.b2],
      outcome: t.solutions.finance.cardOutcome,
      href: "/solutions/finance",
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
      icon: Stethoscope,
      title: t.solutions.healthcare.title.replace("Latil ", "").replace(":", ""),
      subtitle: t.solutions.healthcare.subtitle,
      benefits: [t.solutions.healthcare.b1, t.solutions.healthcare.b2],
      outcome: t.solutions.healthcare.cardOutcome,
      href: "/solutions/healthcare",
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
      icon: Code2,
      title: t.solutions.custom.title.replace(":", ""),
      subtitle: t.solutions.custom.subtitle,
      benefits: [t.solutions.custom.b1, t.solutions.custom.b2],
      outcome: t.solutions.custom.cardOutcome,
      href: "/solutions/custom",
    },
  ];

  const firstRow = solutions.slice(0, 3);
  const secondRow = solutions.slice(3);

  const renderCard = (solution: typeof solutions[0], idx: number) => {
    const IconComponent = solution.icon;

    return (
      <FadeIn key={idx} delay={idx * 0.1}>
        <Link href={solution.href} className="block h-full group">
          <Card hover className="h-full transition-all duration-300 group-hover:border-primary-300 group-hover:shadow-lg">
            <div className="flex flex-col h-full p-1">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <IconComponent className="text-primary-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary-600 transition-colors leading-snug">
                {solution.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                {solution.subtitle}
              </p>
              <ul className="space-y-1.5 mb-4 flex-grow">
                {solution.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-gray-600 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-1"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-4">
                  {solution.outcome}
                </div>
                <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>{t.nav.learnMore}</span>
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
    <section id="solutions" className="pt-12 lg:pt-16 pb-20 lg:pb-28 bg-gradient-to-br from-gray-50 to-primary-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            {t.nav.solutionsSectionTitle}
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.nav.solutionsSubtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {firstRow.map((solution, idx) => renderCard(solution, idx))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {secondRow.map((solution, idx) => renderCard(solution, idx + 3))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
