import { useEffect, useState } from "react";
import type { Servicio } from "../types/Service";
import ServiceCard from "../components/ServiceCard";
import CatalogFilterBar from "../components/CatalogFilterBar";

export default function Home() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("");
  const [alcance, setAlcance] = useState("");

  useEffect(() => {
    const fetchServicios = async () => {
      const response = await fetch('/services.json');
      const data = await response.json();
      setServicios(data);
    };
    fetchServicios();
  }, []);

  if (servicios.length === 0) return <div>Cargando servicios...</div>;

  const categorias = Array.from(new Set(servicios.map(s => s.categoria).filter(Boolean))).sort();
  const alcances = Array.from(new Set(servicios.map(s => s.alcance).filter(Boolean))).sort();

  const serviciosFiltrados = servicios.filter(s => {
    const matchSearch =
      s.nombre.toLowerCase().includes(search.toLowerCase()) ||
      s.alcance.toLowerCase().includes(search.toLowerCase());
    const matchCategoria = categoria ? s.categoria === categoria : true;
    const matchAlcance = alcance ? s.alcance === alcance : true;
    return matchSearch && matchCategoria && matchAlcance;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-win-orange mb-2 text-center">Catálogo de Servicios WIN</h1>
      <p className="text-win-texto text-lg mb-8 text-center">Explora todos los servicios que WIN tiene para ti: soluciones residenciales, empresariales y soporte digital.</p>
      <CatalogFilterBar
        search={search}
        onSearchChange={setSearch}
        categoria={categoria}
        onCategoriaChange={setCategoria}
        categorias={categorias}
        alcance={alcance}
        onAlcanceChange={setAlcance}
        alcances={alcances}
      />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {serviciosFiltrados.length > 0 ? (
          serviciosFiltrados.map((servicio) => (
            <ServiceCard key={servicio.id} servicio={servicio} />
          ))
        ) : (
          <div className="col-span-full text-center text-win-texto py-8">No se encontraron servicios.</div>
        )}
      </div>
    </div>
  );
}
