import { MembershipComparison } from "@/app/types/membership";

export const MEMBERSHIP_COMPARISON: MembershipComparison = {
  features: [
    {
      id: "personalised_facial",
      name: "No. of session of Personalised Facial",
      description: "Number of personalised facial sessions included",
    },
    {
      id: "reformer_pilates",
      name: "No. of sessions of Reformer Pilates",
      description: "Number of reformer pilates sessions included",
    },
    {
      id: "body_composition_analysis",
      name: "Monthly Body Composition Analysis",
      description: "Monthly body composition analysis included",
    },
    {
      id: "skin_analysis",
      name: "Skin Analysis & Follow Up",
      description: "Skin analysis with follow-up consultation",
    },
    {
      id: "dietician_consultation",
      name: "Dietician Consultation & Follow Up",
      description: "Dietician consultation with follow-up",
    },
    {
      id: "treatment_discount",
      name: "10% off for any treatment/products",
      description: "10% discount on treatments and products",
    },
    {
      id: "support_group_access",
      name: "Free Access To Our Support Group / Classes",
      description: "Free access to support groups and classes",
    },
  ],
  memberships: [
    {
      membershipName: "Essentials",
      price: 299,
      currency: "RM",
      billingPeriod: "per month",
      color: "#8C9B8C", // Olive green
      description: "Essential wellness membership",
      features: {
        personalised_facial: 1,
        reformer_pilates: "5 (RM50/class)",
        body_composition_analysis: true,
        skin_analysis: true,
        dietician_consultation: false,
        treatment_discount: false,
        support_group_access: false,
      },
    },
    {
      membershipName: "Premium",
      price: 699,
      currency: "RM",
      billingPeriod: "per month",
      color: "#B8C9B8", // Light green
      description: "Premium wellness membership",
      features: {
        personalised_facial: 1,
        reformer_pilates: "15 (RM46/class)",
        body_composition_analysis: true,
        skin_analysis: true,
        dietician_consultation: true,
        treatment_discount: false,
        support_group_access: false,
      },
    },
    {
      membershipName: "VIP",
      price: 999,
      currency: "RM",
      billingPeriod: "per month",
      color: "#D4B8B8", // Light rose/beige
      description: "VIP wellness membership",
      popular: true,
      features: {
        personalised_facial: 2,
        reformer_pilates: "Unlimited",
        body_composition_analysis: true,
        skin_analysis: true,
        dietician_consultation: true,
        treatment_discount: true,
        support_group_access: true,
      },
    },
  ],
};
