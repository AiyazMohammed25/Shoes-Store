import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-black text-center mb-10 text-slate-900 tracking-wide">
        LATEST <span className="text-cyan-500">DROPS</span>
      </h1>
      
      {/* Grid Layout for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}