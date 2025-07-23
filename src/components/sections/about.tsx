"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, MessageSquare, Zap } from "lucide-react";

const skills = [
  { name: "JavaScript/TypeScript", icon: <Code className="w-5 h-5" /> },
  { name: "React/Next.js", icon: <Cpu className="w-5 h-5" /> },
  { name: "Node.js", icon: <Code className="w-5 h-5" /> },
  { name: "Unity (C#)", icon: <Cpu className="w-5 h-5" /> },
  { name: "n8n Automation", icon: <Zap className="w-5 h-5" /> },
  { name: "AI Chatbots", icon: <MessageSquare className="w-5 h-5" /> },
];

const projects = [
  { name: "Godawari 3D Game", type: "3D Game Development" },
  { name: "FoodScan POS System", type: "Web Application" },
  { name: "WhatsApp/Telegram Bots", type: "AI Automation" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 overflow-hidden bg-gradient-to-b from-background via-background/90 to-muted/5">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            About Me
          </h2>
        </motion.div>

        <div className="relative bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 shadow-lg">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-xl opacity-50 -z-10"></div>
          
          <div className="relative space-y-4">
            <motion.p 
              className="text-muted-foreground text-sm leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-medium text-foreground">Hi, I'm Ganesh</span> — a passionate tech enthusiast from Nepal who loves turning ideas into impactful digital experiences. I specialize in 3D games, immersive websites, and automation through code and design.
            </motion.p>

            <div className="flex flex-wrap gap-2 my-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-center gap-1.5 text-xs bg-muted/40 hover:bg-muted/60 transition-colors px-3 py-1.5 rounded-full border border-border/30"
                >
                  <span className="text-blue-400">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-muted-foreground text-sm"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I've built projects like <span className="text-foreground font-medium">Godawari 3D Game</span>, <span className="text-foreground font-medium">FoodScan POS System</span>, and custom AI chatbots. Beyond coding, I lead tech initiatives through workshops and events, always eager to learn and share knowledge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2 text-center"
            >
              <Button className="group text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-sm hover:shadow-blue-500/20 transition-all">
                Let's Connect
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
