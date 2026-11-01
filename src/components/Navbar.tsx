"use client";

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-widest text-cyan-400 hover:text-cyan-300 transition">
          CYBERTRON STORE
        </Link>
        
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative flex items-center group">
            <ShoppingCart className="w-6 h-6 group-hover:text-cyan-400 transition" />
            {/* Dynamic Cart Badge */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}