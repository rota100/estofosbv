import { Sparkles, Droplets, Shield } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Higienização de Estofados',
    description: 'Limpeza profunda de sofás, poltronas e cadeiras com tecnologia avançada.',
    benefits: ['Elimina ácaros e bactérias', 'Remove manchas difíceis', 'Prolonga a vida útil']
  },
  {
    icon: Droplets,
    title: 'Limpeza de Tapetes',
    description: 'Restauração e conservação de tapetes de todos os tipos e materiais.',
    benefits: ['Recupera as cores originais', 'Remove odores', 'Higienização completa']
  },
  {
    icon: Shield,
    title: 'Proteção de Tecidos',
    description: 'Aplicação de produtos especiais para proteção contra manchas e sujeira.',
    benefits: ['Impermeabilização', 'Proteção UV', 'Maior durabilidade']
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}