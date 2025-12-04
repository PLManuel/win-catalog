import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import type { Servicio } from "../types/Service";
import ServiceSkeleton from "../components/ServiceSkeleton";
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scroll-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [servicio]);

  if (!servicio) return <ServiceSkeleton />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16 animate-fade-in">
      <ServiceHeader servicio={servicio} />
      <div className="scroll-animate opacity-0">
        <ServiceRequirementsBenefits servicio={servicio} />
      </div>
      <div className="scroll-animate opacity-0">
        <ServiceUseCases servicio={servicio} />
      </div>
      <div className="scroll-animate opacity-0">
        <ServicePaymentSecurity servicio={servicio} />
      </div>
      <div className="scroll-animate opacity-0">
        <ServiceTestimonials servicio={servicio} />
      </div>
      <div className="scroll-animate opacity-0">
        <ServiceFAQs servicio={servicio} />
      </div>
      <div className="scroll-animate opacity-0">
        <ServiceCTA servicio={servicio} />
      </div>
    </div>
  );
}
