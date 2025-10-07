"use client";

import { useState } from "react";
import { PackageComparison } from "@/app/types/package";
import { PACKAGE_COMPARISON } from "@/app/services/packageData";
import { Card } from "@/components/ui/card";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";

interface PackagesProps {
  data?: PackageComparison;
  className?: string;
}

export default function Packages({
  data = PACKAGE_COMPARISON,
  className = "",
}: PackagesProps) {
  const { features, packages } = data;
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);

  const renderFeatureValue = (value: number | boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-gray-700 font-medium">{value}</span>;
  };

  const handlePrevPackage = () => {
    setCurrentPackageIndex((prev) =>
      prev === 0 ? packages.length - 1 : prev - 1
    );
  };

  const handleNextPackage = () => {
    setCurrentPackageIndex((prev) =>
      prev === packages.length - 1 ? 0 : prev + 1
    );
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

        {/* Mobile View - Card Slider */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Package Card */}
            <Card className="overflow-hidden">
              {/* Package Header */}
              <div
                className="px-6 py-8 text-center"
                style={{ backgroundColor: packages[currentPackageIndex].color }}
              >
                <div className="text-white">
                  <div className="text-2xl font-medium mb-2">
                    {packages[currentPackageIndex].packageName}
                  </div>
                  <div className="text-4xl font-bold">
                    {packages[currentPackageIndex].currency}
                    {packages[currentPackageIndex].price}
                  </div>
                  <p className="text-sm mt-2 opacity-90">
                    {packages[currentPackageIndex].description}
                  </p>
                </div>
              </div>

              {/* Package Features */}
              <div className="divide-y divide-gray-200">
                {features.map((feature, featureIndex) => (
                  <div
                    key={feature.id}
                    className={`px-6 py-4 flex justify-between items-center ${
                      featureIndex % 2 === 0 ? "bg-white" : "bg-[#f2ece7]"
                    }`}
                  >
                    <div className="text-gray-800 font-medium text-sm flex-1 text-left">
                      {feature.name}
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {renderFeatureValue(
                        packages[currentPackageIndex].features[feature.id]
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handlePrevPackage}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Previous package"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <div className="flex gap-2">
                {packages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPackageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentPackageIndex
                        ? "w-8 bg-gray-700"
                        : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to package ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextPackage}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Next package"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View - Table */}
        <Card className="overflow-hidden hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {/* Features column header */}
                  <th className="w-64 px-6 py-8 text-center border-r border-gray-200">
                    <span className="text-lg font-medium text-gray-800">
                      Features
                    </span>
                  </th>
                  {/* Package headers */}
                  {packages.map((pkg) => (
                    <th
                      key={pkg.packageName}
                      className="w-56 px-4 py-8 text-center relative"
                      style={{ backgroundColor: pkg.color }}
                    >
                      <div className="text-white">
                        <div className="text-lg font-medium opacity-90 mb-2">
                          {pkg.packageName}
                        </div>
                        <div className="text-2xl font-bold">
                          {pkg.currency}
                          {pkg.price}
                        </div>
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
                      featureIndex % 2 === 0 ? "bg-white" : "bg-[#f2ece7]"
                    }
                  >
                    {/* Feature name */}
                    <td className="px-6 py-6 border-r border-gray-200">
                      <div className="text-gray-800 font-medium text-center">
                        {feature.name}
                      </div>
                    </td>
                    {/* Feature values for each package */}
                    {packages.map((pkg) => (
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
      </div>
    </div>
  );
}
