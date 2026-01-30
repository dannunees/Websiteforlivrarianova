import { ArrowRight, Heart, Users, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface HistoriaProps {
  onNavigate: (section: string) => void;
}

export function Historia({ onNavigate }: HistoriaProps) {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Sorte',
      description:
        'A dimensão lúdica, os jogos, a descoberta e o prazer de escolher.',
    },
    {
      icon: Heart,
      title: 'Arte',
      description:
        'A especialização em materiais de desenho, pintura e expressão criativa, com marcas de referência e aconselhamento especializado.',
    },
    {
      icon: Users,
      title: 'Cultura',
      description:
        'Os livros, a leitura, o conhecimento e a ligação ao património cultural de Tomar.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1673530936194-c9dcf6676dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rc3RvcmUlMjB2aW50YWdlJTIwcG9ydHVnYWx8ZW58MXx8fHwxNzY5NTY4MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="História da Nova"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            A Nossa História
          </h1>
          <h2 className="text-2xl md:text-3xl text-amber-100 mb-6 font-light">
            Mais de 50 anos ligados aos livros, à arte e à cidade de Tomar.
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Uma história feita de pessoas, conhecimento e proximidade.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Uma História que Começa em Tomar
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p className="text-xl">
              A Livraria & Papelaria Nova tem uma trajetória de mais de meio século em
              Tomar. Ao longo das décadas, consolidou-se como um espaço de referência
              local no comércio de livros e material escolar, acompanhando gerações de
              leitores, estudantes e famílias.
            </p>
            <p className="text-xl">
              Desde o início, a Nova assumiu um compromisso claro: oferecer mais do
              que produtos — oferecer conhecimento, proximidade e confiança.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1727342681676-b7b32b273add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjBpbnRlcmlvciUyMHNoZWx2ZXMlMjBjb3p5fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Interior da Livraria Nova"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Evoluir Sem Perder a Essência
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Ao longo dos anos, a Livraria & Papelaria Nova foi-se adaptando às
                mudanças do mercado e às novas necessidades dos clientes. Expandiu a
                sua oferta, reforçou a especialização em materiais de arte e
                artesanato e modernizou o espaço, mantendo sempre a mesma filosofia de
                atendimento personalizado.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hoje, tradição e modernidade convivem naturalmente na Nova.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sorte • Arte • Cultura
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os três pilares que definem a identidade da Nova
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-amber-50 to-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 text-center"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            A Nossa Equipa
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            A Nova é feita de pessoas. A equipa da Livraria & Papelaria Nova
            distingue-se pelo conhecimento, pela disponibilidade e pelo gosto em
            aconselhar cada cliente de forma personalizada.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Seja na escolha de um livro, de material artístico ou de soluções
            escolares, o atendimento é sempre próximo, informado e dedicado.
          </p>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ligação à Comunidade
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                A Livraria & Papelaria Nova participa ativamente na vida cultural de
                Tomar, colaborando em eventos, feiras do livro, iniciativas educativas
                e ações que promovem a leitura, a arte e a cultura local.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Esta ligação à comunidade faz parte da identidade da Nova desde
                sempre.
              </p>
            </div>
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1535058489223-1331b20fa114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBsaXRlcmF0dXJlJTIwc3RhY2t8ZW58MXx8fHwxNzY5NTY4MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Livros"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Present and Future */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Hoje e Amanhã
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Atualmente, a Nova continua focada em oferecer uma experiência cuidada,
            moderna e humana, mantendo-se fiel à sua história e preparada para o
            futuro. Um espaço onde tradição e inovação convivem, pensado para
            leitores, artistas, estudantes e famílias.
          </p>
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
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 to-orange-900/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Mais do que uma loja, um espaço de sorte, arte e cultura.
          </h2>
          <Button
            size="lg"
            onClick={() => onNavigate('contactos')}
            className="bg-white hover:bg-gray-100 text-amber-900 px-10 py-7 text-lg font-semibold shadow-xl"
          >
            Visite a Livraria & Papelaria Nova em Tomar
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  );
}
