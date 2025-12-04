import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import './index.css';

import CatalogLayout from "./layouts/CatalogLayout";
import Home from "./pages/Home";
import Service from "./pages/Service.tsx";
import Contact from "./pages/Contact.tsx";
import Privacy from "./pages/Privacy.tsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/catalogo" />} />
      <Route path="catalogo" element={<CatalogLayout />}> 
        <Route index element={<Home />} />
        <Route path=":servicioId" element={<Service />} />
      </Route>
      <Route element={<CatalogLayout />}>
        <Route path="contacto" element={<Contact />} />
        <Route path="privacidad" element={<Privacy />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
