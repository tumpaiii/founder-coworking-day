"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
interface SectionProps { className?: string; }
export default function ScrollReveals({ className }: SectionProps) {
 useEffect(()=>{
   if(typeof window==='undefined'||!('IntersectionObserver' in window))return;
   const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   if(reduce)return;
   const specs:[string,string,string][]=[
     ['.about-heading','slide-up',''],
     ['.marquee-grid','soft-wipe',''],
     ['.sponsor-dark h2','slide-left',''],
     ['.value-intro','slide-up',''],
     ['.value-layout','soft-wipe',''],
     ['.audience-section h2','slide-up',''],
     ['.agenda-head','slide-up',''],
     ['.agenda-row','alternate','stagger'],
     ['.venue-intro','slide-left',''],
     ['.venue-art','soft-wipe',''],
     ['.hosts-top','slide-up',''],
     ['.host-column','tilt','stagger'],
     ['.pricing-kicker','slide-up',''],
     ['.pricing-card','slide-up','stagger'],
     ['.faq-shell','soft-wipe',''],
     ['.footer-top','slide-up',''],
   ];
   const targets:HTMLElement[]=[];
   specs.forEach(([selector,kind,mode])=>{
     document.querySelectorAll<HTMLElement>(selector).forEach((el,i)=>{
       el.dataset.reveal=kind==='alternate'?(i%2?'slide-right':'slide-left'):kind;
       if(mode==='stagger')el.style.setProperty('--reveal-delay',`${Math.min(i,5)*95}ms`);
       targets.push(el);
     });
   });
   const observer=new IntersectionObserver(entries=>{
     entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}});
   },{threshold:0.08,rootMargin:'0px 0px -24px 0px'});
   // Wait a frame before enabling transitions, avoiding invisible content on initial paint.
   const frame=requestAnimationFrame(()=>{targets.forEach(el=>{el.classList.add('reveal-ready');observer.observe(el)})});
   return()=>{cancelAnimationFrame(frame);observer.disconnect();targets.forEach(el=>{el.classList.remove('reveal-ready','revealed');el.style.removeProperty('--reveal-delay');delete el.dataset.reveal})};
 },[]);
 return <div className={cn("hidden",className)} aria-hidden="true" />;
}

