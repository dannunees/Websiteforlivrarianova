import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface NovidadesProps {
  onNavigate: (section: string) => void;
}

export function Novidades({ onNavigate }: NovidadesProps) {
  const highlights = [
    {
      title: 'Nova Coleção de Material Artístico Primavera 2026',
      category: 'Novidade',
      date: '15 Janeiro 2026',
      excerpt:
        'Recebemos a nova coleção de aguarelas e acrílicos da Winsor & Newton, com tonalidades exclusivas para a primavera.',
      image:
        'https://images.unsplash.com/photo-1554938521-9e0763797568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHdhdGVyY29sb3IlMjBwYWludCUyMGJydXNoZXN8ZW58MXx8fHwxNzY5NTY4MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Lançamentos Literários de Janeiro',
      category: 'Novidade',
      date: '10 Janeiro 2026',
      excerpt:
        'Novos títulos imperdíveis da literatura portuguesa e internacional já disponíveis na nossa livraria.',
      image:
        'https://images.unsplash.com/photo-1535058489223-1331b20fa114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBsaXRlcmF0dXJlJTIwc3RhY2t8ZW58MXx8fHwxNzY5NTY4MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Workshop de Aguarela para Iniciantes',
      category: 'Evento',
      date: '3 Fevereiro 2026',
      excerpt:
        'Participe no nosso workshop de introdução à aguarela, com demonstração de técnicas básicas e materiais incluídos.',
      image:
        'https://images.unsplash.com/photo-1759333213207-daabf2584348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZyUyMGNhbnZhcyUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTU2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const events = [
    {
      title: 'Feira do Livro de Tomar 2026',
      date: 'Maio 2026',
      description:
        'A Livraria Nova marca presença na tradicional Feira do Livro de Tomar, com uma seleção especial de títulos e descontos exclusivos.',
    },
    {
      title: 'Regresso às Aulas',
      date: 'Setembro 2026',
      description:
        'Campanha especial de regresso às aulas com listas escolares personalizadas e apoio completo a famílias e estudantes.',
    },
    {
      title: 'Natal Criativo',
      date: 'Dezembro 2026',
      description:
        'Sugestões de presentes originais, kits criativos e embrulhos personalizados para tornar o Natal ainda mais especial.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1727342681676-b7b32b273add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjBpbnRlcmlvciUyMHNoZWx2ZXMlMjBjb3p5fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Novidades"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Novidades & Eventos
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-100 mb-6 font-light">
            O que acontece na Livraria & Papelaria Nova.
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Lançamentos, iniciativas culturais, sugestões e momentos que ligam a Nova
            à cidade de Tomar.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600 leading-relaxed">
            A Livraria & Papelaria Nova participa ativamente na vida cultural da
            cidade, promovendo eventos, acompanhando lançamentos editoriais e
            partilhando novidades que inspiram leitores, artistas e famílias.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Novidades em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              As últimas atualizações e lançamentos da Livraria Nova
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 group/btn">
                    <span>Ler mais</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Initiatives */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eventos & Iniciativas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acompanhe as nossas iniciativas culturais e eventos ao longo do ano
            </p>
          </div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {event.title}
                        </h3>
                        <p className="text-blue-600 font-semibold">{event.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed ml-15">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Arquivo
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Aqui encontra todas as iniciativas e novidades partilhadas pela Livraria
            & Papelaria Nova.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Todas', 'Novidades', 'Eventos', 'Parcerias', 'Cultura'].map(
              (filter) => (
                <button
                  key={filter}
                  className="px-6 py-3 bg-white hover:bg-blue-600 hover:text-white text-gray-700 rounded-full font-semibold transition-all duration-300 shadow-sm"
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1673530936194-c9dcf6676dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rc3RvcmUlMjB2aW50YWdlJTIwcG9ydHVnYWx8ZW58MXx8fHwxNzY5NTY4MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Livraria Nova"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-indigo-900/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
            Acompanhe a vida cultural da Nova.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('contactos')}
              className="bg-white hover:bg-gray-100 text-blue-900 px-10 py-7 text-lg font-semibold shadow-xl"
            >
              Visite-nos na loja
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-10 py-7 text-lg"
            >
              Fale connosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
