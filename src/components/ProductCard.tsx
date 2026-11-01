"use client";

import { useCartStore } from '@/store/cartStore';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <h2 className="text-xl font-bold text-slate-800">{product.name}</h2>
      <p className="text-cyan-600 font-bold text-lg mt-1">₹{product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-slate-900 text-white py-2.5 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors font-semibold shadow-md active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  );
}