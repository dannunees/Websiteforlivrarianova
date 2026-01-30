import { ArrowRight, BookOpen, Package, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface LivrariaProps {
  onNavigate: (section: string) => void;
}

export function Livraria({ onNavigate }: LivrariaProps) {
  const livrariaItems = [
    'Literatura geral e contemporânea',
    'Literatura infantojuvenil',
    'Banda desenhada',
    'Livros de atividades e colorir',
    'História, cultura e património local',
  ];

  const papelariaItems = [
    'Material escolar completo',
    'Material de escritório e organização',
    'Agendas, diários e cadernos',
    'Embalagem e decoração para presentes',
  ];

  const forWho = [
    'Leitores de todas as idades',
    'Estudantes e professores',
    'Profissionais e empresas',
    'Famílias',
    'Quem procura qualidade, aconselhamento e proximidade',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1535058489223-1331b20fa114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBsaXRlcmF0dXJlJTIwc3RhY2t8ZW58MXx8fHwxNzY5NTY4MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Livros"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Livraria & Papelaria
          </h1>
          <h2 className="text-2xl md:text-3xl text-emerald-100 mb-6 font-light">
            Livros, papel e ideias escolhidos com cuidado.
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Uma curadoria pensada para quem valoriza leitura, organização, estética e
            conhecimento.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Curadoria Nova
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Na Livraria & Papelaria Nova, cada livro e cada objeto de papelaria é
            escolhido com critério, atenção ao detalhe e conhecimento. Acreditamos que
            a qualidade está na seleção, no aconselhamento e na experiência que
            oferecemos a quem nos visita.
          </p>
        </div>
      </section>

      {/* Livraria */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1727342681676-b7b32b273add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjBpbnRlcmlvciUyMHNoZWx2ZXMlMjBjb3p5fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Livraria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">A Livraria</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Com mais de 50 anos de história, a livraria é o coração cultural da
                Nova. Acompanhamos lançamentos editoriais e mantemos uma seleção
                diversificada para diferentes idades e interesses.
              </p>
              <div className="space-y-3">
                {livrariaItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Papelaria */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">A Papelaria</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Da escola ao escritório, a papelaria da Nova combina funcionalidade,
                design e qualidade, respondendo às necessidades do dia a dia com
                soluções práticas e esteticamente cuidadas.
              </p>
              <div className="space-y-3">
                {papelariaItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwbm90ZWJvb2tzJTIwcGFwZXIlMjBlbGVnYW50fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Papelaria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Recommendations */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recomendações da Equipa
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Porque cada leitor e cada necessidade são diferentes, partilhamos
              sugestões escolhidas pela nossa equipa, com base na experiência e no
              contacto diário com os clientes.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">
                    Leituras recomendadas do mês
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">
                    Sugestões para crianças e famílias
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">
                    Materiais essenciais para o regresso às aulas
                  </p>
                </li>
              </ul>
            </div>
            <Button
              size="lg"
              onClick={() => onNavigate('contactos')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white mt-8"
            >
              Peça uma recomendação na loja
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Para Quem é Esta Curadoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forWho.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-sm"
              >
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1673530936194-c9dcf6676dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rc3RvcmUlMjB2aW50YWdlJTIwcG9ydHVnYWx8ZW58MXx8fHwxNzY5NTY4MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Livraria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-teal-900/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
            Descubra a nossa curadoria ao vivo.
          </h2>
          <Button
            size="lg"
            onClick={() => onNavigate('contactos')}
            className="bg-white hover:bg-gray-100 text-emerald-900 px-10 py-7 text-lg font-semibold shadow-xl"
          >
            Visite a Livraria & Papelaria Nova em Tomar
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  );
}
