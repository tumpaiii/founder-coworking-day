"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, MapPin, Wifi, Accessibility, Plug, Users, Coffee, Clock, Instagram, Linkedin, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";
const photo=(id:string,w=1100)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

interface SectionProps { className?: string; }

const agenda=[
 {time:'09:00',tag:'ARRIVAL',title:'Arrive & settle in',desc:'Check in, grab a coffee, and find your spot.',img:'3184423'},
 {time:'09:30',tag:'DEEP WORK',title:'Focused coworking',desc:'A quiet block to make meaningful progress.',img:'3184291'},
 {time:'11:30',tag:'PAUSE',title:'Coffee & conversations',desc:'Refuel and meet the people around you.',img:'3184360'},
 {time:'13:00',tag:'TOGETHER',title:'Lunch break',desc:'Step away from your screen and share a meal.',img:'3184183'},
 {time:'14:00',tag:'EXCHANGE',title:'Peer conversations',desc:'Talk through ideas and exchange feedback.',img:'3184338'},
 {time:'16:00',tag:'CLOSING',title:'Wrap-up & next steps',desc:'Leave with fresh perspectives and new connections.',img:'3184465'},
];
export default function Agenda({ className }: SectionProps){return <section className={cn("agenda-section", className)} id="agenda"><div className="agenda-content"><div className="agenda-top"><span>05 / THE EXPERIENCE</span><span>FOUNDER COWORKING DAY</span></div><div className="agenda-head"><h2>A day to<br/><i>make progress.</i></h2><div className="agenda-head-right">A LITTLE STRUCTURE.<br/>A LOT OF ROOM TO BUILD.</div></div><div className="agenda-lines">{agenda.map((a,i)=><div className="agenda-row" key={a.time}><div className="agenda-photo" style={{marginLeft:`${i%2===0?0:26}px`}}><img src={photo(a.img,700)} alt={a.title} loading="lazy"/></div><div className="agenda-ticket agenda-ticket-integrated"><div className="agenda-time"><strong>{a.time}</strong><span>{a.tag}</span></div><div className="agenda-event"><h3>{a.title}</h3><p>{a.desc}</p></div></div></div>)}</div><div className="agenda-bottom"><span>SHOW UP. SETTLE IN. GET THINGS DONE.</span><span>*Times are illustrative until the event schedule is confirmed.</span></div></div></section>}
