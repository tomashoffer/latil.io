"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown, Cloud, Brain, FileSearch, Stethoscope, ShieldAlert, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const solutionItems = [
  { key: "finops", href: "/solutions/finops", icon: Cloud },
  { key: "finance", href: "/solutions/finance", icon: Brain },
  { key: "taxIntelligence", href: "/solutions/tax-intelligence", icon: FileSearch },
  { key: "healthcare", href: "/solutions/healthcare", icon: Stethoscope },
  { key: "quantumSecurity", href: "/solutions/quantum-security", icon: ShieldAlert },
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
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={goHome}
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
            >
              Latil.io
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
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
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsSolutionsOpen(false)}
                  />
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-20"
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    {solutionItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.key}
                          href={item.href}
                          onClick={() => setIsSolutionsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <Icon size={20} className="text-primary-600" />
                          <span className="text-gray-700 font-medium">
                            {t.nav.solutionItems[item.key]}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t.nav.about}
            </Link>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t.nav.clients}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Select language"
              >
                <Globe size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700 uppercase">
                  {language}
                </span>
              </button>
              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsLangMenuOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
                        language === "en" && "bg-primary-50 text-primary-600 font-semibold"
                      )}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("es");
                        setIsLangMenuOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
                        language === "es" && "bg-primary-50 text-primary-600 font-semibold"
                      )}
                    >
                      Español
                    </button>
                  </div>
                </>
              )}
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="md"
            >
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {/* Solutions Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>{t.nav.solutions}</span>
                <ChevronDown size={16} className={cn("transition-transform", isMobileSolutionsOpen && "rotate-180")} />
              </button>
              {isMobileSolutionsOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {solutionItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Icon size={18} className="text-primary-600" />
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
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {t.nav.about}
            </Link>
            <button
              onClick={() => scrollToSection("clients")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {t.nav.clients}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {t.nav.contact}
            </button>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 px-4">
                <Globe size={16} className="text-gray-600" />
                <button
                  onClick={() => {
                    setLanguage("en");
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-sm px-2 py-1 rounded",
                    language === "en" && "bg-primary-100 text-primary-600 font-semibold"
                  )}
                >
                  EN
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => {
                    setLanguage("es");
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-sm px-2 py-1 rounded",
                    language === "es" && "bg-primary-100 text-primary-600 font-semibold"
                  )}
                >
                  ES
                </button>
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="primary"
                size="md"
                className="w-full"
              >
                {t.nav.cta}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
