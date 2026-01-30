import { Palette, BookOpen, Gamepad2 } from 'lucide-react';

export function WhatDefinesUs() {
  const pillars = [
    {
      icon: Palette,
      title: 'Papelaria & Arte',
      description:
        'Materiais técnicos, artísticos e criativos para quem aprende, ensina e cria.',
      color: 'emerald',
    },
    {
      icon: BookOpen,
      title: 'Livraria & Cultura',
      description:
        'Curadoria literária, novidades editoriais e livros que inspiram todas as idades.',
      color: 'blue',
    },
    {
      icon: Gamepad2,
      title: 'Jogos & Lazer',
      description:
        'Jogos, puzzles e brinquedos educativos que estimulam a mente e o convívio.',
      color: 'orange',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            O que nos define
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            A Livraria & Papelaria Nova é um espaço de referência em Tomar, onde
            tradição e modernidade convivem num ambiente pensado para quem valoriza
            cultura, criatividade e atendimento especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#4A7C59]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#F26419] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">
                  {pillar.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}