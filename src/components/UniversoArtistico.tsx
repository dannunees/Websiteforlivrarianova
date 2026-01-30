import { ArrowRight, Paintbrush, Palette, Ruler, Scissors } from 'lucide-react';
import { Button } from './ui/button';

interface UniversoArtisticoProps {
  onNavigate: (section: string) => void;
}

export function UniversoArtistico({ onNavigate }: UniversoArtisticoProps) {
  const categories = [
    {
      icon: Paintbrush,
      title: 'Desenho',
      description:
        'Lápis de grafite, lápis de cor profissionais, carvão, marcadores, sketchbooks e blocos de desenho.',
      image:
        'https://images.unsplash.com/photo-1761039894388-3ef2606bffbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWxzJTIwZHJhd2luZyUyMHNrZXRjaGluZyUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3Njk1NjgxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Palette,
      title: 'Pintura',
      description:
        'Tintas acrílicas, óleo, aguarela, guache, pincéis, paletas, telas e cavaletes.',
      image:
        'https://images.unsplash.com/photo-1554938521-9e0763797568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHdhdGVyY29sb3IlMjBwYWludCUyMGJydXNoZXN8ZW58MXx8fHwxNzY5NTY4MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Ruler,
      title: 'Materiais Técnicos',
      description:
        'Papel especializado, instrumentos de precisão e acessórios para desenho técnico.',
      image:
        'https://images.unsplash.com/photo-1759333213207-daabf2584348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZyUyMGNhbnZhcyUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTU2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Scissors,
      title: 'Artesanato & Criatividade',
      description:
        'Materiais para trabalhos manuais, projetos criativos e hobbies artísticos.',
      image:
        'https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwbm90ZWJvb2tzJTIwcGFwZXIlMjBlbGVnYW50fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const brands = [
    'Faber-Castell',
    'Winsor & Newton',
    'Staedtler',
    'Caran d\'Ache',
    'Derwent',
    'Canson',
  ];

  const forWho = [
    'Artistas plásticos e ilustradores',
    'Estudantes de artes e design',
    'Professores e educadores',
    'Amadores criativos e curiosos',
    'Quem procura materiais de qualidade para aprender e criar',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554938521-9e0763797568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHdhdGVyY29sb3IlMjBwYWludCUyMGJydXNoZXN8ZW58MXx8fHwxNzY5NTY4MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Materiais Artísticos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Universo Artístico
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-100 mb-6 font-light">
            Materiais, inspiração e conhecimento para quem cria.
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Um espaço dedicado às belas-artes, ao desenho técnico e à expressão
            criativa, pensado para artistas, estudantes e apaixonados pela arte.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            A Montra Criativa da Nova
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            O Universo Artístico da Livraria & Papelaria Nova é reconhecido pela sua
            vasta oferta de materiais de desenho, pintura e artesanato, aliando
            marcas de referência a um acompanhamento próximo e especializado. Aqui,
            cada produto é escolhido com critério, qualidade e respeito pelo processo
            criativo.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Categorias Artísticas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma seleção completa e curada para cada forma de expressão criativa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-purple-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Brands */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marcas de Referência
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com marcas reconhecidas pela sua qualidade e fiabilidade,
              escolhidas para responder às exigências de artistas, estudantes e
              profissionais.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 hover:shadow-md transition-all duration-300"
              >
                <span className="font-semibold text-gray-700 text-center">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Para Quem é Este Espaço
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forWho.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Support */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Aconselhamento Especializado
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Na Nova, acreditamos que o melhor material é aquele que se adapta ao seu
            projeto. A nossa equipa está disponível para aconselhar, esclarecer
            dúvidas e ajudar a escolher as soluções mais adequadas a cada necessidade
            criativa.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('contactos')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Fale connosco
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1759333213207-daabf2584348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZyUyMGNhbnZhcyUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTU2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Arte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-pink-900/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
            Descubra o Universo Artístico da Nova ao vivo.
          </h2>
          <Button
            size="lg"
            onClick={() => onNavigate('contactos')}
            className="bg-white hover:bg-gray-100 text-purple-900 px-10 py-7 text-lg font-semibold shadow-xl"
          >
            Visite-nos em Tomar
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  );
}
