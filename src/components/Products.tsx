"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Catuaí Vermelho",
    roast: "Torra Média",
    notes: ["Chocolate Amargo", "Nozes", "Caramelo"],
    price: "R$ 45,00",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    name: "Bourbon Amarelo",
    roast: "Torra Clara",
    notes: ["Frutas Vermelhas", "Mel", "Floral"],
    price: "R$ 52,00",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    name: "Mundo Novo",
    roast: "Torra Média-Escura",
    notes: ["Cacau", "Melaço", "Corpo Intenso"],
    price: "R$ 42,00",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    name: "Microlote Especial",
    roast: "Torra Média-Clara",
    notes: ["Jasmim", "Pêssego", "Acidez Cítrica"],
    price: "R$ 65,00",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=500"
  }
];

export default function Products() {
  return (
    <section id="cafes-especiais" className="py-32 px-6 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-text-main/10 pb-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-text-main leading-tight tracking-tight">Nossos Microlotes</h2>
            <p className="text-text-main/70 mt-4 max-w-lg text-lg">Grãos selecionados a dedo nas melhores safras, torrados artesanalmente para extrair o máximo potencial de cada origem.</p>
          </div>
          <a href="#" className="uppercase tracking-widest text-xs font-bold text-accent-rust hover:text-text-main transition-colors mt-6 md:mt-0 flex items-center gap-2">
            Ver todos os cafés <span className="text-lg">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-bg-primary flex items-center justify-center">
                <div className="absolute inset-0 bg-text-main/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-[85%] h-[85%] object-cover object-center group-hover:scale-105 transition-transform duration-700 shadow-md" 
                />
                
                {/* Add to cart overlay button */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 z-20 ease-[0.22,1,0.36,1]">
                  <button className="w-full bg-accent-rust text-bg-primary py-4 text-sm font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-text-main transition-colors shadow-xl">
                    <Plus className="w-4 h-4" /> Adicionar
                  </button>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-text-main">{product.name}</h3>
                  <span className="font-sans font-bold text-text-main mt-1">{product.price}</span>
                </div>
                
                <p className="text-sm uppercase tracking-widest text-text-main/50 mb-6 font-bold">{product.roast}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {product.notes.map(note => (
                    <span key={note} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 bg-accent-green/10 text-accent-green">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
