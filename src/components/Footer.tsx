const Footer = () => (
  <footer className="bg-win-fondo border-t border-win-borde mt-8">
    <div className="py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <img src="/win-logo.png" alt="WIN Logo" className="h-8 w-auto" />
      </div>
      <div className="text-win-texto text-sm">
        &copy; {new Date().getFullYear()} WIN - Perú. Todos los derechos reservados.
      </div>
      <div className="text-win-texto text-xs mt-2 md:mt-0">
        <a href="/privacidad" className="hover:text-win-orange">Política de Privacidad</a>
        <span className="mx-2">|</span>
        <a href="/contacto" className="hover:text-win-orange">Contacto</a>
      </div>
    </div>
  </footer>
);

export default Footer;
