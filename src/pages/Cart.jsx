import React from "react";
import CartItems from "../components/cart/CartItems";
import PriceDetails from "../components/cart/PriceDetails";

const Cart = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-0"> 
      {/* Added top padding because your navbar is fixed */}
      
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        

        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Cart Items Column */}
          <div className="lg:col-span-2">
            <CartItems />
          </div>

          {/* Price Details Sidebar */}
          <div className="lg:col-span-1">
            <PriceDetails />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
