import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/top-nav";

export const metadata: Metadata = {
  title: "Risk Monitor Dashboard",
  description: "Global macro and geopolitical risk intelligence platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <TopNav />
        <main className="mx-auto min-h-screen max-w-[1600px] px-4 pb-12 pt-6 md:px-8">{children}</main>
      </body>
    </html>
  );
}
