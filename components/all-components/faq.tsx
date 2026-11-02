"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, MapPin, Wifi, Accessibility, Plug, Users, Coffee, Clock, Instagram, Linkedin, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";
const photo=(id:string,w=1100)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

interface SectionProps { className?: string; }

const faqs=[
 ['Who can attend?','Solo founders, startup teams, indie hackers, entrepreneurs, and anyone actively building a new product are welcome.'],
 ['Do I need to bring anything?','Bring your laptop, charger, and the project you want to work on. We’ll share any venue-specific details before the event.'],
 ['Will there be time for focused work?','Yes. The programme includes dedicated coworking blocks alongside optional breaks and peer conversations.'],
 ['Is food or coffee included?','Coffee and lunch arrangements will be confirmed when ticket details and the venue are finalized.'],
 ['Where will the event take place?','The workspace and full address will be announced once the venue is confirmed.'],
 ['How do I register?','Use the registration preview above to explore the experience. The final booking system will be connected before launch.'],
];
export default function FAQ({ className }: SectionProps){const [active,setActive]=useState(1);return <section className={cn("faq-section", className)} id="faq"><div className="faq-shell"><div className="faq-pill">09 / FAQS</div><h2>Common Questions</h2><div className="faq-list">{faqs.map(([q,a],i)=><div className={'faq-item '+(active===i?'expanded':'')} key={q} onMouseEnter={()=>setActive(i)}><button aria-expanded={active===i} onClick={()=>setActive(active===i?-1:i)}><span className="faq-index">{String(i+1).padStart(2,'0')}</span><strong>{q}</strong><span className="faq-toggle">{active===i?<X size={16}/>:<Plus size={16}/>}</span></button><div className="faq-answer"><div><p>{a}</p></div></div></div>)}</div><div className="faq-bottom">Still have a question? <a href="mailto:hello@example.com?subject=Founder%20Coworking%20Day%20Question">Contact the organizer <ArrowUpRight size={13}/></a><small>Replace the example email with the official contact address before launch.</small></div></div></section>}
