export interface MembershipFeature {
  id: string;
  name: string;
  description?: string;
}

export interface MembershipPricing {
  membershipName: string;
  price: number;
  currency: string;
  billingPeriod: string; // "per month", "per year", etc.
  features: {
    [featureId: string]: number | boolean | string;
  };
  description?: string;
  color: string;
  popular?: boolean;
}

export interface MembershipComparison {
  features: MembershipFeature[];
  memberships: MembershipPricing[];
}
