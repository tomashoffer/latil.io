"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown, Cloud, Brain, Bot, Stethoscope, Eye, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/config";

const solutionItems = [
  { key: "finops", href: "/solutions/finops", icon: Cloud },
  { key: "finance", href: "/solutions/finance", icon: Brain },
  { key: "taxIntelligence", href: "/solutions/customer-platform", icon: Bot },
  { key: "healthcare", href: "/solutions/healthcare", icon: Stethoscope },
  { key: "quantumSecurity", href: "/solutions/vision-shield", icon: Eye },
  { key: "custom", href: "/solutions/custom", icon: Code2 },
] as const;

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  const goHome = () => {
    if (pathname !== "/") {
      window.location.href = "/";
    } else {
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 md:flex-shrink-0 md:order-none ml-auto md:ml-0 mr-[5px] md:mr-0">
            <button onClick={goHome} className="flex items-center">
              <Image
                src="/logos/latil-wordmark-gradient.png"
                alt="Latil.io"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                className="flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {t.nav.solutions}
                <ChevronDown size={16} className={cn("transition-transform", isSolutionsOpen && "rotate-180")} />
              </button>
              {isSolutionsOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsSolutionsOpen(false)} />
                  <div
                    className="absolute left-0 mt-2 w-[440px] max-w-[90vw] bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-20"
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {solutionItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.key}
                            href={item.href}
                            onClick={() => setIsSolutionsOpen(false)}
                            className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <Icon size={24} className="text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700 font-medium leading-tight">
                              {t.nav.solutionItems[item.key]}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t.nav.about}
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Select language"
              >
                <Globe size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700 uppercase">{language}</span>
              </button>
              {isLangMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)} />
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    <button
                      onClick={() => { setLanguage("en"); setIsLangMenuOpen(false); }}
                      className={cn("w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors", language === "en" && "bg-primary-50 text-primary-600 font-semibold")}
                    >
                      English
                    </button>
                    <button
                      onClick={() => { setLanguage("es"); setIsLangMenuOpen(false); }}
                      className={cn("w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors", language === "es" && "bg-primary-50 text-primary-600 font-semibold")}
                    >
                      Español
                    </button>
                  </div>
                </>
              )}
            </div>
            <Button onClick={openCalendly} variant="primary" size="md">
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Sidebar */}
    <>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60] md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Image src="/logos/latil-wordmark-gradient.png" alt="Latil.io" width={120} height={32} className="h-8 w-auto" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <nav className="space-y-2">
              <div>
                <button
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-semibold text-base"
                >
                  <span>{t.nav.solutions}</span>
                  <ChevronDown size={18} className={cn("transition-transform text-gray-600", isMobileSolutionsOpen && "rotate-180")} />
                </button>
                {isMobileSolutionsOpen && (
                  <div className="pl-2 space-y-1 mt-2 mb-2">
                    {solutionItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.key}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                        >
                          <Icon size={18} className="text-primary-600 flex-shrink-0" />
                          <span>{t.nav.solutionItems[item.key]}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-semibold text-base"
              >
                {t.nav.about}
              </Link>

              <button
                onClick={() => { scrollToSection("contact"); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-semibold text-base"
              >
                {t.nav.contact}
              </button>
            </nav>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 px-4 py-2">
                <Globe size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Idioma</span>
              </div>
              <div className="flex gap-2 px-4">
                <button
                  onClick={() => setLanguage("en")}
                  className={cn("flex-1 text-sm px-3 py-2 rounded-lg transition-colors", language === "en" ? "bg-primary-100 text-primary-600 font-semibold" : "bg-gray-100 text-gray-600 hover:bg-gray-200")}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={cn("flex-1 text-sm px-3 py-2 rounded-lg transition-colors", language === "es" ? "bg-primary-100 text-primary-600 font-semibold" : "bg-gray-100 text-gray-600 hover:bg-gray-200")}
                >
                  Español
                </button>
              </div>
            </div>

            <div className="pt-4">
              <Button onClick={() => { openCalendly(); setIsMobileMenuOpen(false); }} variant="primary" size="md" className="w-full">
                {t.nav.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
    </>
  );
};

export default Navbar;
