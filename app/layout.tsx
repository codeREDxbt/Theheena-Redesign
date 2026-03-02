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
  title: "Heena | India's Only Image Consultant · MSME-Recognized",
  description: "Certified Image Consultant recognized by the Government of India, Ministry of MSME. Transform your professional presence with Heena — styling, wardrobe, body language.",
  keywords: ["image consultant India", "certified image consultant Delhi", "MSME image consultant", "personal styling India", "image consulting", "wardrobe consultant", "professional presence"],
  metadataBase: new URL("https://theheena.com"),
  openGraph: {
    type: "website",
    url: "https://theheena.com",
    title: "Heena | Image Consultant · MSME-Recognized",
    siteName: "Heena",
    description: "Government of India recognized Image Consultant. Wardrobe, body language, and personal presence — transformed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heena | India's Only Image Consultant · MSME-Recognized",
    description: "Government of India recognized Image Consultant. Wardrobe, body language, and personal presence — transformed.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://theheena.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Heena",
      url: "https://theheena.com",
      jobTitle: "Image Consultant",
      description: "India's Only MSME-Recognized Image Consultant. Certified by the Government of India, Ministry of MSME.",
      sameAs: [
        "https://instagram.com/heena_imageconsultant",
        "https://youtube.com/@heenaimageconsultant",
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Heena Image Consulting",
      url: "https://theheena.com",
      description: "Professional image consulting services. MSME-certified image consultant offering wardrobe styling, body language training, and personal brand transformation.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      name: "Heena",
      url: "https://theheena.com",
    },
  ],
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
