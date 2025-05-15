
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts, getCategories } from "@/api/products";
import type { Product, Category } from "@/types/supabase";
import { Skeleton } from "@/components/ui/skeleton";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error("Error loading categories:", err);
        setError("Failed to load categories");
      }
    };
    
    loadCategories();
  }, []);
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(selectedCategory);
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, [selectedCategory]);
  
  return (
    <div className="bg-calabash-baobab min-h-screen py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-calabash-obsidian">
            Shop Our Collections
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Browse our premium hair extensions, ethically sourced and crafted for quality
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(undefined)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === undefined 
                ? "bg-calabash-shea text-white" 
                : "bg-white hover:bg-calabash-rose hover:bg-opacity-50 text-calabash-obsidian"
            }`}
          >
            All Products
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.slug 
                  ? "bg-calabash-shea text-white" 
                  : "bg-white hover:bg-calabash-rose hover:bg-opacity-50 text-calabash-obsidian"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Error message */}
        {error && (
          <div className="text-center p-6 bg-red-50 text-red-700 rounded-md mb-8">
            {error}
          </div>
        )}
        
        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[300px] w-full rounded-md" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
