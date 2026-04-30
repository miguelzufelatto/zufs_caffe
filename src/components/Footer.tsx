"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-text-main text-bg-primary pt-24 pb-8 px-6 border-t-[8px] border-accent-rust">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-16 lg:gap-8 mb-20">

          <div className="lg:pr-12">
            <h3 className="text-4xl font-serif mb-6 tracking-tighter">Zuf's Caffè.</h3>
            <p className="text-bg-primary/60 text-sm mb-8 leading-relaxed max-w-sm">
              É da terra, é do coração. Elevando a sua experiência diária com café especial, conectando você diretamente às melhores fazendas produtoras do Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-bg-primary/20 flex items-center justify-center hover:bg-bg-primary hover:text-text-main transition-colors group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 border border-bg-primary/20 flex items-center justify-center hover:bg-bg-primary hover:text-text-main transition-colors group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 border border-bg-primary/20 flex items-center justify-center hover:bg-bg-primary hover:text-text-main transition-colors group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold text-bg-primary/40 mb-8">Navegação</h4>
            <ul className="space-y-5 text-sm text-bg-primary/90">
              <li><Link href="#cafes-especiais" className="hover:text-accent-rust hover:translate-x-1 inline-block transition-all">Cafés Especiais</Link></li>
              <li><Link href="#assinaturas" className="hover:text-accent-rust hover:translate-x-1 inline-block transition-all">Assinaturas</Link></li>
              <li><Link href="#nossa-historia" className="hover:text-accent-rust hover:translate-x-1 inline-block transition-all">Nossa História</Link></li>
              <li><Link href="#contato" className="hover:text-accent-rust hover:translate-x-1 inline-block transition-all">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold text-bg-primary/40 mb-8">Suporte</h4>
            <ul className="space-y-5 text-sm text-bg-primary/90">
              <li><Link href="#" className="hover:text-accent-rust hover:translate-x-1 inline-block transition-all">Trocas e Devoluções</Link></li>
              <li><Link href="#" className="hover:text-accent-rust hover:translate-x-1 inline-block transition-all">Política de Frete</Link></li>
              <li><Link href="#" className="hover:text-accent-rust hover:translate-x-1 inline-block transition-all">Perguntas Frequentes</Link></li>
              <li><Link href="#" className="hover:text-accent-rust hover:translate-x-1 inline-block transition-all">Termos e Condições</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold text-bg-primary/40 mb-8">Newsletter</h4>
            <p className="text-sm text-bg-primary/70 mb-6 leading-relaxed">
              Receba novidades e acesso antecipado a microlotes exclusivos.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-transparent border border-bg-primary/20 border-r-0 px-4 py-4 w-full text-sm focus:outline-none focus:border-accent-rust focus:bg-bg-primary/5 transition-colors placeholder:text-bg-primary/30"
              />
              <button type="submit" className="bg-accent-rust text-bg-primary px-6 py-4 hover:bg-bg-primary hover:text-accent-rust transition-colors border border-accent-rust flex items-center justify-center group cursor-pointer">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-bg-primary/10 pt-8 flex justify-center items-center text-xs text-bg-primary/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Zuf's Caffè. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
