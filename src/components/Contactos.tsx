import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

export function Contactos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error('Por favor, autorize o tratamento dos seus dados.');
      return;
    }
    toast.success('Mensagem enviada com sucesso! Responderemos brevemente.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: '',
      consent: false,
    });
  };

  const schedule = [
    { day: 'Segunda a Quinta-feira', hours: '09:00 – 13:00 • 15:00 – 19:00' },
    { day: 'Sexta-feira', hours: '09:00 – 19:00' },
    { day: 'Sábado', hours: '09:00 – 13:00' },
    { day: 'Domingo', hours: 'Encerrado', closed: true },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1727342681676-b7b32b273add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjBpbnRlcmlvciUyMHNoZWx2ZXMlMjBjb3p5fGVufDF8fHx8MTc2OTU2ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contactos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Contactos & Localização
          </h1>
          <h2 className="text-2xl md:text-3xl text-emerald-100 mb-6 font-light">
            Estamos em Tomar, prontos para o receber.
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Visite-nos, contacte-nos ou fale connosco diretamente. Teremos todo o
            gosto em ajudar.
          </p>
        </div>
      </section>

      {/* Contact Info & Schedule */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Informações de Contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-emerald-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Morada</h3>
                      <p className="text-gray-700">
                        Livraria & Papelaria Nova, Unipessoal, Lda.
                      </p>
                      <p className="text-gray-700">Rua Manuel de Matos, nº17</p>
                      <p className="text-gray-700">2300-153 Tomar</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-emerald-50 rounded-xl">
                    <Phone className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Telefone</h3>
                      <a
                        href="tel:249320350"
                        className="text-emerald-700 hover:text-emerald-800 font-semibold text-lg"
                      >
                        249 320 350
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Chamada para a rede fixa nacional
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-emerald-50 rounded-xl">
                    <Mail className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <a
                        href="mailto:geral@papelarianova.pt"
                        className="text-emerald-700 hover:text-emerald-800 font-semibold"
                      >
                        geral@papelarianova.pt
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Horário de Funcionamento
              </h2>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-8 h-8 text-emerald-700" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Horários de Abertura
                  </h3>
                </div>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-4 bg-white rounded-xl ${
                        item.closed ? 'opacity-60' : ''
                      }`}
                    >
                      <span className="font-semibold text-gray-900">
                        {item.day}
                      </span>
                      <span
                        className={`font-medium ${
                          item.closed ? 'text-gray-500' : 'text-emerald-700'
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-6 text-center italic">
                  Horários sujeitos a alterações em datas especiais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visite-nos em Tomar
            </h2>
            <p className="text-xl text-gray-600">
              Estamos localizados no centro de Tomar, com fácil acesso
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.2!2d-8.4097!3d39.6034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM2JzEyLjIiTiA4wrAyNCczNC45Ilc!5e0!3m2!1spt-PT!2spt!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Envie-nos uma Mensagem
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e responderemos com a maior brevidade
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-emerald-50 to-white p-8 md:p-12 rounded-2xl shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Telemóvel (opcional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto *</Label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                >
                  <option value="general">Informações gerais</option>
                  <option value="products">Produtos</option>
                  <option value="services">Serviços</option>
                  <option value="partnerships">Parcerias</option>
                  <option value="other">Outros</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-white"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                required
                checked={formData.consent}
                onChange={(e) =>
                  setFormData({ ...formData, consent: e.target.checked })
                }
                className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                Autorizo o tratamento dos meus dados para efeitos de contacto, de
                acordo com a Política de Privacidade. *
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Send className="mr-2 w-5 h-5" />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Siga-nos nas Redes Sociais
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Acompanhe as nossas novidades, eventos e sugestões
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8 text-white" />
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8 text-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
