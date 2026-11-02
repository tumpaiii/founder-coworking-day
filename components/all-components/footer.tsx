"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, MapPin, Wifi, Accessibility, Plug, Users, Coffee, Clock, Instagram, Linkedin, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";
const photo=(id:string,w=1100)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

interface SectionProps { className?: string; }

export default function Footer({ className }: SectionProps){return <footer className={cn("site-footer", className)}><div className="footer-top"><a className="footer-logo" href="#home"><span className="founderspace-logo" aria-hidden="true"><svg viewBox="0 0 48 48" width="36" height="36" fill="none"><path d="M8 38V15l16-8 16 8v23" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><path d="M17 38V25h14v13M15 18h5m8 0h5" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/><path d="M5 40h38" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg></span><span className="founderspace-wordmark">founder<span>space</span></span><small>FOUNDER COWORKING DAY</small></a><div><a href="#about">THE IDEA</a><a href="#value">WHY JOIN</a><a href="#audience">WHO IT'S FOR</a></div><div><a href="#agenda">AGENDA</a><a href="#venue">VENUE</a><a href="#hosts">HOSTS</a></div><div><a href="#pricing">REGISTRATION</a><a href="#faq">FAQS</a><a href="#home">BACK TO TOP ↑</a></div></div><div className="footer-bottom"><div className="footer-social"><a href="https://www.linkedin.com/" aria-label="LinkedIn placeholder" target="_blank" rel="noreferrer"><Linkedin size={18}/></a><a href="https://www.instagram.com/" aria-label="Instagram placeholder" target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href="mailto:hello@example.com" aria-label="Email placeholder"><Mail size={18}/></a></div><span>© 2026 FOUNDERSPACE — FOUNDER COWORKING DAY. ALL RIGHTS RESERVED.</span></div></footer>}
