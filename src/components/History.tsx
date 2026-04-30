"use client";

import { motion } from "framer-motion";

export default function History() {
  return (
    <section id="nossa-historia" className="py-32 px-6 bg-bg-primary overflow-hidden border-t border-text-main/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-center">

          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-brand-primary text-sm tracking-[0.2em] uppercase mb-6 font-bold">Nossa Origem</p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-main mb-10 leading-[1] tracking-tighter">
                Um legado <br />
                <span className="text-brand-primary italic">cultivado na terra.</span>
              </h2>

              <div className="space-y-6 text-lg text-text-main/80 font-sans max-w-xl">
                <p className="leading-relaxed">
                  Não somos apenas uma torrefação. Somos a ponte entre o suor do produtor e o seu momento de pausa. O <strong>Zuf's Caffè</strong> nasceu da crença de que cada grão carrega a história de quem o plantou.
                </p>
                <p className="leading-relaxed">
                  Viajamos pelas montanhas mais férteis para encontrar microlotes que respeitam o tempo da natureza. A nossa torra artesanal é apenas a tradução dessa jornada. Porque no final, não é só café.
                </p>
                <p className="text-accent-rust font-serif text-3xl mt-12 italic border-l-2 border-accent-rust pl-6 py-2">
                  "É da terra, é do coração!"
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-auto lg:h-[800px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* An asymmetric image placement */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800"
                alt="Produtor de café"
                className="w-full h-full object-cover filter sepia-[0.2] transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Floating decorative element */}
            <div className="absolute top-[10%] -left-[10%] w-48 h-48 bg-accent-green/5 border border-accent-green/20 backdrop-blur-sm -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
