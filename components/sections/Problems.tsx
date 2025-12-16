"use client";

import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { Cloud, Calculator, DollarSign, Clock, AlertTriangle, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Problems = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: Cloud,
      title: t.problems.cloud.title,
      pain: t.problems.cloud.pain,
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
      consequences: [
        { icon: Clock, text: t.problems.finance.c1 },
        { icon: AlertTriangle, text: t.problems.finance.c2 },
        { icon: Clock, text: t.problems.finance.c3 },
        { icon: AlertTriangle, text: t.problems.finance.c4 },
      ],
    },
  ];

  return (
    <section id="problems" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t.problems.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, idx) => {
            const IconComponent = problem.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.2}>
                <Card hover className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="text-primary-600" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {problem.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {problem.pain}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        {idx === 0 ? t.problems.cloud.consequences : t.problems.finance.consequences}:
                      </h4>
                      <ul className="space-y-3">
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
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
