"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, MapPin, Wifi, Accessibility, Plug, Users, Coffee, Clock, Instagram, Linkedin, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";
const photo=(id:string,w=1100)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

interface SectionProps { className?: string; }

const audience=[
 {title:'Solo founders',desc:'Bring the project you’re building and find your focus among people who understand the journey.',img:'3184465'},
 {title:'Startup teams',desc:'Step away from the usual office, work side by side, and discover a fresh way to collaborate.',img:'3184291'},
 {title:'Indie hackers',desc:'Build, ship, and swap ideas with makers who love turning small experiments into real products.',img:'3861969'},
 {title:'Entrepreneurs',desc:'Meet ambitious people across industries and turn spontaneous conversations into useful connections.',img:'3184360'},
 {title:'Product builders',desc:'Make space to prototype, test ideas, and gather thoughtful feedback on what comes next.',img:'1181676'},
];
export default function Audience({ className }: SectionProps){const [active,setActive]=useState(0);return <section className={cn("audience-section", className)} id="audience"><div className="section-rule"><span>04 / AUDIENCE</span><span>WHO BELONGS IN THE ROOM</span></div><div className="audience-heading"><div><span className="small-label">THE PEOPLE</span><h2>Built for people<br/>who <em>build.</em></h2></div><p>Whether you’re working solo or alongside a team, there’s room for you at the table.</p></div><div className="audience-cards">{audience.map((a,i)=><button key={a.title} className={'audience-card '+(active===i?'active':'')} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} aria-pressed={active===i}><span className="audience-count">0{i+1} / 05</span><div className="audience-card-body"><h3>{a.title}</h3><p>{a.desc}</p><span className="audience-more">DISCOVER <ArrowUpRight size={15}/></span></div><img src={photo(a.img,700)} alt={a.title+' working together'} loading="lazy"/><span className="audience-arrow"><ArrowUpRight size={18}/></span></button>)}</div></section>}
