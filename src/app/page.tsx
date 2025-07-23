"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import Story from "@/components/sections/Story";
import { EventGallery } from "@/components/sections/EventGallery";
import { EducationSection } from "@/components/sections/education";

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <AboutSection />
          <Story />
          <EventGallery />
          <EducationSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
