import Header from "@/components/header";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ankit Kumar Sah | IAM & Full-Stack Developer",
  description:
    "IAM Engineer and Software Developer with 4+ years of experience specializing in Okta, Auth0, SAML, SCIM, MFA, and Zero Trust. Okta Certified Professional, Developer, Administrator & Consultant.",
  metadataBase: new URL("https://www.ankitkumarsah.com.np"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ankit Kumar Sah | IAM & Full-Stack Developer",
    description: "IAM engineering and secure full-stack application delivery with Okta, Auth0, SAML, SCIM, and Next.js.",
    url: "/",
    siteName: "Ankit Kumar Sah",
    type: "website",
    images: [{ url: "/Ankit.jpg", width: 616, height: 616, alt: "Ankit Kumar Sah" }],
  },
  twitter: {
    card: "summary",
    title: "Ankit Kumar Sah | IAM & Full-Stack Developer",
    description: "IAM engineering and secure full-stack application delivery.",
    images: ["/Ankit.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${plusJakarta.className} relative bg-slate-50 text-gray-950 pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.12),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.08),_transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-6rem] right-[11rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-[8rem] sm:w-[52rem] dark:bg-blue-900/20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-1rem] left-[-28rem] -z-10 h-[28rem] w-[42rem] rounded-full bg-indigo-400/15 blur-[8rem] sm:w-[52rem] md:left-[-24rem] lg:left-[-18rem] xl:left-[-8rem] dark:bg-indigo-900/15"
        />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
            <Analytics />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
