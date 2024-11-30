import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="text-green-600 font-bold text-2xl">Euro Clean</div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:933511462" className="flex items-center text-green-600 hover:text-green-700">
              <Phone className="w-5 h-5 mr-2" />
              933 511 462
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#benefits">Benefícios</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#services" mobile>Serviços</NavLink>
            <NavLink href="#benefits" mobile>Benefícios</NavLink>
            <NavLink href="#contact" mobile>Contacto</NavLink>
            <a href="tel:933511462" className="flex items-center text-green-600">
              <Phone className="w-5 h-5 mr-2" />
              933 511 462
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}