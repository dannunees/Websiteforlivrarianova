import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface HomeHeroProps {
  onNavigate: (section: string) => void;
}

export function HomeHero({ onNavigate }: HomeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#4A7C59]/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1727342681676-b7b32b273add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjBpbnRlcmlvciUyMHNoZWx2ZXMlMjBjb3p5fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Interior da Livraria Nova"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-[#4A7C59]/10 rounded-full mb-6">
            <span className="text-[#4A7C59] font-semibold text-sm tracking-wider">
              Mais de 50 anos em Tomar
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Sorte • Arte • Cultura
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#666666] mb-6 font-normal">
            O melhor da papelaria, livros e presentes reunido num só espaço em Tomar.
          </h2>
          <p className="text-lg md:text-xl text-[#666666] mb-10 leading-relaxed max-w-2xl">
            Um espaço onde a criatividade, o conhecimento e a inspiração se encontram há mais de 50 anos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => onNavigate('universo')}
              className="bg-[#4A7C59] hover:bg-[#3D6548] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Explorar a Nova
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contactos')}
              className="bg-white hover:bg-gray-50 text-[#1A1A1A] border-2 border-[#1A1A1A] px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Visitar a Loja
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}