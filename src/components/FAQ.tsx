import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Qual é o tempo médio do serviço?',
    answer: 'O tempo varia de acordo com o tamanho e estado do item. Em média, um sofá de 3 lugares leva cerca de 2 horas para ser completamente higienizado.'
  },
  {
    question: 'Os produtos utilizados são seguros?',
    answer: 'Sim, utilizamos produtos biodegradáveis e hipoalergênicos, seguros para crianças e animais de estimação.'
  },
  {
    question: 'Quanto tempo para secar?',
    answer: 'O tempo de secagem varia entre 4 a 6 horas, dependendo do tipo de tecido e condições ambientais.'
  },
  {
    question: 'Vocês atendem em qual região?',
    answer: 'Atendemos em toda a região metropolitana de São Paulo.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}