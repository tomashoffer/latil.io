"use client";

import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const solutionItems = [
  { key: "finops", href: "/solutions/finops" },
  { key: "dtect", href: "/solutions/evidence-guard" },
  { key: "taxIntelligence", href: "/solutions/customer-platform" },
  { key: "finance", href: "/solutions/finance" },
  { key: "quantumSecurity", href: "/solutions/vision-shield" },
  { key: "tokenOptimization", href: "/solutions/token-optimization" },
  { key: "juganu", href: "/solutions/smart-spaces" },
  { key: "healthcare", href: "/solutions/healthcare" },
  { key: "custom", href: "/solutions/custom" },
] as const;

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr_1fr] gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logos/latil-wordmark-gradient.png"
              alt="Latil.io"
              width={120}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.solutions}</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {solutionItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {t.nav.solutionItems[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@latil.io"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                >
                  <Mail size={16} />
                  contact@latil.io
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/latil-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li className="pt-2">{t.contact.coverage}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="hover:text-primary-400 transition-colors"
            >
              {t.footer.terms}
            </a>
            <a
              href="#"
              className="hover:text-primary-400 transition-colors"
            >
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

