"use client";
import {
  getCartItem,
  removercart,
  updateCartQuantity
} from "@/app/actions/actions";
import { IProduct } from "@/app/interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartItem, setCartItem] = useState<IProduct[]>([]);

  useEffect(() => {
    setCartItem(getCartItem());
  }, []);

  const calculateTotalPrice = () => {
    return cartItem.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removercart(id);
        setCartItem(getCartItem());
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, inventory: Math.max(1, quantity) } : item
      )
    );
    updateCartQuantity(id, Math.max(1, quantity)); 
  };

  const handleProceedToCheckout = () => {
    Swal.fire("Proceeding to Checkout", "Redirecting to checkout page...", "info");
  };

  return (
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItem.map((item) => (
          <div key={item._id} className="border rounded-lg p-4 shadow-lg bg-white">
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-52 object-cover rounded-md"
              width={3393}  // Replace with actual image width
              height={5090} // Replace with actual image height
              placeholder="blur" // Enables placeholder functionality
              blurDataURL="/path/to/your/placeholder.jpg" // Provide a placeholder URL or base64-encoded image
            />
            <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleQuantityChange(item._id, item.inventory - 1)} 
                  className="px-2 py-1 bg-gray-300 rounded"
                  disabled={item.inventory <= 1}
                >
                  -
                </button>
                <span>{item.inventory}</span>
                <button 
                  onClick={() => handleQuantityChange(item._id, item.inventory + 1)} 
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <span className="text-lg font-bold">${item.price * item.inventory}</span>
            </div>
            <button 
              onClick={() => handleRemove(item._id)} 
              className="w-full bg-red-500 text-white mt-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Show Total Price at the Bottom */}
      {cartItem.length > 0 && (
        <div className="text-center mt-6">
          <p className="text-2xl font-bold">Total Price: ${calculateTotalPrice()}</p>

          {/* ✅ Proceed to Checkout Button */}
          <button 
            onClick={handleProceedToCheckout} 
            className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
