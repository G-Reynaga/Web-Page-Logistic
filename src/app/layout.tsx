import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ButtonUp from "@/components/buttonUp";
import Whatsapp from "@/components/whatsapp";
import { Toaster } from 'sonner';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    template: '%s | Empresa Logistic',
    default: 'Empresa Logistic',
  },
  description: 'Web oficial de Empresa logistic.',
  metadataBase: new URL('https://github.com/G-Reynaga'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container mx-auto">
            <Navbar />
            <section className="py-8">
              {children}
            </section>
            <Toaster
              position="top-right"
              richColors
            />
          <Whatsapp />
          <ButtonUp />
          <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
