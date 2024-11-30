import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Especialistas em Higienização de Estofados e Tapetes
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Atendemos em Lisboa e Região. Renovando seus estofos e tapetes com tecnologia 
              avançada e produtos eco-friendly. Resultados surpreendentes garantidos!
            </p>
            <div className="space-y-4">
              <a
                href="tel:933511462"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora!
              </a>
              <a
                href="https://wa.me/933511462"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full justify-center"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/dP6TSyB/Imagem-do-Whats-App-de-2024-11-29-s-23-07-26-30626404.jpg"
              alt="Profissional realizando limpeza de estofado"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}