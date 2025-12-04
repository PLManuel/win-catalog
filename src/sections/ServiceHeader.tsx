import type { ServiceHeaderProps } from "../types/Service";
import { IconCircleCheckFilled, IconChevronLeft } from "@tabler/icons-react";
import { Link } from "react-router";

export default function ServiceHeader({ servicio }: ServiceHeaderProps) {
  return (
    <>
      <Link
        to="/catalogo"
        className="inline-flex items-center gap-2 text-win-orange hover:text-win-orange/80 text-sm font-medium mb-2 transition"
      >
        <IconChevronLeft className="w-4 h-4" />
        Volver al catálogo
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <span className="inline-block text-3xl mb-1">{servicio.icon}</span>
            <span className="inline-block bg-win-orange/10 text-win-orange px-2 py-1 text-xs rounded-full font-semibold">
              {servicio.categoria}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-win-texto mb-2 leading-tight">{servicio.nombre}</h1>
          <p className="text-base text-win-texto/70 mb-3 leading-relaxed">{servicio.descripcion_detallada}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {servicio.caracteristicas.map((char, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-win-orange/10 rounded-lg px-2 py-1">
                <IconCircleCheckFilled className="w-4 h-4 text-win-orange" />
                <span className="text-sm font-medium text-win-texto">{char}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {servicio.enlaces_de_contratacion.map((enlace, idx) => (
              <a
                key={idx}
                href="/contacto"
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${idx === 0
                  ? "bg-win-orange text-white hover:bg-win-orange/90"
                  : "border-2 border-win-orange text-win-orange hover:bg-win-orange/5"
                  }`}
              >
                {enlace.texto}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={servicio.imagen || "/placeholder.svg"}
            alt={servicio.nombre}
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </>
  );
}
