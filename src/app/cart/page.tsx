"use client";

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import { Trash2 } from 'lucide-react'; // Trash icon import kiya

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore(); // removeFromCart ko nikal liya
  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-8 border-b pb-4">YOUR CART</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-xl text-gray-500 mb-4">Cart ekdum khaali hai, bhai!</p>
          <Link href="/">
            <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-900 transition-colors">
              Kuch Shoes Dekhein
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md bg-gray-100" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                    <p className="text-gray-500">₹{item.price} x {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="font-bold text-xl text-cyan-600">
                    ₹{item.price * item.quantity}
                  </div>
                  {/* Delete Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition p-2 bg-red-50 rounded-full hover:bg-red-100"
                    title="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-slate-800">Total Amount:</span>
              <span className="text-3xl font-black text-slate-900">₹{totalPrice}</span>
            </div>
            
            <button className="w-full bg-slate-900 text-white py-4 rounded-xl text-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-colors shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}