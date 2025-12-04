import type { ServiceTestimonialsProps } from "../types/Service";

export default function ServiceTestimonials({ servicio }: ServiceTestimonialsProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-win-texto mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-win-orange rounded-full"></div>
        Lo que Dicen Nuestros Clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {servicio.testimonios.map((testimonio, idx) => (
          <div
            key={idx}
            className="bg-linear-to-br from-win-orange/5 to-win-fondo border border-win-orange/20 rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-win-orange">
                  ★
                </span>
              ))}
            </div>
            <p className="text-win-texto/80 italic mb-3 leading-relaxed text-sm">"{testimonio.comentario}"</p>
            <p className="font-semibold text-win-texto text-sm">— {testimonio.cliente}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
