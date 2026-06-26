"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { src: "/partners/malbec.png", alt: "Malbec Ventures",     width: 160, height: 230, h: "h-20" },
  { src: "/partners/mejia.png",  alt: "Mejía.co",            width: 260, height: 140, h: "h-28" },
  { src: "/partners/newcrux.png",alt: "Newcrux",             width: 280, height: 80,  h: "h-12" },
  { src: "/partners/dirmod.png", alt: "DirMOD",              width: 280, height: 90,  h: "h-8"  },
  { src: "/partners/aws.png",    alt: "AWS Partner Network", width: 300, height: 100, h: "h-32" },
];

const Partners = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-900 mb-10">
          {t.partners.title}
        </p>
        {/* Desktop marquee */}
        <div className="hidden md:block overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              animation: marquee 22s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track flex">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center px-14">
                <Image src={p.src} alt={p.alt} width={p.width} height={p.height} className={`${p.h} w-auto object-contain`} />
              </div>
            ))}
          </div>
        </div>
        {/* Mobile: 2x2 + último centrado */}
        <div className="grid grid-cols-2 gap-10 md:hidden">
          {partners.slice(0, 4).map((p) => (
            <div key={p.alt} className="flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Image src={p.src} alt={p.alt} width={p.width} height={p.height} className={`${p.h} w-auto object-contain`} />
            </div>
          ))}
          <div className="col-span-2 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image src={partners[4].src} alt={partners[4].alt} width={partners[4].width} height={partners[4].height} className={`${partners[4].h} w-auto object-contain`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
