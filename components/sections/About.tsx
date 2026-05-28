"use client";

import Image from "next/image";
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
    <section className="pt-6 pb-12 lg:pt-12 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-5">
              {t.about.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight flex items-center justify-center gap-3 flex-wrap">
              <span>{t.about.title.replace("Latil.io", "").trim()}</span>
              <Image
                src="/logos/latil-wordmark-gradient.png"
                alt="Latil.io"
                width={160}
                height={48}
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
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
                <div className="group h-full flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-5">
                    <IconComponent className="text-accent-600" size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{value.description}</p>
                  <div className="mt-5 h-0.5 w-8 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full group-hover:w-full transition-all duration-500" />
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
