import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grupont.pt"),
  title: {
    default: "Abrasivos NT | Abrasivos técnicos para pedra",
    template: "%s | Abrasivos NT"
  },
  description:
    "Abrasivos técnicos para mármore, granito e acabamento de pedra. Catálogo comercial B2B com leitura clara, foco profissional e pedido de orçamento simples.",
  keywords: [
    "abrasivos para pedra",
    "abrasivos para mármore",
    "abrasivos para granito",
    "frankfurt plus",
    "fickert",
    "mó 125 mm"
  ],
  openGraph: {
    title: "Abrasivos NT | Abrasivos técnicos para pedra",
    description:
      "Marca especializada em abrasivos para pedra com apresentação técnica, catálogo profissional e contacto comercial direto.",
    type: "website",
    locale: "pt_PT"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}