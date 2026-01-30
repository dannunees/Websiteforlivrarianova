import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface UniversesProps {
  onNavigate: (section: string) => void;
}

export function Universes({ onNavigate }: UniversesProps) {
  const universes = [
    {
      id: 'universo',
      title: 'Universo Artístico',
      description:
        'Materiais de belas-artes, desenho técnico e marcas premium para artistas e criativos.',
      image:
        'https://images.unsplash.com/photo-1554938521-9e0763797568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHdhdGVyY29sb3IlMjBwYWludCUyMGJydXNoZXN8ZW58MXx8fHwxNzY5NTY4MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-600/90 to-pink-600/90',
    },
    {
      id: 'livraria',
      title: 'Livraria & Papelaria',
      description:
        'Novidades literárias, material escolar e papelaria de design escolhidos com cuidado.',
      image:
        'https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwbm90ZWJvb2tzJTIwcGFwZXIlMjBlbGVnYW50fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-emerald-600/90 to-teal-600/90',
    },
    {
      id: 'jogos',
      title: 'Jogos & Lazer',
      description:
        'Jogos de tabuleiro, puzzles e brinquedos educativos para todas as idades.',
      image:
        'https://images.unsplash.com/photo-1663625318124-c34c28df5bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWVzJTIwZmFtaWx5JTIwcHV6emxlfGVufDF8fHx8MTc2OTU2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-orange-600/90 to-red-600/90',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Universos da Nova
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Descubra os nossos espaços dedicados à criatividade, cultura e diversão
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {universes.map((universe, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              onClick={() =>
                universe.id === 'jogos' ? onNavigate('livraria') : onNavigate(universe.id)
              }
            >
              {/* Background Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={universe.image}
                  alt={universe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${universe.gradient} group-hover:opacity-90 transition-opacity duration-300`}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-3 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  {universe.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {universe.description}
                </p>
                <Button
                  variant="outline"
                  className="self-start bg-white text-[#1A1A1A] hover:bg-white hover:text-[#4A7C59] border-2 border-white transition-all duration-300 rounded-lg font-semibold"
                >
                  Explorar
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}