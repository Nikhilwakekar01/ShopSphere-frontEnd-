import React from "react";
import { Shield } from "lucide-react";

export default function PriceDetails() {
  const priceData = {
    subtotal: 18696,
    discount: -6600,
    platformFee: 0,
    total: 12096,
    savings: 6600,
  };

  return (
    <div className="sticky top-6 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">
      <h2 className="text-lg font-bold text-gray-900 mb-4">PRICE DETAILS</h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Price (3 items)</span>
          <span className="text-gray-900">₹{priceData.subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Discount</span>
          <span className="text-green-600 font-medium">₹{Math.abs(priceData.discount).toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Platform Fee</span>
          <span className="text-gray-900">{priceData.platformFee === 0 ? "FREE" : `₹${priceData.platformFee}`}</span>
        </div>

        <div className="border-t border-gray-200 pt-3 mt-3" />

        <div className="flex justify-between">
          <span className="font-semibold text-gray-900">Total Amount</span>
          <span className="font-bold text-lg text-gray-900">₹{priceData.total.toLocaleString()}</span>
        </div>

        <div className="mt-4 rounded-lg bg-green-50 p-3">
          <p className="text-sm font-medium text-green-700 text-center">
            You will save ₹{priceData.savings.toLocaleString()} on this order
          </p>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-600">
          <Shield size={16} className="text-gray-400" />
          <span>Safe & Secure Payments</span>
        </div>
      </div>
    </div>
  );
}
