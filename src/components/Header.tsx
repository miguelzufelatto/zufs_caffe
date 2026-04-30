"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Cafés Especiais", "Assinaturas", "Nossa História", "Contato"];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled || mobileMenuOpen ? "bg-bg-primary/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-text-main tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
            Zuf's Caffè.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-").replace(/[áàãâä]/g, "a").replace(/[éèẽêë]/g, "e").replace(/[íìĩîï]/g, "i").replace(/[óòõôö]/g, "o").replace(/[úùũûü]/g, "u")}`}
                className="text-sm uppercase tracking-widest text-text-main/80 hover:text-accent-rust transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Icons & Mobile Toggle */}
          <div className="flex items-center gap-4 md:gap-6 text-text-main">
            <button aria-label="Buscar" className="hover:text-accent-rust transition-colors cursor-pointer hidden sm:block">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button aria-label="Usuário" className="hover:text-accent-rust transition-colors cursor-pointer hidden sm:block">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button aria-label="Sacola" className="hover:text-accent-rust transition-colors relative cursor-pointer">
              <ShoppingBag className="w-5 h-5 md:w-5 md:h-5" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 bg-accent-rust text-bg-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
            
            <button 
              aria-label="Menu" 
              className="md:hidden hover:text-accent-rust transition-colors cursor-pointer ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-").replace(/[áàãâä]/g, "a").replace(/[éèẽêë]/g, "e").replace(/[íìĩîï]/g, "i").replace(/[óòõôö]/g, "o").replace(/[úùũûü]/g, "u")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-text-main hover:text-accent-rust transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="mt-auto mb-12 flex gap-6 border-t border-text-main/10 pt-8">
              <button className="flex flex-col items-center gap-2 text-text-main hover:text-accent-rust transition-colors">
                <Search className="w-6 h-6" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-widest font-bold">Buscar</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-text-main hover:text-accent-rust transition-colors">
                <User className="w-6 h-6" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-widest font-bold">Conta</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
