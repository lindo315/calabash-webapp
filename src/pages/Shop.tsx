import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts, getCategories } from "@/api/products";
import type { Product, Category } from "@/types/supabase";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Filter,
  Grid,
  List,
  ChevronDown,
  ArrowUpDown,
  Search,
} from "lucide-react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // New state for UI enhancements
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortOption, setSortOption] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  // Filter products by search term
  const filteredProducts = searchTerm.trim()
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "nameAsc":
        return a.name.localeCompare(b.name);
      case "nameDesc":
        return b.name.localeCompare(a.name);
      case "newest":
      default:
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
    }
  });

  return (
    <div className="bg-calabash-baobab min-h-screen py-12">
      <div className="container-custom">
        {/* Enhanced Page Header */}
        <div className="relative mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-10 h-0.5 bg-calabash-shea"></span>
            <span className="text-calabash-shea font-medium text-sm uppercase tracking-wider">
              Collections
            </span>
            <span className="w-10 h-0.5 bg-calabash-shea"></span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-calabash-obsidian relative inline-block">
            Shop Our Collections
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-calabash-shea"></span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Browse our premium hair extensions, ethically sourced and crafted
            for quality
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory(undefined)}
            className={`px-6 py-2.5 rounded-full transition-all transform hover:scale-105 ${
              selectedCategory === undefined
                ? "bg-calabash-shea text-white shadow-md"
                : "bg-white hover:bg-calabash-rose hover:bg-opacity-20 text-calabash-obsidian border border-gray-200"
            }`}
          >
            All Products
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-2.5 rounded-full transition-all transform hover:scale-105 ${
                selectedCategory === category.slug
                  ? "bg-calabash-shea text-white shadow-md"
                  : "bg-white hover:bg-calabash-rose hover:bg-opacity-20 text-calabash-obsidian border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Enhanced Filter and Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Box */}
            <div className="relative w-full md:w-auto md:flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-calabash-shea"
              />
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Sort Control */}
              <div className="relative w-full md:w-auto">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-md appearance-none pr-10 bg-white focus:outline-none focus:ring-1 focus:ring-calabash-shea w-full"
                >
                  <option value="newest">Newest First</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="nameAsc">Name: A-Z</option>
                  <option value="nameDesc">Name: Z-A</option>
                </select>
                <ArrowUpDown
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              {/* Toggle Filter Panel */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="px-4 py-2 border border-gray-200 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Filter size={18} />
                <span className="hidden sm:inline">Filters</span>
              </button>

              {/* View Mode Toggle */}
              <div className="hidden md:flex bg-gray-100 rounded-md p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md ${
                    viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-500"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-md ${
                    viewMode === "list" ? "bg-white shadow-sm" : "text-gray-500"
                  }`}
                  aria-label="List view"
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Panel - collapsible */}
          {isFilterOpen && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Price Range Filter */}
              <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-md"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-md"
                  />
                </div>
              </div>

              {/* Weight Filter */}
              <div>
                <h3 className="text-sm font-medium mb-2">Weight</h3>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <span>100g</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <span>120g</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <span>150g</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <span>200g</span>
                  </label>
                </div>
              </div>

              {/* Additional Filter */}
              <div>
                <h3 className="text-sm font-medium mb-2">Product Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <span>Bestseller</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <span>New Arrival</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <span>Featured</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="text-center p-6 bg-red-50 text-red-700 rounded-md mb-8 shadow-md">
            <p className="font-medium">{error}</p>
            <p className="mt-2">
              Please try again or contact support if the issue persists.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[300px] w-full rounded-lg shadow-sm" />
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
          <>
            {/* Results count */}
            <div className="mb-6 text-gray-600">
              Showing {sortedProducts.length}{" "}
              {sortedProducts.length === 1 ? "product" : "products"}
              {selectedCategory &&
                categories.find((c) => c.slug === selectedCategory) &&
                ` in ${
                  categories.find((c) => c.slug === selectedCategory)?.name
                }`}
              {searchTerm && ` matching "${searchTerm}"`}
            </div>

            {/* Products Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* List View */
              <div className="flex flex-col gap-4 animate-fade-in">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col md:flex-row gap-6"
                  >
                    <div className="w-full md:w-48 h-48 shrink-0">
                      <img
                        src={
                          product.images && product.images.length > 0
                            ? product.images[0].image_url
                            : "https://placehold.co/600x800?text=No+Image"
                        }
                        alt={product.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <div className="flex-grow flex flex-col">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-medium text-calabash-obsidian">
                          {product.name}
                        </h3>
                        <span className="font-semibold text-calabash-shea">
                          R{product.price.toFixed(2)}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {product.description || "No description available."}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {product.attributes &&
                          product.attributes.map((attr, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                            >
                              {attr.name}: {attr.value}
                            </span>
                          ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            // Add to cart logic
                          }}
                          className="px-4 py-2 bg-calabash-obsidian hover:bg-calabash-shea text-white rounded-md transition-colors text-sm"
                        >
                          Add to Cart
                        </button>
                        <button className="px-4 py-2 border border-calabash-obsidian text-calabash-obsidian hover:bg-calabash-obsidian hover:text-white rounded-md transition-colors text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-calabash-obsidian mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm
                    ? `No products matching "${searchTerm}"`
                    : "No products available in this category."}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(undefined);
                  }}
                  className="px-6 py-2 bg-calabash-shea text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
