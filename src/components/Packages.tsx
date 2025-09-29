"use client";

import { PackageComparison } from "@/app/types/package";
import { PACKAGE_COMPARISON } from "@/app/services/packageData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface PackagesProps {
  data?: PackageComparison;
  className?: string;
}

export default function Packages({
  data = PACKAGE_COMPARISON,
  className = "",
}: PackagesProps) {
  const { features, packages } = data;

  const renderFeatureValue = (value: number | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-gray-700 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-700 mx-auto" />
      );
    }
    return <span className="text-gray-700 font-medium">{value}</span>;
  };

  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Packages
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At The Wellnest, we invite you to nurture your strength, beauty, and
            wellbeing through our thoughtfully designed packages. Choose the
            path that resonates with your goals, and let us guide you on a
            transformative journey towards a healthier, more radiant you.
          </p>
        </div>

        {/* Package Comparison Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {/* Features column header */}
                  <th className="w-64 px-6 py-8 text-left border-r border-gray-200">
                    <span className="text-lg font-medium text-gray-800">
                      Features
                    </span>
                  </th>
                  {/* Package headers */}
                  {packages.map((pkg, index) => (
                    <th
                      key={pkg.packageName}
                      className="w-48 px-4 py-8 text-center relative"
                      style={{ backgroundColor: pkg.color }}
                    >
                      <div className="text-white">
                        <div className="text-sm font-medium opacity-90 mb-2">
                          {pkg.packageName}
                        </div>
                        <div className="text-2xl font-bold">
                          {pkg.currency}
                          {pkg.price}
                        </div>
                        {pkg.popular && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">
                              Most Popular
                            </span>
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr
                    key={feature.id}
                    className={
                      featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }
                  >
                    {/* Feature name */}
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="text-gray-800 font-medium">
                        {feature.name}
                      </div>
                    </td>
                    {/* Feature values for each package */}
                    {packages.map((pkg, pkgIndex) => (
                      <td
                        key={`${feature.id}-${pkg.packageName}`}
                        className="px-4 py-6 text-center border border-gray-200"
                      >
                        {renderFeatureValue(pkg.features[feature.id])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3"
          >
            Choose Your Package
          </Button>
        </div>
      </div>
    </div>
  );
}
