"use client";

import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { Cloud, Brain, Bot, Stethoscope, ShieldAlert, ArrowRight, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const SolutionsOverview = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Cloud,
      title: t.solutions.cloud.title.replace(":", ""),
      subtitle: t.solutions.cloud.subtitle,
      href: "/solutions/finops",
      color: "primary",
    },
    {
      icon: Brain,
      title: t.solutions.finance.title.replace(":", ""),
      subtitle: t.solutions.finance.subtitle,
      href: "/solutions/finance",
      color: "accent",
    },
    {
      icon: Bot,
      title: t.solutions.taxIntelligence.title.replace(":", ""),
      subtitle: t.solutions.taxIntelligence.subtitle,
      href: "/solutions/tax-intelligence",
      color: "primary",
    },
    {
      icon: Stethoscope,
      title: t.solutions.healthcare.title.replace(":", ""),
      subtitle: t.solutions.healthcare.subtitle,
      href: "/solutions/healthcare",
      color: "accent",
    },
    {
      icon: ShieldAlert,
      title: t.solutions.quantumSecurity.title.replace(":", ""),
      subtitle: t.solutions.quantumSecurity.subtitle,
      href: "/solutions/quantum-security",
      color: "accent",
    },
    {
      icon: Code2,
      title: t.solutions.custom.title.replace(":", ""),
      subtitle: t.solutions.custom.subtitle,
      href: "/solutions/custom",
      color: "primary",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: "bg-primary-100", text: "text-primary-600", border: "group-hover:border-primary-300" },
    accent: { bg: "bg-accent-100", text: "text-accent-600", border: "group-hover:border-accent-300" },
  };

  // First row 3 cards, second row 2 cards centered
  const firstRow = solutions.slice(0, 3);
  const secondRow = solutions.slice(3);

  const renderCard = (solution: typeof solutions[0], idx: number) => {
    const IconComponent = solution.icon;
    const colors = colorClasses[solution.color];
    
    return (
      <FadeIn key={idx} delay={idx * 0.1}>
        <Link href={solution.href} className="block h-full group">
          <Card hover className={`h-full transition-all duration-300 ${colors.border} group-hover:shadow-lg`}>
            <div className="flex flex-col h-full p-2">
              <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                <IconComponent className={colors.text} size={28} />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:${colors.text} transition-colors`}>
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {solution.subtitle}
              </p>
              <div className={`flex items-center gap-2 ${colors.text} font-medium group-hover:gap-3 transition-all`}>
                <span>{t.hero.ctaSecondary.includes("Ver") ? "Ver más" : "Learn more"}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Card>
        </Link>
      </FadeIn>
    );
  };

  return (
    <section id="solutions" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-primary-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            {t.nav.solutions}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            {t.hero.ctaSecondary.includes("Ver") 
              ? "Soluciones enterprise probadas para automatizar y optimizar tus operaciones"
              : "Enterprise-proven solutions to automate and optimize your operations"
            }
          </p>
        </FadeIn>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {firstRow.map((solution, idx) => renderCard(solution, idx))}
        </div>

        {/* Second row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {secondRow.map((solution, idx) => renderCard(solution, idx + 3))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;

