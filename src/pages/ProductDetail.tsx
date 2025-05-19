import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Heart,
  ChevronRight,
  MinusCircle,
  PlusCircle,
  Star,
  Truck,
  CheckCircle,
} from "lucide-react";
import { getProductBySlug } from "@/api/products";
import type { Product } from "@/types/supabase";
import { Skeleton } from "@/components/ui/skeleton";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;

      try {
        setLoading(true);
        const data = await getProductBySlug(productId);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleWishlist = () => {
    // Wishlist functionality would go here
    console.log("Added to wishlist:", product?.name);
  };

  if (loading) {
    return (
      <div className="bg-calabash-baobab py-12">
        <div className="container-custom">
          {/* Enhanced breadcrumb skeleton */}
          <div className="mb-6 flex items-center gap-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <ChevronRight size={16} className="text-gray-300" />
            <Skeleton className="h-4 w-24 rounded-md" />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Enhanced Image skeleton */}
              <div>
                <Skeleton className="aspect-square w-full rounded-lg" />
                <div className="flex gap-3 mt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="w-20 h-20 rounded-md" />
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-10 w-3/4 mb-2 rounded-md" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="w-4 h-4 mr-1 rounded-full" />
                    ))}
                  </div>
                  <Skeleton className="h-4 w-20 rounded-md" />
                </div>
                <Skeleton className="h-8 w-1/4 mb-6 rounded-md" />
                <div className="space-y-2 mb-6">
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-3/4 rounded-md" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-b pb-2">
                      <Skeleton className="h-4 w-20 mb-1 rounded-md" />
                      <Skeleton className="h-6 w-24 rounded-md" />
                    </div>
                  ))}
                </div>
                <Skeleton className="h-12 w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return <NotFound />;
  }

  // Get all product images or use a placeholder
  const productImages =
    product.images && product.images.length > 0
      ? product.images.map((img) => img.image_url)
      : ["https://placehold.co/600x800?text=No+Image"];

  // Transform attributes to display
  const displayAttributes = product.attributes
    ? product.attributes.reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {} as Record<string, string>)
    : {};

  return (
    <div className="bg-calabash-baobab py-12">
      <div className="container-custom">
        {/* Enhanced breadcrumb navigation */}
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-calabash-shea transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <Link
              to="/shop"
              className="hover:text-calabash-shea transition-colors"
            >
              Shop
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-calabash-obsidian font-medium">
              {product.name}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Enhanced Product Images */}
            <div>
              <div className="mb-4 aspect-square overflow-hidden rounded-lg relative group">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-calabash-obsidian opacity-0 group-hover:opacity-10 transition-opacity"></div>

                {/* Badge overlay */}
                {product.bestseller && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-calabash-shea text-white text-xs uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                      Bestseller
                    </span>
                  </div>
                )}
                {product.new_arrival && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500 text-white text-xs uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                      New Arrival
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 transition-all ${
                      selectedImage === index
                        ? "ring-2 ring-calabash-shea transform scale-[1.02]"
                        : "border border-gray-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-display font-bold text-calabash-obsidian mb-2 leading-tight">
                {product.name}
              </h1>

              {/* Enhanced reviews summary */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={
                        star <= 4.5
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-yellow-400 fill-transparent"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(42 reviews)</span>
              </div>

              <div className="text-2xl font-semibold text-calabash-shea mb-6">
                R{product.price.toFixed(2)}
              </div>

              <div className="prose prose-sm mb-6 text-gray-600">
                <p>{product.description}</p>
              </div>

              {/* Enhanced Product Attributes */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {Object.entries(displayAttributes).map(([key, value]) => {
                  // Special handling for "length" attribute to show options
                  if (key === "length") {
                    return (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-1 capitalize">
                          {key}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {['16"', '18"', '20"', '22"', '24"'].map(
                            (size, idx) => (
                              <button
                                key={idx}
                                className={`px-3 py-1.5 border rounded-md text-sm transition-colors ${
                                  size === value
                                    ? "border-calabash-shea bg-calabash-shea bg-opacity-10 text-calabash-shea"
                                    : "border-gray-200 hover:border-calabash-shea"
                                }`}
                              >
                                {size}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    );
                  }

                  // Special handling for "texture" attribute to show as select
                  if (key === "texture") {
                    return (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-gray-500 mb-1 capitalize">
                          {key}
                        </span>
                        <select className="px-3 py-2 border border-gray-200 rounded-md focus:border-calabash-shea focus:ring-calabash-shea">
                          <option selected={value === "Straight"}>
                            Straight
                          </option>
                          <option selected={value === "Body Wave"}>
                            Body Wave
                          </option>
                          <option selected={value === "Deep Wave"}>
                            Deep Wave
                          </option>
                          <option selected={value === "Kinky Curly"}>
                            Kinky Curly
                          </option>
                        </select>
                      </div>
                    );
                  }

                  // Default attribute display
                  return (
                    <div key={key} className="flex flex-col border-b pb-3">
                      <span className="text-sm text-gray-500 mb-1 capitalize">
                        {key}
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Quantity
                </label>
                <div className="flex items-center h-12">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="flex items-center justify-center w-12 h-full border border-r-0 border-gray-200 rounded-l-md hover:bg-gray-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <MinusCircle size={18} className="text-gray-500" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value))
                    }
                    className="w-16 h-full border-t border-b border-gray-200 text-center focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="flex items-center justify-center w-12 h-full border border-l-0 border-gray-200 rounded-r-md hover:bg-gray-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <PlusCircle size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  onClick={handleAddToCart}
                  className="flex-grow px-6 py-3 bg-calabash-obsidian hover:bg-calabash-shea text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:shadow-md"
                >
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </Button>
                <Button
                  onClick={handleWishlist}
                  className="px-6 py-3 border border-calabash-obsidian text-calabash-obsidian rounded-md font-medium hover:bg-calabash-obsidian hover:text-white transition-colors flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  <Heart size={18} />
                  <span>Add to Wishlist</span>
                </Button>
              </div>

              {/* Enhanced shipping info cards */}
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-green-50 border border-green-100 rounded-md text-green-800 flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Truck size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Free shipping</p>
                    <p className="text-sm">On all orders over R200</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-md text-blue-800 flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Ethically sourced</p>
                    <p className="text-sm">100% human hair, premium quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products section - simple suggestion */}
        <div className="mt-16">
          <h2 className="text-2xl font-display font-bold text-calabash-obsidian mb-6 relative inline-block">
            You May Also Like
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-calabash-shea"></span>
          </h2>
          <p className="text-gray-500 mb-8">
            Consider these products that pair well with {product.name}
          </p>

          {/* Related products would go here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
