"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { src: "/partners/aws.png",    alt: "AWS Partner Network", width: 300, height: 100, h: "h-24" },
  { src: "/partners/newcrux.png",alt: "Newcrux",             width: 280, height: 80,  h: "h-9"  },
  { src: "/partners/mejia.png",  alt: "Mejía.co",            width: 260, height: 140, h: "h-20" },
  { src: "/partners/dirmod.png", alt: "DirMOD",              width: 280, height: 90,  h: "h-8"  },
];

const Partners = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-900 mb-10">
          {t.partners.title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-10 md:gap-16">
          {partners.map((p) => (
            <div
              key={p.alt}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className={`${p.h} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
