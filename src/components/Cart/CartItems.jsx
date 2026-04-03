import React, { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import axios from "axios";




export default function CartItems() {
  const [items, setItems] = useState([]);
  const accessToken = localStorage.getItem('accessToken')

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)));
  };

  const handleSaveForLater = (id) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      setSavedItems([
        ...savedItems,
        {
          id: `s${item.id}`,
          title: item.title,
          description: item.description,
          price: item.price,
          originalPrice: item.originalPrice,
          discount: item.discount,
          image: item.image,
        },
      ]);
      handleRemove(id);
    }
  };

  const handleMoveToCart = (id) => {
    const item = savedItems.find((i) => i.id === id);
    if (item) {
      setItems([
        ...items,
        {
          id: item.id.replace("s", ""),
          title: item.title,
          description: item.description,
          price: item.price,
          originalPrice: item.originalPrice,
          discount: item.discount,
          image: item.image,
          deliveryDate: "Delivery by Dec 15",
          quantity: 1,
        },
      ]);
      setSavedItems(savedItems.filter((i) => i.id !== id));
    }
  };

  // const handleRemoveSaved = (id) => {
  //   setSavedItems(savedItems.filter((item) => item.id !== id));
  // };



  //api for added products in cart



  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.get("https://shopsphere-backend-w8hw.onrender.com/api/getCart", {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const cartData = res.data.cart;

        const formattedItems = cartData.items.map((item) => ({
          id: item.productId._id,
          title: item.productId.name,
          description: item.productId.description,
          price: item.productId.price,
          originalPrice: item.productId.price * 2,
          discount: 50,
          image: item.productId.img,
          deliveryDate: "Fast delivery",
          quantity: item.quantity,
        }));

        setItems(formattedItems);

      } catch (error) {
        console.log(error.response?.data);
      }
    };

    getCart();
  }, []);





  return (
    <div className="space-y-6">
      {/* Cart Items Section */}
      <div className="space-y-4">
        {items.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
            onSaveForLater={handleSaveForLater}
          />
        ))}
      </div>

      {/* Place Order Button */}
      {items.length > 0 && (
        <button className="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600 active:bg-orange-700">
          Place Order
        </button>
      )}

      {items.length === 0 && (
        <div className="rounded-lg bg-white p-8 text-center">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      )}

      {/* Saved For Later Section */}
      {/* {savedItems.length > 0 && (
        <SavedForLater items={savedItems} onMoveToCart={handleMoveToCart} onRemove={handleRemoveSaved} />
      )} */}
    </div>
  );
}
