import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/global.css";
import "./styles/background.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alex Karadiaur | Software Engineer",
  description: "Personal website and portfolio of Alex Karadiaur, a software engineer focused on web development.",
  keywords: ["software engineer", "web developer", "frontend", "backend", "full-stack"],
  authors: [{ name: "Alex Karadiaur" }],
  icons: {
    icon: [
      {
        url: '/code.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ],
    shortcut: '/code.ico',
    apple: '/code.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-50 flex min-h-screen flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
