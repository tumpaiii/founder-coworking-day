"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, MapPin, Wifi, Accessibility, Plug, Users, Coffee, Clock, Instagram, Linkedin, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";
const photo=(id:string,w=1100)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

interface SectionProps { className?: string; }

const hosts=[
 {name:'Alex Morgan',role:'Event host',company:'Founder Coworking Day',img:'220453'},
 {name:'Maya Bennett',role:'Community lead',company:'Founder Coworking Day',img:'774909'},
 {name:'Daniel Brooks',role:'Programme coordinator',company:'Founder Coworking Day',img:'614810'},
 {name:'Sofia Ellis',role:'Experience lead',company:'Founder Coworking Day',img:'415829'},
];
export default function Hosts({ className }: SectionProps){return <section className={cn("hosts-section", className)} id="hosts"><div className="hosts-top"><div><span>[ 07 / THE PEOPLE ]</span><h2>Meet the minds.</h2><p>The people bringing Founder Coworking Day together.</p></div><span className="hosts-top-right">[ THE HOSTS ]</span></div><div className="hosts-grid">{hosts.map((h,i)=><div className={'host-column '+(i%2?'host-reverse':'')} key={h.name}><div className="host-photo"><img src={photo(h.img,700)} alt={'Illustrative portrait for '+h.role} loading="lazy"/></div><div className="host-info"><span>[ {h.role.toUpperCase()} ]</span><div><h3>{h.name}</h3><p>{h.role}<br/>{h.company}</p><div className="host-social"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label={'LinkedIn placeholder for '+h.name}><Linkedin size={16}/></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label={'Instagram placeholder for '+h.name}><Instagram size={16}/></a></div></div></div></div>)}</div><p className="hosts-note">Preview profiles only — names, portraits, affiliations, and social links must be replaced with confirmed host information before launch.</p></section>}
