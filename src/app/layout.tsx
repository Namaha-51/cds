import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/customcursor";

export const metadata: Metadata = {
  title: "CDS Appliance Services | Melbourne's Premium HVAC & Appliance Specialists",
  description: "Manufacturer authorised technical precision for residential and commercial heating, cooling, and high-end appliances across Melbourne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#0D2B52]">
        {/* Custom Engineering Reticle Cursor */}
        <CustomCursor />

        {/* Main Application Flow */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}