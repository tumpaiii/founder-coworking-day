"use client";

import React, { useState, useEffect } from "react";
import { Minus, Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps { className?: string; }

const values = [
 {number:'01',title:'Focused work',detail:'Set aside the noise, settle into your flow, and give the work that matters your full attention. Bring the project you want to move forward.',tag:'MAKE REAL PROGRESS',image:'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1300'},
 {number:'02',title:'Meaningful connections',detail:'Meet other people building something of their own. Good conversations happen naturally when you share a table and a common ambition.',tag:'FIND YOUR PEOPLE',image:'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1300'},
 {number:'03',title:'Peer feedback',detail:'Talk through an idea, get another perspective, or help someone solve a problem. Sometimes one conversation changes the direction of your day.',tag:'THINK OUT LOUD',image:'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1300'},
 {number:'04',title:'A change of environment',detail:'Leave the usual desk behind. A new space, fresh energy, and a room full of makers can help you see your next step more clearly.',tag:'A FRESH PERSPECTIVE',image:'https://images.pexels.com/photos/7656748/pexels-photo-7656748.jpeg?auto=compress&cs=tinysrgb&w=1300'},
];
export default function ValueSection({ className }: SectionProps){
 const [active,setActive]=useState(0);
 return <section className={cn("value-section", className)} id="value" aria-labelledby="value-heading">
   <div className="value-intro"><div className="value-eyebrow"><span className="value-dot"/> 03 / THE VALUE</div><div className="value-intro-grid"><h2 id="value-heading">Why <em>join us?</em></h2><p>More than a seat at a desk. A day designed to help you make progress, exchange ideas, and enjoy building alongside others.</p></div></div>
   <div className="value-layout"><div className="value-list" role="group" aria-label="Reasons to join Founder Coworking Day">
    {values.map((item,i)=><div className={'value-item '+(active===i?'is-active':'')} key={item.number}>
      <button className="value-trigger" type="button" aria-expanded={active===i} aria-controls={'value-detail-'+i} onClick={()=>setActive(i)}>
        <span className="value-num">{item.number}</span><span className="value-title">{item.title}</span><span className="value-icon" aria-hidden="true">{active===i?<Minus size={19}/>:<Plus size={19}/>}</span>
      </button>
      <div id={'value-detail-'+i} className="value-detail-outer" aria-hidden={active!==i}><div className="value-detail-inner"><p>{item.detail}</p><span className="value-small-tag">{item.tag} <ArrowRight size={14}/></span></div></div>
    </div>)}
   </div><div className="value-visual" aria-live="polite">
    {values.map((item,i)=><img key={item.number} src={item.image} alt={active===i?item.title+' at Founder Coworking Day':''} className={'value-image '+(active===i?'show':'')} loading="lazy" />)}
    <div className="value-image-overlay"><span>THE FOUNDER EXPERIENCE</span><span className="value-image-index">{values[active].number} <span>/ 04</span></span></div>
    <div className="value-image-caption">{values[active].tag}</div>
   </div></div>
 </section>
}

