import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/api/products";
import type { Product } from "@/types/supabase";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";

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
            {/* Enhanced section heading with decorative elements */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-10 h-0.5 bg-calabash-shea"></span>
              <span className="text-calabash-shea font-medium text-sm uppercase tracking-wider">
                Collections
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian mb-2">
              Featured Collections
            </h2>
            <p className="text-gray-600">
              Premium quality hair extensions for that perfect finish
            </p>
          </div>

          <Link
            to="/shop"
            className="mt-4 md:mt-0 text-calabash-shea hover:text-calabash-obsidian font-medium transition-colors flex items-center gap-1 group"
          >
            <span>View All Products</span>
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform"
            />
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
                {/* Enhanced skeleton with rounded corners and card-like appearance */}
                <Skeleton className="h-[400px] w-full rounded-lg shadow-sm" />
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-6 w-1/2 rounded-md" />
                <div className="flex justify-between">
                  <Skeleton className="h-5 w-20 rounded-md" />
                  <Skeleton className="h-5 w-24 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  featured={true}
                />
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
