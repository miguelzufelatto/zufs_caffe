"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, User, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-bg-primary/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-text-main tracking-tighter">
          Zuf's Caffè.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {["Cafés Especiais", "Assinaturas", "Nossa História", "Contato"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-").replace(/[áàãâä]/g, "a").replace(/[éèẽêë]/g, "e").replace(/[íìĩîï]/g, "i").replace(/[óòõôö]/g, "o").replace(/[úùũûü]/g, "u")}`}
              className="text-sm uppercase tracking-widest text-text-main/80 hover:text-accent-rust transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-text-main">
          <button aria-label="Buscar" className="hover:text-accent-rust transition-colors cursor-pointer">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button aria-label="Usuário" className="hover:text-accent-rust transition-colors cursor-pointer">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button aria-label="Sacola" className="hover:text-accent-rust transition-colors relative cursor-pointer">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute -top-1 -right-2 bg-accent-rust text-bg-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
