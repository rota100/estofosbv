import { Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© 2024 Euro Clean. Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <a href="tel:933511462" className="hover:text-green-400">
              933 511 462
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}