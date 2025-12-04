import type { ServicePaymentSecurityProps } from "../types/Service";
import { IconShield, IconCreditCard } from "@tabler/icons-react";

export default function ServicePaymentSecurity({ servicio }: ServicePaymentSecurityProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Opciones de Pago */}
      <div>
        <h2 className="text-xl font-bold text-win-texto mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-win-orange rounded-full"></div>
          Opciones de Pago
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {servicio.opciones_de_pago.map((opcion, idx) => (
            <div
              key={idx}
              className="bg-win-fondo border border-win-borde rounded-lg p-3 text-center hover:shadow-md hover:border-win-orange/50 transition"
            >
              <IconCreditCard className="w-6 h-6 text-win-orange mx-auto mb-2" />
              <p className="text-sm font-medium text-win-texto">{opcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificaciones y Seguridad */}
      <div>
        <h2 className="text-xl font-bold text-win-texto mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-win-orange rounded-full"></div>
          Certificaciones y Seguridad
        </h2>
        <div className="space-y-3">
          {servicio.certificaciones_o_seguridad.map((cert, idx) => (
            <div key={idx} className="bg-win-fondo border border-win-borde rounded-lg p-3 flex items-start gap-3">
              <IconShield className="w-5 h-5 text-win-orange shrink-0 mt-0.5" />
              <p className="text-sm text-win-texto/80">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
