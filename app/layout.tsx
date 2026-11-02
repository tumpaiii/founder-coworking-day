import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Founderspace — Founder Coworking Day", description: "A space to think, build and connect." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body>{children}</body></html>;
}
