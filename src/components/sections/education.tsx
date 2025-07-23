"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "Standard Secondary Boarding School",
    location: "Itahari-17, Sunsari, Nepal",
    period: "2012 - 2023",
    description: "Completed my schooling from Grade 1 to 10 with excellent academic performance.",
    logo: "/images/edu/university.svg",
    alt: "Standard Secondary Boarding School Logo"
  },
  {
    id: 2,
    institution: "Sushma Godawari College",
    location: "Itahari, Sunsari, Nepal",
    period: "2024 - 2026 (Current)",
    description: "Currently in Class 12, pursuing +2 in Management with Computer Science as major subject.",
    logo: "/images/edu/Sushma.png",
    alt: "Sushma Godawari College Logo"
  }
];

const EducationCard = ({ education, index }: { education: typeof educationData[0], index: number }) => {
  const isLast = index === educationData.length - 1;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative w-full"
    >
      <div className="relative flex flex-col md:flex-row items-center gap-8 p-6">
        {/* Map Pin and Line */}
        <div className="relative flex flex-col items-center">
          {/* Map Pin */}
          <motion.div 
            className={cn(
              "w-16 h-16 rounded-full border-4 border-blue-400/80 flex items-center justify-center",
              "relative z-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm",
              "shadow-lg shadow-blue-500/20"
            )}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 relative">
              <Image
                src={education.logo}
                alt={education.alt}
                fill
                className="object-contain p-1.5"
              />
            </div>
            
            {/* Map pin tip */}
            <motion.div 
              className="absolute -bottom-4 w-1 h-4 bg-blue-400 rounded-b-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            
            {/* Location pin effect */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ 
                scale: [1, 1.5, 1.5, 1],
                opacity: [0.7, 0.4, 0],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop"
              }}
            />
          </motion.div>
          
          {/* Vertical line */}
          {!isLast && (
            <motion.div 
              className="absolute top-full w-0.5 h-16 bg-gradient-to-b from-blue-400/30 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "4rem" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          )}
        </div>
        
        {/* Card Content */}
        <motion.div 
          className={cn(
            "flex-1 p-6 rounded-xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm",
            "hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10",
            "relative overflow-hidden"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full filter blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                {education.institution}
              </h3>
              <span className="text-sm text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {education.period}
              </span>
            </div>
            
            <p className="text-zinc-400 mb-4 flex items-center gap-1.5">
              <span className="text-blue-400">📍</span> {education.location}
            </p>
            
            <p className="text-zinc-300 bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/50">
              {education.description}
            </p>
            
            <div className="absolute -bottom-3 -right-3 bg-blue-500/10 px-3 py-1 rounded-full text-xs text-blue-300 border border-blue-500/20 backdrop-blur-sm">
              {isLast ? "Current Journey" : "Edu Journey"}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const EducationSection = () => {
  return (
    <section id="education" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-3 text-sm font-medium px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Academic Journey
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-purple-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            My Education Path
          </motion.h2>
          
          <motion.p 
            className="text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Following the path of knowledge from school to higher studies
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Decorative path line */}
          <motion.div 
            className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-blue-400 to-purple-600"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
          
          <div className="space-y-12 md:space-y-16">
            {educationData.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))}
          </div>
          
          {/* End of journey marker */}
          <motion.div 
            className="flex items-center justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Journey continues...</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl -z-10" />
      
      {/* Map grid pattern */}
      <div className="absolute inset-0 -z-20 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
      </div>
    </section>
  );
};

export default EducationSection;
