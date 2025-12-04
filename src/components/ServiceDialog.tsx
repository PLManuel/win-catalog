import { forwardRef } from "react";
import { Link } from "react-router";
import { IconX, IconTag, IconMapPin, IconBolt, IconListCheck } from "@tabler/icons-react";
import type { ServiceDialogProps } from "../types/Service";

const ServiceDialog = forwardRef<HTMLDialogElement, ServiceDialogProps>(
  ({ servicio, onClose, isClosing }, ref) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <dialog
        ref={ref}
        className={`max-w-3xl w-full p-0 rounded-xl shadow-2xl m-auto backdrop:bg-black/40 border-2 border-win-borde bg-win-fondo ${isClosing ? 'animate-modal-out' : 'animate-modal-in'}`}
        onClick={handleBackdropClick}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-win-texto/70 hover:text-win-orange transition-colors z-20 bg-win-fondo/80 backdrop-blur-sm rounded-full p-1 border border-win-borde shadow-sm"
          aria-label="Cerrar"
        >
          <IconX size={20} />
        </button>

        <div className="flex">
          <div className="w-2/5 flex flex-col items-center justify-center border-r border-win-borde bg-win-borde/20 rounded-l-xl relative">

            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="absolute w-full h-full object-cover rounded-lg"
            />

            <div className="absolute bottom-4 left-4 flex items-center gap-1">
              <span className="text-2xl text-win-orange drop-shadow-2xl">
                {servicio.icon || <IconBolt size={32} />}
              </span>

              <p
                className="text-xs text-win-texto/70 font-semibold bg-win-fondo px-3 py-1.5 rounded-full border border-win-borde flex items-center gap-1 shadow-inner"
              >
                <IconMapPin size={14} className="text-win-orange" />
                {servicio.alcance}
              </p>
            </div>
            <div className="z-10">
              <Link
                to={`/catalogo/${servicio.id}`}
                className="inline-block bg-win-orange text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-win-orange/90 transition-colors border-none text-sm"
              >
                Ver página de servicio
              </Link>
            </div>
          </div>

          <div className="w-3/5 p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-win-orange/15 text-win-orange rounded-full border border-win-orange/30 flex items-center gap-1"
              >
                <IconTag size={12} />
                {servicio.categoria.split(" - ")[0]}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-win-texto tracking-tight border-b pb-2 border-win-borde/50">
              {servicio.nombre}
            </h3>

            <p className="text-sm text-win-texto/80 italic mb-2">
              {servicio.descripcion}
            </p>

            <h4 className="text-base font-bold text-win-texto mt-2 mb-1 flex items-center gap-2">
              <IconListCheck size={18} className="text-win-orange" /> Características Clave
            </h4>

            <div className="space-y-2 w-full max-h-40 overflow-y-auto pr-2">
              {servicio.caracteristicas.map((caracteristica, idx) => (
                <div
                  key={idx}
                  className="text-sm flex items-start gap-3 bg-win-borde/40 rounded-lg px-3 py-2 border border-win-borde/70"
                >
                  <span className="text-win-orange font-extrabold shrink-0 mt-0.5">✓</span>
                  <span className="text-win-texto font-medium leading-tight">{caracteristica}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </dialog>
    );
  }
);

export default ServiceDialog;
