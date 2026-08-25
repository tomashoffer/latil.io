"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown, Cloud, Brain, Bot, Stethoscope, Eye, Code2, ShieldAlert, Building2, Coins } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/config";

const solutionItems = [
  { key: "finops", href: "/solutions/finops", icon: Cloud },
  { key: "dtect", href: "/solutions/evidence-guard", icon: ShieldAlert },
  { key: "taxIntelligence", href: "/solutions/customer-platform", icon: Bot },
  { key: "finance", href: "/solutions/finance", icon: Brain },
  { key: "quantumSecurity", href: "/solutions/vision-shield", icon: Eye },
  { key: "tokenOptimization", href: "/solutions/token-optimization", icon: Coins },
  { key: "juganu", href: "/solutions/smart-spaces", icon: Building2 },
  { key: "healthcare", href: "/solutions/healthcare", icon: Stethoscope },
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

  const openCalendly = () => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

  const goHome = () => {
    if (pathname !== "/") {
      window.location.href = "/";
    } else {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkClass = "px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-accent-600 hover:bg-white hover:shadow-sm transition-all duration-200";

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/85 backdrop-blur-md shadow-sm border-gray-200/80"
            : "bg-white/95 backdrop-blur-sm border-gray-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0 ml-auto md:ml-0 mr-1 md:mr-0">
              <button onClick={goHome} className="flex items-center">
                <Image
                  src="/logos/latil-wordmark-gradient.png"
                  alt="Latil.io"
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                  priority
                />
              </button>
            </div>

            {/* Desktop Nav — pill container */}
            <div className="hidden md:flex items-center bg-gray-50/90 border border-gray-200/70 rounded-full px-1.5 py-1 gap-0.5">

              {/* Solutions dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  className={cn(navLinkClass, "flex items-center gap-1", isSolutionsOpen && "text-accent-600 bg-white shadow-sm")}
                >
                  {t.nav.solutions}
                  <ChevronDown size={14} className={cn("transition-transform duration-200", isSolutionsOpen && "rotate-180")} />
                </button>

                {isSolutionsOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsSolutionsOpen(false)} />
                    <div
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-[720px] max-w-[90vw] bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-20"
                      onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                      <div className="grid grid-cols-3 gap-1">
                        {solutionItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.key}
                              href={item.href}
                              onClick={() => setIsSolutionsOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-accent-50 group transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-accent-50 group-hover:bg-accent-100 flex items-center justify-center flex-shrink-0 transition-colors">
                                <Icon size={16} className="text-accent-600" />
                              </div>
                              <span className="text-gray-700 group-hover:text-accent-600 font-medium text-sm leading-tight transition-colors">
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

              <Link href="/about" className={cn(navLinkClass, pathname === "/about" && "text-accent-600 bg-white shadow-sm")}>
                {t.nav.about}
              </Link>

              <button onClick={() => scrollToSection("contact")} className={navLinkClass}>
                {t.nav.contact}
              </button>
            </div>

            {/* Right side: language + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-accent-600 hover:bg-gray-100 transition-colors"
                  aria-label="Select language"
                >
                  <Globe size={15} />
                  <span className="uppercase">{language}</span>
                </button>
                {isLangMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)} />
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-20">
                      {["en", "es"].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => { setLanguage(lang as "en" | "es"); setIsLangMenuOpen(false); }}
                          className={cn(
                            "w-full text-left px-4 py-2 text-sm transition-colors",
                            language === lang
                              ? "text-accent-600 font-semibold bg-accent-50"
                              : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          {lang === "en" ? "English" : "Español"}
                        </button>
                      ))}
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
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}
        <div
          className={cn(
            "fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Image src="/logos/latil-wordmark-gradient.png" alt="Latil.io" width={110} height={32} className="h-7 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
              <nav className="space-y-1">
                <div>
                  <button
                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-xl transition-colors font-semibold text-sm"
                  >
                    <span>{t.nav.solutions}</span>
                    <ChevronDown size={16} className={cn("transition-transform text-gray-500", isMobileSolutionsOpen && "rotate-180")} />
                  </button>
                  {isMobileSolutionsOpen && (
                    <div className="pl-2 space-y-0.5 mt-1 mb-1">
                      {solutionItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.key}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-accent-50 hover:text-accent-600 rounded-xl transition-colors text-sm"
                          >
                            <Icon size={16} className="text-accent-500 flex-shrink-0" />
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
                  className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-xl transition-colors font-semibold text-sm"
                >
                  {t.nav.about}
                </Link>

                <button
                  onClick={() => { scrollToSection("contact"); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-xl transition-colors font-semibold text-sm"
                >
                  {t.nav.contact}
                </button>
              </nav>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Idioma</p>
                <div className="flex gap-2 px-4">
                  {["en", "es"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang as "en" | "es")}
                      className={cn(
                        "flex-1 text-sm px-3 py-2 rounded-lg transition-colors font-medium",
                        language === lang
                          ? "bg-accent-100 text-accent-700"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      )}
                    >
                      {lang === "en" ? "English" : "Español"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
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
