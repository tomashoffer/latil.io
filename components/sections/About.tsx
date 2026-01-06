"use client";

import { Target, Zap, BarChart3, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t.about.value1Title,
      description: t.about.value1Desc,
    },
    {
      icon: Zap,
      title: t.about.value2Title,
      description: t.about.value2Desc,
    },
    {
      icon: BarChart3,
      title: t.about.value3Title,
      description: t.about.value3Desc,
    },
    {
      icon: Handshake,
      title: t.about.value4Title,
      description: t.about.value4Desc,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          {t.about.title}
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.about.missionText}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            {t.about.storyText.split('.')[0]}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 rounded-xl hover:bg-white transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
