import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CTAFinalProps {
  onNavigate: (section: string) => void;
}

export function CTAFinal({ onNavigate }: CTAFinalProps) {
  return (
    <section className="relative py-32 overflow-hidden bg-[#4A7C59]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1673530936194-c9dcf6676dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rc3RvcmUlMjB2aW50YWdlJTIwcG9ydHVnYWx8ZW58MXx8fHwxNzY5NTY4MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Livraria Nova"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Mais do que uma loja.
        </h2>
        <p className="text-3xl md:text-4xl text-white/90 mb-12 font-normal">
          Um espaço de sorte, arte e cultura.
        </p>
        <Button
          size="lg"
          onClick={() => onNavigate('contactos')}
          className="bg-[#F26419] hover:bg-[#D95712] text-white px-10 py-7 text-lg font-semibold shadow-xl rounded-lg transform hover:scale-105 transition-all"
        >
          Conhecer a Livraria & Papelaria Nova
          <ArrowRight className="ml-2 w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}