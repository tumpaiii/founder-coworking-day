"use client";

import { cn } from "@/lib/utils";
import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Sponsors from "./sponsors";
import ValueSection from "./value";
import Audience from "./audience";
import Agenda from "./agenda";
import Venue from "./venue";
import Hosts from "./hosts";
import Pricing from "./pricing";
import FAQ from "./faq";
import Footer from "./footer";
import ScrollReveals from "./scroll-reveals";

interface AllComponentsProps { className?: string; }

// Each section lives in its own file; order matches the uploaded website.
export default function AllComponents({ className }: AllComponentsProps) {
 return <div className={cn("website-root", className)}>
   <div className="announcement">A SPACE TO THINK, BUILD & CONNECT</div>
   <Navbar />
   <main><Hero /><About /><Sponsors /><ValueSection /><Audience /><Agenda /><Venue /><Hosts /><Pricing /><FAQ /></main>
   <Footer />
   <ScrollReveals />
 </div>;
}
