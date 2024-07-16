import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Jobs",
  description: "Find the best developer jobs in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
