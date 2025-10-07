export interface PackageFeature {
  id: string;
  name: string;
  description?: string;
}

export interface PackagePricing {
  packageName: string;
  price: number;
  currency: string;
  features: {
    [featureId: string]: number | boolean | string;
  };
  description?: string;
  color: string;
  popular?: boolean;
}

export interface PackageComparison {
  features: PackageFeature[];
  packages: PackagePricing[];
}
