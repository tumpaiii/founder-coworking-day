"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps { className?: string; }

export default function Sponsors({ className }: SectionProps){const partners=['YOUR BRAND','COMMUNITY PARTNER','YOUR BRAND','EVENT PARTNER','YOUR BRAND','COMMUNITY PARTNER'];return <section className={cn("sponsors", className)} id="supporters" aria-label="Partner logo concept"><div className="sponsor-dark"><span>THE PEOPLE BEHIND THE DAY</span><h2>Better<br/><em>together.</em></h2><p>Space for the partners who help bring the founder community together.</p></div><div className="sponsor-photo" role="img" aria-label="Coworkers collaborating in a meeting room"/><div className="sponsor-marquee"><div className="sponsor-track">{[...partners,...partners].map((name,i)=><div className="sponsor-card" key={i}><span className="sponsor-symbol">✳</span><span className="sponsor-divider"/><span className="sponsor-name">{name}</span></div>)}</div></div><span className="sponsor-placeholder-note">PARTNER LOGOS ARE PLACEHOLDERS UNTIL CONFIRMED</span></section>}

