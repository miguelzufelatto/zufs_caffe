"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Subscription() {
  return (
    <section id="assinaturas" className="py-32 px-6 bg-brand-primary text-bg-primary relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-16 h-[1px] bg-bg-primary/30 mx-auto mb-8"></div>
          
          <p className="text-bg-primary/70 uppercase tracking-[0.3em] text-xs mb-8 font-bold">
            Nunca Fique Sem Café
          </p>
          
          <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] tracking-tight">
            Receba café fresco em casa <br className="hidden md:block"/>
            <span className="italic opacity-90 font-light">todo mês.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-bg-primary/80 mb-14 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Junte-se ao nosso clube de assinaturas. Escolha o seu perfil de sabor, a frequência de entrega e nós cuidamos da torra artesanal sob demanda para você.
          </p>
          
          <button className="bg-bg-primary text-brand-primary px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-accent-rust hover:text-bg-primary transition-colors flex items-center gap-3 mx-auto group">
            Conhecer os Planos
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
