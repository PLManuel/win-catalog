import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CatalogLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-win-fondo">
      <Header />
      <main className="flex-1 bg-win-fondo relative">
        <div
          className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-win-orange/5 to-win-fondo z-0"
        ></div>
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
