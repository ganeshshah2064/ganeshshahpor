'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'VIBE ICT Workshop',
    description: 'Organized a coding workshop at Sushma Godawari for 150+ students, teaching ICT and coding fundamentals while providing certificates to participants.',
    images: ['/vibe/1.png'],
    date: '2023',
    tags: ['Workshop', 'Education', '150+ Students']
  },
  {
    id: 2,
    title: '3D Godawari Game Project',
    description: 'Developed a 3D game of Sushma Godawari using Unity and C#, showcasing our technical skills and creativity during the AI Bootcamp.',
    images: ['/godawari3d/4.PNG', '/godawari3d/6.png'],
    date: '2023',
    tags: ['Game Development', 'Unity', '3D Modeling']
  },
  {
    id: 3,
    title: 'Free Fire Esports Tournament',
    description: 'Organized and managed a professional esports tournament with prize distribution, utilizing the latest technology for smooth gameplay and streaming.',
    images: ['/freefire/2.PNG', '/freefire/3.PNG', '/freefire/7.png'],
    date: '2023',
    tags: ['Esports', 'Gaming', 'Tournament']
  }
];

const ImageModal = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="object-contain max-h-[80vh] w-full"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

const EventCard = ({ event, index }: { event: typeof events[0], index: number }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <motion.div 
      className="relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(event.images[0])}>
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{event.title}</h3>
          <p className="text-sm text-gray-300">{event.date}</p>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-300 mb-4">{event.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {event.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {event.images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {event.images.map((img, i) => (
              <div 
                key={i} 
                className="relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-white/10 cursor-pointer hover:border-blue-400/50 transition-colors"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`${event.title} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
        
        <AnimatePresence>
          {selectedImage && (
            <ImageModal 
              src={selectedImage} 
              alt={event.title} 
              onClose={() => setSelectedImage(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const EventGallery = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Our Events & Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Showcasing our journey through impactful events and innovative projects that shaped our experience.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EventGallery;
