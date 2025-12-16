"use client";

import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/contexts/LanguageContext";

const Clients = () => {
  const { t } = useLanguage();
  
  const clients = [
    "Booking.com",
    "Check Point",
    "Roku",
    "Fiverr",
    "Public.com",
    "Artlist",
    "Cyera",
    "Sapiens International",
  ];

  return (
    <section id="clients" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t.clients.title}
          </h2>
        </FadeIn>

        {/* Logos Grid */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 group"
              >
                <span className="text-sm font-semibold text-gray-600 group-hover:text-primary-600 transition-colors text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>

          {/* Fortune 500 Badge */}
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-sm font-semibold text-gray-700">
              + Fortune 500 companies
            </span>
          </div>
        </FadeIn>

        {/* Testimonial */}
        <FadeIn delay={0.4}>
          <Card className="max-w-3xl mx-auto">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-primary-200 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                &ldquo;{t.clients.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{t.clients.testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {t.clients.testimonial.role}, {t.clients.testimonial.company}
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

export default Clients;

