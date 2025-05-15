
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/api/products";
import type { Product } from "@/types/supabase";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const featuredProducts = await getFeaturedProducts();
        setProducts(featuredProducts);
        setError(null);
      } catch (err) {
        console.error("Error loading featured products:", err);
        setError("Failed to load featured products");
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian">
              Featured Collections
            </h2>
            <p className="text-gray-600 mt-2">
              Premium quality hair extensions for that perfect finish
            </p>
          </div>
          
          <Link 
            to="/shop" 
            className="mt-4 md:mt-0 text-calabash-shea hover:text-calabash-obsidian font-medium transition-colors"
          >
            View All Products
          </Link>
        </div>
        
        {error && (
          <div className="text-center p-6 bg-red-50 text-red-700 rounded-md mb-8">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[400px] w-full rounded-md" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} featured={true} />
              ))
            ) : (
              <div className="col-span-3 text-center p-6">
                <p className="text-gray-500">No featured products found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
