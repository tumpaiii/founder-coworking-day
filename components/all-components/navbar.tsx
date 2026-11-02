"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps { className?: string; }

export default function Navbar({ className }: SectionProps) { const [open,setOpen]=useState(false); return <div className={cn(className)}><header className="nav"><a href="#home" className="brand"><span className="founderspace-logo" aria-hidden="true"><svg viewBox="0 0 48 48" width="36" height="36" fill="none"><path d="M8 38V15l16-8 16 8v23" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><path d="M17 38V25h14v13M15 18h5m8 0h5" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/><path d="M5 40h38" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg></span><span className="founderspace-wordmark">founder<span>space</span></span></a><nav className={open?'navlinks open':'navlinks'}><a href="#about" onClick={()=>setOpen(false)}>The idea</a><a href="#value" onClick={()=>setOpen(false)}>Why join</a><a href="#audience" onClick={()=>setOpen(false)}>Audience</a><a href="#agenda" onClick={()=>setOpen(false)}>Agenda</a><a href="#venue" onClick={()=>setOpen(false)}>Venue</a><a href="#hosts" onClick={()=>setOpen(false)}>Hosts</a></nav><a href="#pricing" className="nav-cta">Join the day <ArrowUpRight size={15}/></a><button className="menu" onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></header></div>; }
