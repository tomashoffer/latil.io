"use client";

import { Target, Zap, BarChart3, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/animations/FadeIn";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: t.about.value1Title, description: t.about.value1Desc },
    { icon: Zap, title: t.about.value2Title, description: t.about.value2Desc },
    { icon: BarChart3, title: t.about.value3Title, description: t.about.value3Desc },
    { icon: Handshake, title: t.about.value4Title, description: t.about.value4Desc },
  ];

  return (
    <section className="pt-10 pb-20 lg:pt-12 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-5">
              {t.about.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.about.missionText}
            </p>
          </div>
        </FadeIn>

        {/* Value pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} className="h-full">
                <div className="group h-full p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-primary-200 transition-all">
                  <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center mb-4 group-hover:bg-primary-50 group-hover:border-primary-200 transition-colors">
                    <IconComponent className="text-primary-600" size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
