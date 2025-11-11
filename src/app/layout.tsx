import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WebonRock",
    template: "%s | WebonRock",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Required for proper SEO & browser behavior */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* ✅ Robots */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* ✅ Language */}
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-US" />

        {/* ✅ Author (update these) */}
        <meta name="Titus Kirubakaran" content="WebonRock" />
        <meta name="Titus Kirubakaran" content="WebonRock" />
        <meta name="Titus Kirubakaran" content="WebonRock" />

        {/* ✅ Theme */}
        <meta name="theme-color" content="#01A959" />
        <meta name="color-scheme" content="light dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />

        {/* ✅ Referrer */}
        <meta name="referrer" content="origin-when-cross-origin" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
