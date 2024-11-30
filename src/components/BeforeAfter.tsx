import React from 'react';

export function BeforeAfter() {
  const beforeAfterPairs = [
    {
      before: "https://i.ibb.co/hf4RhSZ/Imagem-do-Whats-App-de-2024-11-29-s-23-07-33-15de1d13.jpg",
      after: "https://i.ibb.co/dP6TSyB/Imagem-do-Whats-App-de-2024-11-29-s-23-07-26-30626404.jpg",
      description: "Sofá"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Resultados Transformadores
        </h2>
        <div className="space-y-12">
          {beforeAfterPairs.map((pair, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={pair.before}
                    alt={`${pair.description} antes da limpeza`}
                    className="w-full h-[400px] object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                </div>
                <p className="text-center font-semibold text-gray-700">Antes</p>
              </div>
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={pair.after}
                    alt={`${pair.description} depois da limpeza`}
                    className="w-full h-[400px] object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                </div>
                <p className="text-center font-semibold text-gray-700">Depois</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa tecnologia avançada de higienização remove profundamente manchas, ácaros e bactérias, 
            devolvendo a beleza original ao seu estofado. Veja a diferença impressionante em nossos resultados!
          </p>
        </div>
      </div>
    </section>
  );
}