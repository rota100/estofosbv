import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/933511462"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-6 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}