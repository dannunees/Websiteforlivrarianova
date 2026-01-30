import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'universo', label: 'Universo Artístico' },
    { id: 'livraria', label: 'Livraria & Papelaria' },
    { id: 'novidades', label: 'Novidades & Eventos' },
    { id: 'historia', label: 'A Nossa História' },
    { id: 'contactos', label: 'Contactos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#4A7C59] rounded-xl flex items-center justify-center shadow-sm transform group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#1A1A1A] text-lg leading-tight">
                  NOVA
                </span>
                <span className="text-[#666666] text-xs font-medium tracking-wide">
                  PAPELARIA • LIVRARIA
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-white bg-[#4A7C59]'
                    : 'text-[#1A1A1A] hover:text-[#4A7C59] hover:bg-[#F7F7F7]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#F7F7F7] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1A1A1A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1A1A1A]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-left font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-white bg-[#4A7C59]'
                      : 'text-[#1A1A1A] hover:text-[#4A7C59] hover:bg-[#F7F7F7]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}