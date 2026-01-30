import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (section: string) => {
    onNavigate(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#4A7C59] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-tight">
                  Livraria & Papelaria
                </span>
                <span className="text-[#F26419] text-xs font-medium tracking-wide">
                  NOVA
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A Livraria & Papelaria Nova é um espaço de referência em Tomar, com mais de 50 anos de história, dedicado à cultura, à arte e ao conhecimento.
            </p>
            <div className="pt-2">
              <p className="text-[#F26419] font-medium tracking-wider text-sm">
                Sorte • Arte • Cultura
              </p>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Mapa do Site</h3>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Início' },
                { id: 'universo', label: 'Universo Artístico' },
                { id: 'livraria', label: 'Livraria & Papelaria' },
                { id: 'novidades', label: 'Novidades & Eventos' },
                { id: 'historia', label: 'A Nossa História' },
                { id: 'contactos', label: 'Contactos' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className="text-gray-400 hover:text-[#4A7C59] transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Spaces */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Os Nossos Espaços</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Papelaria & Material de Arte</li>
              <li>Área de Jogos & Lazer</li>
              <li>Livraria</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4 italic">
              O melhor da papelaria, livros e presentes reunido num só espaço.
            </p>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contactos</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#4A7C59] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Rua Manuel de Matos, nº17</p>
                  <p>2300-153 Tomar</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4A7C59] flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>249 320 350</p>
                  <p className="text-xs text-gray-500">Chamada para a rede fixa nacional</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4A7C59] flex-shrink-0" />
                <a
                  href="mailto:geral@papelarianova.pt"
                  className="text-gray-400 text-sm hover:text-[#4A7C59] transition-colors"
                >
                  geral@papelarianova.pt
                </a>
              </div>
            </div>
            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#4A7C59] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#4A7C59] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PRR Block */}
      <div className="bg-[#0F0F0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-white rounded-lg px-6 py-3">
              <p className="text-[#1A1A1A] font-semibold text-sm">
                🇪🇺 Projeto apoiado pelo PRR
              </p>
            </div>
            <p className="text-gray-400 text-sm text-center">
              Projeto apoiado pelo Plano de Recuperação e Resiliência (PRR)
            </p>
          </div>
        </div>
      </div>

      {/* Legal Line */}
      <div className="bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 Livraria & Papelaria Nova — Todos os direitos reservados
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-[#4A7C59] transition-colors">
                Política de Privacidade
              </button>
              <button className="text-gray-400 hover:text-[#4A7C59] transition-colors">
                Política de Cookies
              </button>
              <button className="text-gray-400 hover:text-[#4A7C59] transition-colors">
                Termos e Condições
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}