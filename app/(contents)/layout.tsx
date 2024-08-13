import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MenuBar from "../components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-100 text-black max-w-screen-sm mx-auto`}
      >
        <div className="flex flex-col items-center">
          {children}
          <MenuBar />
        </div>
      </body>
    </html>
  );
}