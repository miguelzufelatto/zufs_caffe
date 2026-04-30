import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zuf's Caffè | Café Especial Direto do Produtor",
  description: "Zuf's Caffè. É da terra, é do coração! Café especial direto do produtor para a sua xícara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
