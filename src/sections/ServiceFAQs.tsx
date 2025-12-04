import type { ServiceFAQsProps } from "../types/Service";
import { useState } from "react";

export default function ServiceFAQs({ servicio }: ServiceFAQsProps) {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-xl font-bold text-win-texto mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-win-orange rounded-full"></div>
        Preguntas Frecuentes
      </h2>
      <div className="space-y-2">
        {servicio.faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-win-borde rounded-lg overflow-hidden bg-win-fondo hover:border-win-orange/50 transition"
          >
            <button
              onClick={() => setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-win-borde/30 transition text-left font-semibold text-win-texto"
            >
              {faq.pregunta}
              <span className="text-win-orange text-xl font-bold">{expandedFaqIndex === idx ? "−" : "+"}</span>
            </button>
            {expandedFaqIndex === idx && (
              <div className="px-4 py-3 bg-win-borde/20 border-t border-win-borde">
                <p className="text-win-texto/80 leading-relaxed text-sm">{faq.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
