import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top Image Consultant & Personal Stylist in India | The Heena",
  description: "Transform how the world sees you. Elevate your confidence and personal brand with bespoke styling, wardrobe makeovers, and color analysis by India's premier image consultant.",
  keywords: ["image consultant India", "personal stylist India", "image consulting services India", "certified image consultant Delhi", "personal styling India", "wardrobe consultant", "personal branding for professionals India"],
  metadataBase: new URL("https://theheena-redesign.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://theheena-redesign.vercel.app",
    title: "Top Image Consultant & Personal Stylist in India | The Heena",
    siteName: "The Heena",
    description: "Elevate your personal brand and style statement with India's premier image consultant and personal stylist.",
    images: [
      {
        url: "https://theheena-redesign.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Heena Personal Styling Examples",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Image Consultant & Personal Stylist in India | The Heena",
    description: "Elevate your personal brand and style statement with India's premier image consultant.",
    images: ["https://theheena-redesign.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://theheena-redesign.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://theheena-redesign.vercel.app/#business",
      name: "The Heena Personal Styling",
      image: "https://theheena-redesign.vercel.app/og-image.jpg",
      email: "hello@theheena.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
      priceRange: "$$",
      description: "Premium personal stylist, image consultant, and personal branding expert based in India serving working professionals and brides.",
      url: "https://theheena-redesign.vercel.app"
    },
    {
      "@type": "Person",
      "@id": "https://theheena-redesign.vercel.app/#person",
      name: "Heena",
      jobTitle: "Lead Image Consultant & Personal Stylist",
      url: "https://theheena-redesign.vercel.app",
      description: "MSME-certified Image Consultant offering wardrobe styling, body language training, and personal brand transformation.",
      knowsAbout: ["Personal Styling", "Color Analysis", "Wardrobe Audit", "Personal Branding"],
      sameAs: [
        "https://instagram.com/heena_imageconsultant",
        "https://youtube.com/@heenaimageconsultant",
      ],
    },
    {
      "@type": "Service",
      name: "Complete Wardrobe Makeover",
      provider: { "@id": "https://theheena-redesign.vercel.app/#business" },
      serviceType: "Personal Styling",
      description: "Comprehensive wardrobe decluttering, editing, and restyling tailored for your lifestyle and body type."
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does an image consultant do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An image consultant helps individuals improve their personal and professional appearance through wardrobe audits, color analysis, and personal styling to build confidence and a strong personal brand."
          }
        },
        {
          "@type": "Question",
          name: "Do you offer online personal styling in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer comprehensive virtual styling services and online wardrobe consultations that cater to clients across India and globally."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
