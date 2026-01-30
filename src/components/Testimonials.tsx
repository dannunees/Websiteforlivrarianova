import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: 'Excelente atendimento e enorme variedade de material artístico. Sempre encontro tudo o que preciso para os meus projetos.',
      author: 'Maria Silva',
      rating: 5,
    },
    {
      text: 'Uma referência em Tomar há décadas. A equipa é muito prestável e conhecedora. Recomendo vivamente!',
      author: 'João Santos',
      rating: 5,
    },
    {
      text: 'A melhor livraria da cidade! Adoro a seleção de livros e a papelaria é de qualidade superior.',
      author: 'Ana Costa',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            O que dizem os nossos clientes
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#F26419] text-[#F26419]" />
              ))}
            </div>
            <span className="text-[#666666] font-semibold">5.0 no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F26419] text-[#F26419]" />
                ))}
              </div>
              <p className="text-[#666666] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="font-bold text-[#1A1A1A]">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}