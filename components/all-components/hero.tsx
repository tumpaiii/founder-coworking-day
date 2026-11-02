"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps { className?: string; }

export default function Hero({ className }: SectionProps) { return <div className={cn(className)}><section className="hero ox-hero" id="home">
<video className="ox-video" autoPlay muted loop playsInline preload="metadata" poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600">
<source src="https://videos.pexels.com/video-files/3256543/3256543-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
</video>
<div className="ox-tint" aria-hidden="true"/>

<div className="ox-contact"><a href="#pricing"><span className="ox-contact-icon">↗</span> SAVE YOUR SEAT <ArrowUpRight size={16}/></a><span>FOUNDER COWORKING DAY <b>⊕</b></span></div>
<div className="ox-left"><p>One room.<br/>New perspectives.<br/>Real progress.</p><a href="#pricing">RESERVE YOUR SPOT <ArrowUpRight size={16}/></a></div>
<div className="ox-meta">21 NOVEMBER 2026 <span className="ox-ticks">│││││││││</span> ONE DAY</div>
<div className="ox-title">TOGETHER<span className="ox-title-dot">.</span></div>
<div className="ox-right">FOCUSED COWORKING<br/>FOUNDER CONNECTIONS<br/>PEER FEEDBACK<br/>FRESH PERSPECTIVES</div>
<div className="ox-bottom"><span>FOUNDER COWORKING DAY / 2026</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
</section></div>; }
