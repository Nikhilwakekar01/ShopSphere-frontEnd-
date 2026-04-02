import React from "react";

export default function SavedForLater({ items = [], onMoveToCart, onRemove }) {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Saved For Later ({items.length})</h2>

      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.id} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 flex items-center gap-4">
            <img src={it.image || "/placeholder.svg"} alt={it.title} className="h-20 w-20 rounded-lg object-cover" />
            <div className="flex-1">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm text-gray-600">{it.description}</p>
              <div className="mt-2 flex items-center gap-4">
                <button
                  onClick={() => onMoveToCart(it.id)}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  MOVE TO CART
                </button>
                <button
                  onClick={() => onRemove(it.id)}
                  className="text-sm font-medium text-gray-600 hover:text-red-600"
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
