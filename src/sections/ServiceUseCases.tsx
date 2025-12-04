import type { ServiceUseCasesProps } from "../types/Service";

export default function ServiceUseCases({ servicio }: ServiceUseCasesProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <img
        src={servicio.imagen_secundaria || "/placeholder.svg"}
        alt="Secondary"
        className="w-full h-auto rounded-xl shadow-md object-cover order-2 lg:order-1"
      />
      <div className="order-1 lg:order-2">
        <h2 className="text-xl font-bold text-win-texto mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-win-orange rounded-full"></div>
          Casos de Uso
        </h2>
        <div className="space-y-3">
          {servicio.casos_de_uso.map((caso, idx) => (
            <div
              key={idx}
              className="bg-win-fondo border border-win-borde rounded-lg p-3 hover:border-win-orange/50 transition"
            >
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-win-orange/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-sm font-bold text-win-orange">→</span>
                </div>
                <p className="text-win-texto/80 leading-relaxed text-sm">{caso}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
