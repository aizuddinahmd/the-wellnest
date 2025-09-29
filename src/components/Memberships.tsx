"use client";

import { MembershipComparison } from "@/app/types/membership";
import { MEMBERSHIP_COMPARISON } from "@/app/services/membershipData";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface MembershipsProps {
  data?: MembershipComparison;
  className?: string;
}

export default function Memberships({
  data = MEMBERSHIP_COMPARISON,
  className = "",
}: MembershipsProps) {
  const { features, memberships } = data;

  const renderFeatureValue = (value: number | boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );
    }

    if (typeof value === "string") {
      return <span className="text-gray-700 font-medium text-sm">{value}</span>;
    }

    return <span className="text-gray-700 font-medium">{value}</span>;
  };

  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Membership
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At The Wellnest, we invite you to nurture your strength, beauty, and
            wellbeing through our thoughtfully designed memberships. Choose the
            path that resonates with your goals, and let us guide you on a
            transformative journey towards a healthier, more radiant you.
          </p>
        </div>

        {/* Membership Comparison Table */}
        <Card className="overflow-hidden">
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
                  {/* Membership headers */}
                  {memberships.map((membership) => (
                    <th
                      key={membership.membershipName}
                      className="w-56 px-4 py-8 text-center relative"
                      style={{ backgroundColor: membership.color }}
                    >
                      <div className="text-white">
                        <div className="text-lg font-medium opacity-90 mb-2">
                          {membership.membershipName}
                        </div>
                        <div className="text-2xl font-bold">
                          {membership.currency}
                          {membership.price}
                        </div>
                        <div className="text-sm opacity-80 mt-1">
                          {membership.billingPeriod}
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
                    {/* Feature values for each membership */}
                    {memberships.map((membership) => (
                      <td
                        key={`${feature.id}-${membership.membershipName}`}
                        className="px-4 py-6 text-center border border-gray-200"
                      >
                        {renderFeatureValue(membership.features[feature.id])}
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
