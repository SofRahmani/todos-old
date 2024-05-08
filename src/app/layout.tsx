import Sidebar from "@/components/sidebar/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { baseAuth } from '@/auth/auth'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://todos.sofiane-rahmani.com/"),
  title: "My Todos App",
  description: "A simple todos app built with Next.js, Tailwind CSS and Prisma.",
  keywords: ["todos", "next.js", "tailwindcss", "prisma"],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://todos.sofiane-rahmani.com",
    title: "Mon application Todos",
    siteName: "My Todos",
    description:
      "Une application de todos simple construite avec Next.js, Tailwind CSS et Prisma.",
    images: [
      {
        url: "https://todos.sofiane-rahmani.com/og-banner.jpg",
        secureUrl: "https://www.todos.sofiane-rahmani.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Todos - Og Image",
      },
    ],
  },
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await baseAuth();

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-row overflow-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          {session?.user && <Sidebar />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
