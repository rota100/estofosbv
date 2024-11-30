import { Shield, Heart, Sun, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Eliminação de Ácaros e Bactérias',
    description: 'Remoção profunda de agentes causadores de alergias e doenças respiratórias.'
  },
  {
    icon: Heart,
    title: 'Ambiente Mais Saudável',
    description: 'Melhoria significativa na qualidade do ar e bem-estar da sua família.'
  },
  {
    icon: Sun,
    title: 'Maior Durabilidade',
    description: 'Prolongue a vida útil dos seus móveis e tapetes com nossa limpeza profissional.'
  },
  {
    icon: Sparkles,
    title: 'Remoção de Manchas',
    description: 'Tecnologia avançada para remover as manchas mais difíceis e persistentes.'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Benefícios da Higienização Profissional
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <benefit.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}