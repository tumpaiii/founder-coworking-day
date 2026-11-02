"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps { className?: string; }

const ids=['3184291','3184360','1181396','7656748','3183197','3769021','7433836'];
const photos=[...ids.map(id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`),'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85'];
function Carousel(){const [angle,setAngle]=useState(0);const [paused,setPaused]=useState(false);useEffect(()=>{if(paused)return;const i=window.setInterval(()=>setAngle(v=>v+1),35);return()=>clearInterval(i)},[paused]);return <div className="carousel-area" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}><div className="carousel-scene"><div className="carousel-ring" style={{transform:`rotateY(${angle}deg)`}}>{photos.map((p,i)=><div className="carousel-card" key={p} style={{transform:`rotateY(${i*360/photos.length}deg) translateZ(var(--depth))`}}><img src={p} alt={`Founders and collaborative workspaces ${i+1}`} loading={i<3?'eager':'lazy'}/></div>)}</div></div><div className="glow-bar" aria-hidden="true"/><div className="carousel-controls"><button aria-label="Rotate carousel left" onClick={()=>setAngle(v=>v-45)}>←</button><span>EXPLORE THE SPACE</span><button aria-label="Rotate carousel right" onClick={()=>setAngle(v=>v+45)}>→</button></div></div>}
function Marquee({reverse=false,offset=0}:{reverse?:boolean,offset?:number}){const row=[...photos.slice(offset,offset+4),...photos.slice(offset,offset+4)];return <div className="marquee-window"><div className={`marquee-track ${reverse?'reverse':''}`}>{row.map((p,i)=><div className="marquee-tile" key={`${p}-${i}`}><img src={p} alt="Founders collaborating in coworking spaces" loading="lazy"/></div>)}</div></div>}


export default function About({ className }: SectionProps) { return <div className={cn(className)}><section className="about" id="about"><div className="about-heading"><span className="eyebrow"><span className="dot"/> THE IDEA BEHIND THE DAY</span><h2>Some of the best work happens <em>around other people.</em></h2><p>Bring your laptop, your big ideas, and whatever you're building. Spend the day doing focused work, meeting other founders, and finding fresh perspective in a room that gets it.</p><a className="about-link" href="#community">Be part of the day <ArrowUpRight size={18}/></a></div><div className="marquee-grid" id="community"><Marquee/><Marquee reverse offset={4}/><Marquee offset={2}/></div><div className="about-foot"><span>01 / SHOW UP</span><span>02 / GET THINGS DONE</span><span>03 / LEAVE INSPIRED</span></div></section></div>; }
