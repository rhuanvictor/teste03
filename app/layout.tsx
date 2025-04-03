import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { ThemeProvider } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar/navbar";
//import Link from "next/link";
/*
Definição única para evitar recriações
const FOOTER_LINK = Object.freeze({
  href: "https://easyui.pro",
  target: "_blank",
  rel: "noopener noreferrer",
  className: "flex items-center gap-1 text-current",
  title: "easyui.pro homepage"
});
*/
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
};

// Definição da classe do body fora da função para evitar reavaliações desnecessárias
const bodyClass = clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable);

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={bodyClass}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex flex-col min-h-screen w-full">
            {/* Navbar sem memoização desnecessária */}
            <Navbar shouldHideOnScroll />
            
            <main className="container mx-auto pt-16 px-6 flex-grow max-w-[1324px]">
              {children}
            </main>

            {/* Footer simples sem memoização desnecessária */}
            <footer className="w-full flex items-center justify-center py-3">
              {/* <Link {...FOOTER_LINK}>*/}
                <span className="text-default-600">© 2024 Vicko Soluções S.A.</span>
                
             {/* </Link>*/}
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}