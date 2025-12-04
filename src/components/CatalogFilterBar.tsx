import React from "react";
import type { CatalogFilterBarProps } from '../types/Catalog'

const CatalogFilterBar: React.FC<CatalogFilterBarProps> = ({ search, onSearchChange, categoria, onCategoriaChange, categorias, alcance, onAlcanceChange, alcances }) => (
  <div className="flex flex-col md:flex-row items-center gap-3 mb-6 bg-white/60 rounded-lg p-3 border border-win-borde">
    <input
      type="text"
      value={search}
      onChange={e => onSearchChange(e.target.value)}
      placeholder="Buscar por nombre o alcance..."
      className="flex-1 px-3 py-2 rounded border border-win-borde focus:outline-none focus:ring-2 focus:ring-win-orange text-win-texto bg-white"
      aria-label="Buscar servicios"
    />
    <select
      value={categoria}
      onChange={e => onCategoriaChange(e.target.value)}
      className="px-3 py-2 rounded border border-win-borde focus:outline-none focus:ring-2 focus:ring-win-orange text-win-texto bg-white min-w-40"
      aria-label="Filtrar por categoría"
    >
      <option value="">Todas las categorías</option>
      {categorias.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
    <select
      value={alcance}
      onChange={e => onAlcanceChange(e.target.value)}
      className="px-3 py-2 rounded border border-win-borde focus:outline-none focus:ring-2 focus:ring-win-orange text-win-texto bg-white min-w-40"
      aria-label="Filtrar por alcance"
    >
      <option value="">Todos los alcances</option>
      {alcances.map(a => (
        <option key={a} value={a}>{a}</option>
      ))}
    </select>
  </div>
);

export default CatalogFilterBar;
