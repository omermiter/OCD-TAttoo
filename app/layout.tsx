import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OCD Tattoo | Custom Tattoo Artist · Kfar Saba, Israel",
  description:
    "Independent tattoo artist in Kfar Saba, Israel. Custom designs, fine line work, and permanent artistry. Book your session.",
  keywords: ["tattoo", "tattoo artist", "Kfar Saba", "Israel", "custom tattoo", "fine line tattoo"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
