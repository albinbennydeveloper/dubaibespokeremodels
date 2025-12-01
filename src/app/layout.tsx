import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { LeadModalProvider } from "@/components/ui/lead-modal-context";
import { LeadModal } from "@/components/ui/lead-modal";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dubai Bespoke Remodels | Ultra-Luxury Home Renovation",
    template: "%s | Dubai Bespoke Remodels",
  },
  description: "Premier luxury home renovation and remodeling services in Dubai. Specializing in villas, penthouses, and bespoke architectural interiors.",
  keywords: [
    "Luxury Villa Renovation Dubai",
    "Bespoke Interior Remodeling UAE",
    "Turnkey Design Build Dubai",
    "Kitchen Remodel Jumeirah Park",
    "Emirates Hills Villa Contractor",
    "High-End Bathroom Renovation Cost Dubai",
    "Dubai Bespoke Remodels",
    "Luxury Fit-Out Dubai",
    "Penthouse Renovation Dubai"
  ],
  metadataBase: new URL("https://dubaibespokeremodels.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dubai Bespoke Remodels",
    description: "Ultra-luxury home renovation in Dubai.",
    url: "https://dubaibespokeremodels.ae",
    siteName: "Dubai Bespoke Remodels",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Advanced LocalBusiness Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://dubaibespokeremodels.ae/#organization",
        "name": "Dubai Bespoke Remodels",
        "image": "https://dubaibespokeremodels.ae/images/hero-poster.jpg",
        "url": "https://dubaibespokeremodels.ae",
        "telephone": "+971543014289",
        "email": "albinbenny.developer@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Boulevard Plaza, Tower 1",
          "addressLocality": "Downtown Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.1972,
          "longitude": 55.2744
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "priceRange": "$$$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://instagram.com/dubaibespokeremodels",
          "https://linkedin.com/company/dubaibespokeremodels"
        ]
      },
      {
        "@type": "Service",
        "name": "Luxury Villa Renovation",
        "serviceType": "General Contractor",
        "provider": {
          "@id": "https://dubaibespokeremodels.ae/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "description": "Complete structural transformation and extension of luxury villas in Palm Jumeirah and Emirates Hills."
      },
      {
        "@type": "Service",
        "name": "Luxury Apartment Renovation",
        "serviceType": "Interior Design",
        "provider": {
          "@id": "https://dubaibespokeremodels.ae/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "description": "Turnkey fit-out services for high-end apartments and penthouses in Downtown Dubai and Dubai Marina."
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-luxury-black text-luxury-white font-sans`}
      >
        <LeadModalProvider>
          <SmoothScroll>
            <CustomCursor />
            <div className="grain-overlay" />
            <FloatingWhatsApp />
            <LeadModal />
            {children}
          </SmoothScroll>
        </LeadModalProvider>
      </body>
    </html>
  );
}
