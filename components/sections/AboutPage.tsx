"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight, Target, Zap, BarChart3, Handshake, Linkedin, Mail, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { CALENDLY_URL } from "@/lib/config";

const teamMembers = [
  { key: "alejandro", src: "/team/ale.jpeg", position: "object-[50%_30%]" },
  { key: "tomas",     src: "/team/tomas.jpg",   position: "object-top" },
  { key: "nicolas",   src: "/team/nico.jpeg",    position: "object-top" },
  { key: "publio",    src: "/team/publio.jpeg",  position: "object-top" },
  { key: "karen",     src: "/team/karen.jpg",    position: "object-top" },
] as const;

type TeamKey = (typeof teamMembers)[number]["key"];

const AboutPage = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  const about = t.about;

  const values = [
    { icon: Target,   title: about.value1Title, description: about.value1Desc },
    { icon: Zap,      title: about.value2Title, description: about.value2Desc },
    { icon: BarChart3,title: about.value3Title, description: about.value3Desc },
    { icon: Handshake,title: about.value4Title, description: about.value4Desc },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-primary-50/60 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-6">
              {about.tag}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight flex items-center justify-center gap-3 flex-wrap">
              <span>{about.title.replace("Latil.io", "").trim()}</span>
              <Image
                src="/logos/latil-wordmark-gradient.png"
                alt="Latil.io"
                width={200}
                height={60}
                className="h-9 sm:h-11 lg:h-14 w-auto"
              />
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {about.missionText}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="pt-8 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Mission */}
            <FadeIn>
              <div className="relative overflow-hidden rounded-2xl border border-accent-100 bg-gradient-to-br from-accent-50/70 via-purple-50/50 to-white p-8 h-full flex flex-col">
                <div className="absolute -right-6 -bottom-6 text-accent-200/30 pointer-events-none">
                  <Target size={160} />
                </div>
                <div className="relative flex-1">
                  <div className="inline-flex items-center gap-2 bg-accent-600 text-white rounded-xl px-4 py-2 mb-6">
                    <Target size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">{about.mission}</span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{about.missionText}</p>
                </div>
              </div>
            </FadeIn>

            {/* Story */}
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/70 via-cyan-50/50 to-white p-8 h-full flex flex-col">
                <div className="absolute -right-6 -bottom-6 text-blue-200/30 pointer-events-none">
                  <Rocket size={160} />
                </div>
                <div className="relative flex-1">
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-xl px-4 py-2 mb-6">
                    <Rocket size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">{about.story}</span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{about.storyText}</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              {about.team}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {teamMembers.slice(0, 3).map(({ key, src, position }, idx) => {
              const member = about[key as TeamKey];
              return (
                <FadeIn key={key} delay={idx * 0.07} className="h-full">
                  <TeamCard member={member} src={src} position={position} />
                </FadeIn>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {teamMembers.slice(3).map(({ key, src, position }, idx) => {
              const member = about[key as TeamKey];
              return (
                <FadeIn key={key} delay={(idx + 3) * 0.07} className="h-full">
                  <TeamCard member={member} src={src} position={position} />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              {about.values}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, idx) => {
              const Icon = value.icon;
              const palette = [
                { grad: "from-violet-50 to-purple-50/50", border: "border-violet-100", icon: "text-violet-600", iconBg: "bg-violet-100", num: "text-violet-200" },
                { grad: "from-blue-50 to-cyan-50/50",     border: "border-blue-100",   icon: "text-blue-600",   iconBg: "bg-blue-100",   num: "text-blue-200" },
                { grad: "from-emerald-50 to-green-50/50", border: "border-emerald-100",icon: "text-emerald-600",iconBg: "bg-emerald-100", num: "text-emerald-200" },
                { grad: "from-orange-50 to-amber-50/50",  border: "border-orange-100", icon: "text-orange-600", iconBg: "bg-orange-100",  num: "text-orange-200" },
              ][idx];
              return (
                <FadeIn key={idx} delay={idx * 0.09} className="h-full">
                  <div className={`relative h-full p-6 rounded-2xl border bg-gradient-to-br ${palette.grad} ${palette.border} overflow-hidden`}>
                    <div className={`absolute top-4 right-4 text-6xl font-black leading-none select-none ${palette.num}`}>
                      0{idx + 1}
                    </div>
                    <div className={`w-12 h-12 rounded-xl ${palette.iconBg} flex items-center justify-center mb-5`}>
                      <Icon className={palette.icon} size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-lg text-white/80 mb-8">{t.contact.subtitle}</p>
          <Button
            onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}
            variant="secondary"
            size="lg"
            className="bg-white text-primary-700 hover:bg-gray-50"
          >
            {about.cta} <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

    </div>
  );
};

type MemberData = {
  name: string;
  role: string;
  bio: string;
  email: string;
  linkedin: string;
};

const TeamCard = ({
  member,
  src,
  position,
}: {
  member: MemberData;
  src: string;
  position: string;
}) => (
  <div className="h-full flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-primary-200 transition-all">
    <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary-100 mb-4 flex-shrink-0">
      <Image
        src={src}
        alt={member.name}
        width={80}
        height={80}
        className={`w-full h-full object-cover ${position}`}
      />
    </div>
    <h3 className="font-bold text-gray-900 mb-0.5">{member.name}</h3>
    <p className="text-primary-600 text-xs font-semibold mb-3">{member.role}</p>
    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{member.bio}</p>
    <div className="flex items-center gap-4 mt-auto">
      <a
        href={`mailto:${member.email}`}
        className="text-gray-400 hover:text-primary-600 transition-colors"
      >
        <Mail size={16} />
      </a>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-primary-600 transition-colors"
      >
        <Linkedin size={16} />
      </a>
    </div>
  </div>
);

export default AboutPage;
