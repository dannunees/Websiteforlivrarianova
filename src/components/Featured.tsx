import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface FeaturedProps {
  onNavigate: (section: string) => void;
}

export function Featured({ onNavigate }: FeaturedProps) {
  const highlights = [
    {
      title: 'Essenciais para Aguarela',
      category: 'Materiais Artísticos',
      image:
        'https://images.unsplash.com/photo-1554938521-9e0763797568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHdhdGVyY29sb3IlMjBwYWludCUyMGJydXNoZXN8ZW58MXx8fHwxNzY5NTY4MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Novidades Literárias',
      category: 'Livraria',
      image:
        'https://images.unsplash.com/photo-1535058489223-1331b20fa114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBsaXRlcmF0dXJlJTIwc3RhY2t8ZW58MXx8fHwxNzY5NTY4MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Jogos para a Família',
      category: 'Lazer',
      image:
        'https://images.unsplash.com/photo-1663625318124-c34c28df5bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWVzJTIwZmFtaWx5JTIwcHV6emxlfGVufDF8fHx8MTc2OTU2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Sugestões da Equipa',
      category: 'Recomendações',
      image:
        'https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwbm90ZWJvb2tzJTIwcGFwZXIlMjBlbGVnYW50fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Destaques do Mês
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma seleção cuidada das novidades e essenciais que recomendamos este mês
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-emerald-600 rounded-full text-xs font-semibold mb-2">
                  {highlight.category}
                </span>
                <h3 className="text-xl font-bold">{highlight.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => onNavigate('contactos')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Ver mais destaques na loja
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
