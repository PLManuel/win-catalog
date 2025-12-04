import type { ServiceRequirementsBenefitsProps } from "../types/Service";
import { IconBolt, IconUsers, IconTrendingUp, IconShield, IconDeviceMobile } from "@tabler/icons-react";

export default function ServiceRequirementsBenefits({ servicio }: ServiceRequirementsBenefitsProps) {
  const benefitIcons = [
    <IconBolt key="1" className="w-6 h-6" />,
    <IconUsers key="2" className="w-6 h-6" />,
    <IconTrendingUp key="3" className="w-6 h-6" />,
    <IconShield key="4" className="w-6 h-6" />,
    <IconDeviceMobile key="5" className="w-6 h-6" />,
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold text-win-texto mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-win-orange rounded-full"></div>
          Requisitos Técnicos
        </h2>
        <div className="space-y-3">
          {servicio.requisitos_tecnicos.map((requisito, idx) => (
            <div key={idx} className="flex gap-3 group">
              <div className="mt-1 w-5 h-5 rounded-full bg-win-orange/20 flex items-center justify-center shrink-0 group-hover:bg-win-orange/30 transition">
                <span className="text-xs font-bold text-win-orange">{idx + 1}</span>
              </div>
              <p className="text-win-texto/80 leading-relaxed text-sm">{requisito}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-win-texto mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-win-orange rounded-full"></div>
          Beneficios Principales
        </h2>
        <div className="space-y-3">
          {servicio.beneficios.map((beneficio, idx) => (
            <div key={idx} className="flex gap-3 group">
              <div className="text-win-orange shrink-0 mt-1">{benefitIcons[idx % benefitIcons.length]}</div>
              <p className="text-win-texto/80 leading-relaxed text-sm group-hover:text-win-texto transition">
                {beneficio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
