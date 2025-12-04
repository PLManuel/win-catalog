import { useRef } from "react";
import type { ServiceCardProps } from "../types/Service";
import ServiceDialog from "./ServiceDialog";

export default function ServiceCard({ servicio }: ServiceCardProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="border-win-borde outline-win-orange/50 group relative h-full w-full max-w-sm text-left bg-card rounded-lg p-4 border border-border hover:border-win-orange transition-all duration-300 hover:shadow-md hover:scale-102 cursor-pointer overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-16 h-16 bg-win-orange/10 rounded-full -mr-8 -mt-8 group-hover:bg-win-orange/20 transition-colors" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3 gap-2">
            <span className="text-2xl">{servicio.icon}</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-win-orange/10 text-win-orange rounded-full whitespace-nowrap">
              {servicio.categoria.split(" - ")[0]}
            </span>
          </div>

          <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-win-orange transition-colors line-clamp-2">
            {servicio.nombre}
          </h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{servicio.descripcion}</p>

          <div className="space-y-0.5">
            {servicio.caracteristicas.slice(0, 1).map((caracteristica, idx) => (
              <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="text-win-orange">✓</span>
                <span className="line-clamp-1">{caracteristica}</span>
              </div>
            ))}
            <p className="text-xs text-win-orange font-medium">+ Ver detalles</p>
          </div>
        </div>
      </button>

      <ServiceDialog ref={dialogRef} servicio={servicio} onClose={closeModal} />
    </div>
  );
}
