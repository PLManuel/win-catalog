import { Link } from "react-router";

const Header = () => (
  <header className="bg-win-fondo border-b border-win-borde shadow-sm">
    <div className="max-w-7xl mx-auto py-2 px-4 flex items-center justify-between">
      <Link to="/">
        <img src="/win-logo.png" alt="WIN Logo" className="h-12 p-2 w-auto" />
      </Link>
      <nav className="flex gap-6">
        <Link to="/" className="text-win-texto hover:text-win-orange font-medium">Catalogo</Link>
        <Link to="/contacto" className="text-win-texto hover:text-win-orange font-medium">Contacto</Link>
      </nav>
    </div>
  </header>
);

export default Header;
