import React from 'react';
import { MessageCircle } from 'lucide-react'; // Using lucide-react as a valid icon

export default function WhatsAppFloater() {
    const handleWhatsAppClick = () => {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'whatsapp_click',
                action: 'chat_initiated',
                label: 'WhatsApp Floater Button'
            });
        }
    };

    return (
        <a
            id="whatsapp-floater-link"
            href="https://wa.me/917994446019"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-slow group"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 fill-current" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold ml-0 group-hover:ml-2">
                Chat With Us
            </span>
        </a>
    );
}
