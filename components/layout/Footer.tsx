"use client";

import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              Latil.io
            </h3>
            <p className="text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.solutions}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t.footer.cloud}
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t.footer.finance}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contacto@latil.io"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                >
                  <Mail size={16} />
                  contacto@latil.io
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/latil"
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

