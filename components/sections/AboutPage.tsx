"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight, Target, Handshake, Award, Linkedin, Users, Rocket, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const AboutPage = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Wait for client-side hydration
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-accent-50/20">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  const about = t.about;

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-accent-50/20">
      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {about.title}
          </h1>
          <p className="text-xl text-accent-600 font-medium max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-accent-50 to-purple-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{about.mission}</h2>
              <p className="text-gray-600 leading-relaxed">{about.missionText}</p>
            </div>

            {/* Story */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{about.story}</h2>
              <p className="text-gray-600 leading-relaxed">{about.storyText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{about.team}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Alejandro */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-accent-100">
                  <Image
                    src="/team/ale.jpeg"
                    alt={about.alejandro.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{about.alejandro.name}</h3>
                <p className="text-accent-600 font-semibold mb-4">{about.alejandro.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{about.alejandro.bio}</p>
                <div className="flex items-center gap-4">
                  <a 
                    href={`mailto:${about.alejandro.email}`}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-accent-600 font-medium transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                  <a 
                    href={about.alejandro.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Tomas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-blue-100">
                  <Image
                    src="/team/tomas.jpg"
                    alt={about.tomas.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{about.tomas.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{about.tomas.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{about.tomas.bio}</p>
                <div className="flex items-center gap-4">
                  <a 
                    href={`mailto:${about.tomas.email}`}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                  <a 
                    href={about.tomas.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{about.values}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{about.value1Title}</h3>
              <p className="text-gray-600 text-sm">{about.value1Desc}</p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{about.value2Title}</h3>
              <p className="text-gray-600 text-sm">{about.value2Desc}</p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{about.value3Title}</h3>
              <p className="text-gray-600 text-sm">{about.value3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Booking.com", "Check Point", "Roku", "Fiverr", "Public.com"].map((company, idx) => (
              <div key={idx} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-accent-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">{t.contact.subtitle}</p>
          <Button onClick={scrollToContact} variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            {about.cta} <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

