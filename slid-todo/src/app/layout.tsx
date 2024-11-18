import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/react-query";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-pretendard font-medium antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}