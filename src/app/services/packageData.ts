import { PackageComparison } from "@/app/types/package";

export const PACKAGE_COMPARISON: PackageComparison = {
  features: [
    {
      id: "signature_facial",
      name: "Free Signature Facial",
      description: "Complimentary signature facial treatment",
    },
    {
      id: "reformer_pilates",
      name: "Sessions Of Reformer Pilates",
      description: "Number of reformer pilates sessions included",
    },
    {
      id: "validity_months",
      name: "Months Of Validity",
      description: "Package validity period in months",
    },
    {
      id: "body_composition_analysis",
      name: "One-Time Free Body Composition Analysis",
      description: "Complimentary body composition analysis",
    },
    {
      id: "skin_analysis",
      name: "One-Time Free Skin Analysis",
      description: "Complimentary skin analysis",
    },
    {
      id: "mental_health_assessment",
      name: "Free Mental Health Assessment",
      description: "Complimentary mental health assessment",
    },
    {
      id: "dietician_consultation",
      name: "One-Time Free Dietician Consultation",
      description: "Complimentary dietician consultation",
    },
  ],
  packages: [
    {
      packageName: "Single Trial",
      price: 99,
      currency: "RM",
      color: "#8C9B8C",
      description: "Perfect for trying out our services",
      features: {
        signature_facial: 1,
        reformer_pilates: 1,
        validity_months: 1,
        body_composition_analysis: false,
        skin_analysis: false,
        mental_health_assessment: false,
        dietician_consultation: false,
      },
    },
    {
      packageName: "Bloom",
      price: 299,
      currency: "RM",
      color: "#B8C9B8",
      description: "Essential wellness package",
      features: {
        signature_facial: 1,
        reformer_pilates: 4,
        validity_months: 1,
        body_composition_analysis: true,
        skin_analysis: false,
        mental_health_assessment: false,
        dietician_consultation: false,
      },
    },
    {
      packageName: "Florish",
      price: 499,
      currency: "RM",
      color: "#A38C8C",
      description: "Comprehensive wellness journey",
      features: {
        signature_facial: 2,
        reformer_pilates: 8,
        validity_months: 2,
        body_composition_analysis: true,
        skin_analysis: true,
        mental_health_assessment: true,
        dietician_consultation: false,
      },
    },
    {
      packageName: "Radiance",
      price: 699,
      currency: "RM",
      color: "#D4B8B8",
      description: "Complete wellness transformation",
      popular: true,
      features: {
        signature_facial: 2,
        reformer_pilates: 12,
        validity_months: 3,
        body_composition_analysis: true,
        skin_analysis: true,
        mental_health_assessment: true,
        dietician_consultation: true,
      },
    },
  ],
};
