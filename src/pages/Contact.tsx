import { useEffect, useState } from "react";
import { IconMail, IconPhone, IconUser, IconMessage, IconBuilding, IconSend } from "@tabler/icons-react";

export default function Contacto() {
  const [servicios, setServicios] = useState<string[]>([]);

  useEffect(() => {
    const fakeFetch = () => {
      const mockServices = [
        { nombre: "Internet Fibra Óptica" },
        { nombre: "Soporte Técnico" },
        { nombre: "Ventas y Contratación" },
        { nombre: "Reclamos y Consultas" },
      ];
      setServicios(mockServices.map((s: any) => s.nombre));
    };

    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServicios(data.map((s: any) => s.nombre)))
      .catch(() => fakeFetch());

  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-orange-600 p-6 text-white text-center">
          <IconMail size={32} className="mx-auto mb-2" />
          <h1 className="text-2xl font-bold tracking-tight">
            Contáctanos
          </h1>
          <p className="mt-1 text-sm opacity-90">
            Estamos aquí para ayudarte, resolver tus dudas y brindarte soporte.
          </p>
        </div>
        <div className="p-6">
          <p className="text-gray-600 text-sm mb-6 text-center">
            Completa el formulario y te responderemos a la brevedad.
          </p>

          <form className="flex flex-col gap-4">
            <div className="relative">
              <IconUser size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                required
              />
            </div>
            <div className="relative">
              <IconMail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                required
              />
            </div>
            <div className="relative">
              <IconBuilding size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
              <select
                className="w-full appearance-none pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white"
                required
                defaultValue=""
              >
                <option value="" disabled className="text-gray-400">Selecciona el tipo de servicio o consulta</option>
                {servicios.map((nombre, idx) => (
                  <option key={idx} value={nombre}>{nombre}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <IconMessage size={20} className="absolute left-3 top-3 text-orange-500" />
              <textarea
                placeholder="Escribe tu mensaje o consulta aquí..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-sm resize-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 focus:ring-4 focus:ring-orange-500/50 transition-colors duration-200 ease-in-out"
            >
              <IconSend size={20} />
              Enviar Mensaje
            </button>

          </form>
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h3 className="text-base font-semibold text-gray-800 mb-3 text-center">
              O contáctanos directamente
            </h3>

            <div className="flex justify-center gap-6">
              <a
                href="mailto:soporte@win.pe"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 transition group"
              >
                <IconMail size={20} className="text-orange-600 group-hover:scale-110 transition" />
                <span className="underline">soporte@win.pe</span>
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <IconPhone size={20} className="text-orange-600" />
                <span className="font-bold tracking-wider">(01) 709-1111</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}