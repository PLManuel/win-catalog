import { IconLock } from "@tabler/icons-react";

export default function Privacidad() {
  return (
    <div className="max-w-xl mx-auto mt-10 px-2 py-10">
      <div className="relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-win-fondo border-2 border-win-orange rounded-full p-3 shadow-sm">
          <IconLock size={32} className="text-win-orange" />
        </div>
        <div className="bg-white/80 border border-win-borde rounded-xl shadow-sm p-6 pt-10 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-win-orange mb-1 text-center">Política de Privacidad</h1>
          <p className="text-win-texto text-center text-base mb-2">En WIN tu privacidad es prioridad. Los datos que ingreses en este sitio solo se usan para responder tus consultas y nunca se comparten con terceros.</p>
          <ul className="list-disc pl-5 text-win-texto mb-3 text-sm">
            <li>No compartimos tus datos personales con terceros.</li>
            <li>Solo usamos tu información para responder tus consultas y mejorar el servicio.</li>
            <li>Puedes solicitar la eliminación de tus datos en cualquier momento.</li>
          </ul>
          <div className="bg-win-borde/10 rounded-lg p-3 text-xs text-center text-win-texto">
            Para más información, contáctanos en <a href="mailto:privacidad@win.pe" className="text-win-orange underline">privacidad@win.pe</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
