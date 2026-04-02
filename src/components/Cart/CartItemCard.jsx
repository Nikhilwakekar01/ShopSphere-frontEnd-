import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItemCard({ item, onRemove, onQuantityChange, onSaveForLater }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="h-24 w-24 rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>

            {/* Price Section */}
            <div className="mt-2 flex items-center gap-3">
              <span className="text-lg font-bold text-gray-900">₹{item.price?.toLocaleString()}</span>
              <span className="text-sm text-gray-500 line-through">₹{item.originalPrice.toLocaleString()}</span>
              <span className="text-sm font-semibold text-green-600">{item.discount}% Off</span>
            </div>

            {/* Delivery Date */}
            <p className="mt-2 text-sm text-green-600 font-medium">{item.deliveryDate}</p>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-200">
            {/* Quantity Counter */}
            <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-2">
              <button
                onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                className="p-1 text-gray-600 hover:text-gray-900"
              >
                <Minus size={16} />
              </button>
              <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
              <button
                onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                className="p-1 text-gray-600 hover:text-gray-900"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Save and Remove Links */}
            <div className="flex gap-6">
              <button
                onClick={() => onSaveForLater(item.id)}
                className="text-sm  font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Save For Later
              </button>
              <button
                onClick={() => onRemove(item.id)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
