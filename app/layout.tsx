// /app/layout.tsx
import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";//ChakraUI、ChakraProviderインポート
//import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";

export const metadata: Metadata = {
  title: "学習記録アプリ with Firebase",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*ChakuraUI追加 */}
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
