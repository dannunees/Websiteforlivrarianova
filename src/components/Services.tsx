import { FileText, BookOpen, Handshake, Building2 } from 'lucide-react';
import { Button } from './ui/button';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: FileText,
      title: 'Encadernações',
      description:
        'Soluções práticas e cuidadas para documentos, trabalhos e projetos.',
    },
    {
      icon: BookOpen,
      title: 'Listas Escolares Personalizadas',
      description:
        'Apoio completo no regresso às aulas, com preparação de listas por escola.',
    },
    {
      icon: Handshake,
      title: 'Parcerias',
      description:
        'Colaboração com entidades locais, culturais e educativas.',
    },
    {
      icon: Building2,
      title: 'Apoio a Escolas e Instituições',
      description:
        'Fornecimento especializado e acompanhamento personalizado.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Serviços Extra
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Na Nova, oferecemos soluções que apoiam escolas, famílias, artistas e
            instituições.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#4A7C59]"
            >
              <div className="w-14 h-14 bg-[#4A7C59] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-[#666666] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => onNavigate('contactos')}
            className="bg-[#F26419] hover:bg-[#D95712] text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Fale connosco sobre serviços
          </Button>
        </div>
      </div>
    </section>
  );
}