"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6">
      {/* Background texture or subtle gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bg-primary via-bg-primary to-[#e8e4d8] -z-10" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        
        {/* Typographic Hero Content */}
        <div className="flex flex-col items-start z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-primary text-sm tracking-[0.2em] uppercase mb-4 font-bold"
          >
            Zuf's Caffè. É da terra, é do coração!
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] text-text-main mb-8 -ml-1"
          >
            Café especial<br/> 
            <span className="italic text-brand-primary text-6xl md:text-8xl lg:text-9xl tracking-tighter">direto do produtor</span><br/>
            para a sua xícara.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-accent-rust text-bg-primary px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-text-main transition-colors flex items-center gap-2 group border border-accent-rust">
              Explorar Cafés
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="border border-brand-primary text-brand-primary px-8 py-4 text-sm uppercase tracking-widest hover:bg-brand-primary hover:text-bg-primary transition-colors font-bold">
              Clube de Assinatura
            </button>
          </motion.div>
        </div>

        {/* Visual Layered Depth */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative h-[60vh] lg:h-[80vh] w-full mt-12 lg:mt-0"
        >
          {/* Main Image placeholder */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#cfc5ba] shadow-2xl overflow-hidden flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-text-main/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" 
              alt="Café Zuf's Caffè" 
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          
          {/* Floating Element - Coffee Beans */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-0 md:-left-12 w-40 h-48 bg-bg-primary/90 backdrop-blur-md p-6 shadow-2xl z-20 flex flex-col justify-end border border-text-main/5"
          >
            <p className="text-xs uppercase tracking-widest text-accent-green font-bold">Torra Fresca</p>
            <p className="text-xl font-serif text-text-main mt-2 leading-tight">Garantida<br/>Toda Semana</p>
            <div className="w-12 h-[1px] bg-accent-rust mt-4"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
