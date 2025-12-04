import type { ServiceCTAProps } from "../types/Service";

export default function ServiceCTA({ servicio }: ServiceCTAProps) {
  return (
    <div className="bg-linear-to-r from-win-orange/10 to-win-orange/5 border border-win-orange/20 rounded-xl p-6 text-center">
      <h2 className="text-2xl font-bold text-win-texto mb-2">¿Listo para obtener este servicio?</h2>
      <p className="text-base text-win-texto/70 mb-4 max-w-2xl mx-auto">
        Experimenta la calidad y confiabilidad que mereces con WIN Telecomunicaciones.
      </p>
      <a
        // href={servicio.enlaces_de_contratacion[0]?.url || "/contacto"}
        href="/contacto"
        className="inline-block bg-win-orange text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-win-orange/90 transition"
      >
        {servicio.enlaces_de_contratacion[0]?.texto || "Contratar Ahora"}
      </a>
    </div>
  );
}
