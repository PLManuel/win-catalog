import { useRef, useState } from "react";
import type { ServiceCardProps } from "../types/Service";
import ServiceDialog from "./ServiceDialog";

export default function ServiceCard({ servicio }: ServiceCardProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsClosing(false);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      dialogRef.current?.close();
      setIsClosing(false);
    }, 200);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="border-win-borde outline-win-orange/50 group relative h-full w-full max-w-sm text-left bg-card rounded-lg p-4 border border-border hover:border-win-orange transition-all duration-300 hover:shadow-xl hover:shadow-win-orange/20 hover:-translate-y-1 cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-win-orange/0 to-win-orange/0 group-hover:from-win-orange/5 group-hover:to-win-orange/10 transition-all duration-300" />
        <div className="absolute top-0 right-0 w-16 h-16 bg-win-orange/10 rounded-full -mr-8 -mt-8 group-hover:bg-win-orange/30 group-hover:scale-150 transition-all duration-300" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3 gap-2">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{servicio.icon}</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-win-orange/10 text-win-orange rounded-full whitespace-nowrap group-hover:bg-win-orange group-hover:text-white transition-all duration-300">
              {servicio.categoria.split(" - ")[0]}
            </span>
          </div>

          <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-win-orange transition-colors duration-300 line-clamp-2">
            {servicio.nombre}
          </h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-1 group-hover:text-win-texto/80 transition-colors duration-300">{servicio.descripcion}</p>

          <div className="space-y-0.5">
            {servicio.caracteristicas.slice(0, 1).map((caracteristica, idx) => (
              <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-win-texto/80 transition-colors duration-300">
                <span className="text-win-orange group-hover:scale-125 inline-block transition-transform duration-300">✓</span>
                <span className="line-clamp-1">{caracteristica}</span>
              </div>
            ))}
            <p className="text-xs text-win-orange font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
              + Ver detalles
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </p>
          </div>
        </div>
      </button>

      <ServiceDialog ref={dialogRef} servicio={servicio} onClose={closeModal} isClosing={isClosing} />
    </div>
  );
}
