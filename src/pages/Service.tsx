import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import type { Servicio } from "../types/Service";
import ServiceHeader from "../sections/ServiceHeader";
import ServiceRequirementsBenefits from "../sections/ServiceRequirementsBenefits";
import ServiceUseCases from "../sections/ServiceUseCases";
import ServicePaymentSecurity from "../sections/ServicePaymentSecurity";
import ServiceTestimonials from "../sections/ServiceTestimonials";
import ServiceFAQs from "../sections/ServiceFAQs";
import ServiceCTA from "../sections/ServiceCTA";

export default function Service() {
  const { servicioId } = useParams<{ servicioId: Servicio['id'] }>();
  const [servicio, setServicio] = useState<Servicio | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServicio = async () => {
      const response = await fetch('/services.json');
      const servicios: Servicio[] = await response.json();
      const servicioData = servicios.find((s) => s.id === servicioId);

      if (servicioData) {
        setServicio(servicioData);
      } else {
        setServicio(null);
        navigate('/catalogo', { replace: true });
      }
    };
    fetchServicio();
  }, [servicioId]);

  if (!servicio) return <div>Cargando...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <ServiceHeader servicio={servicio} />
      <ServiceRequirementsBenefits servicio={servicio} />
      <ServiceUseCases servicio={servicio} />
      <ServicePaymentSecurity servicio={servicio} />
      <ServiceTestimonials servicio={servicio} />
      <ServiceFAQs servicio={servicio} />
      <ServiceCTA servicio={servicio} />
    </div>
  );
}
