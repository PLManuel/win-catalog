export interface CatalogFilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  categoria: string;
  onCategoriaChange: (value: string) => void;
  categorias: string[];
  alcance: string;
  onAlcanceChange: (value: string) => void;
  alcances: string[];
}