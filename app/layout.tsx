import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ironbeastfitness.example.com"),
  title: {
    default: "Iron Beast Fitness | Premium Gym & Training",
    template: "%s | Iron Beast Fitness",
  },
  description:
    "Iron Beast Fitness — elite strength training, CrossFit, cardio, and transformation programs. Join a luxury fitness community with world-class coaches.",
  keywords: [
    "gym",
    "fitness",
    "CrossFit",
    "personal training",
    "bodybuilding",
    "Iron Beast Fitness",
  ],
  openGraph: {
    title: "Iron Beast Fitness",
    description: "Premium gym experience. Train harder. Rise stronger.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Iron Beast Fitness",
  description:
    "Premium gym with strength, CrossFit, cardio, and personal training programs.",
  url: "https://ironbeastfitness.example.com",
  telephone: "+1-212-555-0199",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1200 Steel Ave",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10012",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "05:00",
    closes: "23:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebas.variable} ${poppins.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
