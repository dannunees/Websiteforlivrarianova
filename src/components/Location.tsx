import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface LocationProps {
  onNavigate: (section: string) => void;
}

export function Location({ onNavigate }: LocationProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visite-nos em Tomar
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Estamos no coração de Tomar, prontos para o receber com atendimento
              próximo e especializado.
            </p>
            <div className="flex items-start space-x-4 mb-8 p-6 bg-white rounded-xl shadow-sm">
              <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Morada</p>
                <p className="text-gray-600">Rua Manuel de Matos, nº17</p>
                <p className="text-gray-600">2300-153 Tomar</p>
              </div>
            </div>
            <Button
              size="lg"
              onClick={() => onNavigate('contactos')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Ver localização e horários
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.2!2d-8.4097!3d39.6034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM2JzEyLjIiTiA4wrAyNCczNC45Ilc!5e0!3m2!1spt-PT!2spt!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
