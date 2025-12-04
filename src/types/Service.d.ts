export interface ServiceHeaderProps {
  servicio: Servicio;
}

export interface ServiceRequirementsBenefitsProps {
  servicio: Servicio;
}

export interface ServiceUseCasesProps {
  servicio: Servicio;
}

export interface ServicePaymentSecurityProps {
  servicio: Servicio;
}

export interface ServiceTestimonialsProps {
  servicio: Servicio;
}

export interface ServiceFAQsProps {
  servicio: Servicio;
}

export interface ServiceCTAProps {
  servicio: Servicio;
}

export interface Testimonio {
  cliente: string;
  comentario: string;
}

export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export interface EnlaceDeContratacion {
  texto: string;
  url: string;
}

export interface Servicio {
  id: string;
  nombre: string;
  alcance: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  imagen_secundaria: string;
  icon: string;
  caracteristicas: string[];
  descripcion_detallada: string;
  requisitos_tecnicos: string[];
  beneficios: string[];
  casos_de_uso: string[];
  opciones_de_pago: string[];
  testimonios: Testimonio[];
  faqs: FAQ[];
  enlaces_de_contratacion: EnlaceDeContratacion[];
  certificaciones_o_seguridad: string[];
}

export interface ServiceCardProps {
  servicio: Servicio;
}

export interface ServiceDialogProps {
  servicio: Servicio;
  onClose: () => void;
  isClosing?: boolean;
}