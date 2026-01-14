import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Latil.io - Automatización de IA para Optimizar Cloud y Finanzas",
  description:
    "Reducí hasta 35% tus costos cloud y liberá 30% del tiempo de tu equipo financiero. Soluciones enterprise probadas por empresas Fortune 500 y las empresas más importantes del mercado.",
  keywords:
    "FinOps, automatización finanzas, optimización cloud, AWS, Azure, GCP, cierre contable, conciliaciones",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logos/latil-icon-96-gradient.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/logos/latil-icon-96-gradient.png",
  },
  openGraph: {
    title: "Latil.io - Automatización Enterprise para Cloud y Finanzas",
    description:
      "Ahorrá hasta 35% en cloud y acelerá tus procesos financieros con IA",
    url: "https://latil.io",
    siteName: "Latil.io",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://latil.io/logos/logo.png",
        width: 512,
        height: 512,
        alt: "Latil.io - Enterprise Automation for Finance and Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latil.io - Automatización Enterprise para Cloud y Finanzas",
    description: "Ahorrá hasta 35% en cloud y acelerá tus procesos financieros con IA",
    images: ["https://latil.io/logos/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Latil.io",
              url: "https://latil.io",
              description:
                "Automatización enterprise para optimización de cloud y procesos financieros",
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@latil.io",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}

