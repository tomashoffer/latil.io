"use client";

import Button from "@/components/ui/Button";
import { Check, ArrowRight, ExternalLink, Cloud, Brain, FileSearch, Stethoscope, ShieldAlert, Code2, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CALENDLY_URL } from "@/lib/config";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Brain,
  FileSearch,
  Stethoscope,
  ShieldAlert,
  Code2,
};

interface SolutionPageProps {
  solutionKey: "cloud" | "finance" | "taxIntelligence" | "healthcare" | "quantumSecurity" | "custom";
  iconName: string;
  accentColor: "primary" | "accent" | "green" | "blue" | "purple" | "orange";
}

const colorClasses = {
  primary: {
    gradient: "from-primary-500 to-accent-500",
    bg: "bg-primary-600",
    text: "text-primary-600",
    bgLight: "bg-primary-50",
    border: "border-primary-200",
  },
  accent: {
    gradient: "from-accent-500 to-primary-500",
    bg: "bg-accent-600",
    text: "text-accent-600",
    bgLight: "bg-accent-50",
    border: "border-accent-200",
  },
  green: {
    gradient: "from-accent-500 to-primary-500",
    bg: "bg-accent-600",
    text: "text-accent-600",
    bgLight: "bg-accent-50",
    border: "border-accent-200",
  },
  blue: {
    gradient: "from-primary-500 to-accent-500",
    bg: "bg-primary-600",
    text: "text-primary-600",
    bgLight: "bg-primary-50",
    border: "border-primary-200",
  },
  purple: {
    gradient: "from-accent-500 to-primary-500",
    bg: "bg-accent-600",
    text: "text-accent-600",
    bgLight: "bg-accent-50",
    border: "border-accent-200",
  },
  orange: {
    gradient: "from-primary-500 to-accent-500",
    bg: "bg-primary-600",
    text: "text-primary-600",
    bgLight: "bg-primary-50",
    border: "border-primary-200",
  },
};

const SolutionPage = ({ solutionKey, iconName, accentColor }: SolutionPageProps) => {
  const { t } = useLanguage();
  const solution = t.solutions[solutionKey];
  const colors = colorClasses[accentColor];
  const Icon = iconMap[iconName] || Cloud;

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  // Check if solution has use cases (finance and healthcare have them)
  const hasUseCases = "useCases" in solution;
  // Check if solution has partner info
  const hasPartner = "partner" in solution;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`pt-32 pb-20 bg-gradient-to-br ${colors.bgLight} to-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center`}>
              <Icon className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-900 mb-4">
            {solution.title}
          </h1>
          <p className={`text-xl sm:text-2xl text-center ${colors.text} font-medium mb-8`}>
            {solution.subtitle}
          </p>
          {"hero" in solution && (
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-8">
              {solution.hero as string}
            </p>
          )}
          <div className="flex justify-center">
            <Button
              onClick={openCalendly}
              variant="primary"
              size="lg"
              className="group"
            >
              {solution.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            {solution.how}
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {solution.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: solution.step1, desc: solution.step1Desc },
              { step: "2", title: solution.step2, desc: solution.step2Desc },
              { step: "3", title: solution.step3, desc: solution.step3Desc },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 h-full">
                <div className={`w-12 h-12 ${colors.bg} text-white rounded-full flex items-center justify-center font-bold text-xl mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases (if available) */}
      {hasUseCases && (
        <section className={`py-20 ${colors.bgLight}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              {(solution as typeof t.solutions.finance).useCases}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                (solution as typeof t.solutions.finance).uc1,
                (solution as typeof t.solutions.finance).uc2,
                (solution as typeof t.solutions.finance).uc3,
                (solution as typeof t.solutions.finance).uc4,
                (solution as typeof t.solutions.finance).uc5,
              ].filter(Boolean).map((useCase, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-3">
                  <Check className={`${colors.text} flex-shrink-0 mt-0.5`} size={20} />
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className={`py-20 ${hasUseCases ? "bg-white" : colors.bgLight}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            {solution.results}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[solution.r1, solution.r2, solution.r3, solution.r4].map((result, idx) => (
              <div key={idx} className={`bg-white rounded-xl p-6 shadow-md border ${colors.border}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 ${colors.bgLight} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Check className={colors.text} size={20} />
                  </div>
                  <p className="text-gray-700 font-medium">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className={`py-20 ${hasUseCases ? colors.bgLight : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {solution.for}
              </h2>
              <p className="text-gray-600 mb-6">{solution.forDesc}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {solution.roles}
              </h3>
              <p className="text-gray-600 mb-6">{solution.rolesDesc}</p>

              <div className={`${colors.bgLight} rounded-xl p-4`}>
                <p className="text-sm text-gray-500 mb-1">{(solution as any).clients || "Clients:"}</p>
                <p className="font-medium text-gray-700">{(solution as any).clientsDesc || ""}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner badge (if available) */}
      {hasPartner && (solution as typeof t.solutions.taxIntelligence).partnerUrl && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-gray-500 text-sm">
                {(solution as typeof t.solutions.taxIntelligence).partner}
              </p>
              <a
                href={(solution as typeof t.solutions.taxIntelligence).partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${colors.text} hover:underline font-medium`}
              >
                Learn more <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`py-20 bg-gradient-to-br ${colors.gradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <Button
            onClick={openCalendly}
            variant="secondary"
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            {solution.cta}
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;
