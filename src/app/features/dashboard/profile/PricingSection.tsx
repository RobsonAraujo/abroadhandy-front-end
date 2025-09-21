"use client";

import { Input } from "@/app/components/ui/input";

export default function PricingSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pricing</h2>
        <p className="text-gray-600">Set your session rates</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Session Rates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              30-minute session
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                type="number"
                placeholder="25"
                className="pl-8"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Recommended: $20-40
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              60-minute session
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                type="number"
                placeholder="45"
                className="pl-8"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Recommended: $35-70
            </p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 <strong>Tip:</strong> Start with competitive rates and
            increase them as you gain more reviews and experience.
          </p>
        </div>
      </div>
    </div>
  );
}
