import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
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
  
  if (loading) {
    return (
      <div className="bg-calabash-baobab py-12">
        <div className="container-custom">
          <div className="mb-6">
            <div className="w-24"><Skeleton className="h-6" /></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <Skeleton className="aspect-square w-full rounded-lg" />
                <div className="flex gap-3 mt-4">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="w-20 h-20 rounded-md" />
                  ))}
                </div>
              </div>
              
              <div>
                <Skeleton className="h-10 w-3/4 mb-2" />
                <Skeleton className="h-8 w-1/4 mb-6" />
                <div className="space-y-2 mb-6">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-b pb-2">
                      <Skeleton className="h-4 w-20 mb-1" />
                      <Skeleton className="h-6 w-24" />
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
  const productImages = product.images && product.images.length > 0 
    ? product.images.map(img => img.image_url) 
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
        <div className="mb-6">
          <Link to="/shop" className="text-calabash-shea hover:text-calabash-obsidian transition-colors">
            &larr; Back to Shop
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-3 overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${
                      selectedImage === index ? "ring-2 ring-calabash-shea" : ""
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
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-display font-bold text-calabash-obsidian mb-2">
                {product.name}
              </h1>
              
              <div className="text-2xl font-semibold text-calabash-shea mb-6">
                R{product.price.toFixed(2)}
              </div>
              
              <div className="prose prose-sm mb-6">
                <p>{product.description}</p>
              </div>
              
              {/* Product Attributes */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(displayAttributes).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <p className="text-sm text-gray-600 capitalize">{key}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-10 h-10 bg-calabash-rose bg-opacity-30 flex items-center justify-center rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                    className="w-16 h-10 text-center border-y border-calabash-rose border-opacity-30 focus:outline-none"
                    min="1"
                  />
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 bg-calabash-rose bg-opacity-30 flex items-center justify-center rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                onClick={handleAddToCart}
                className="bg-calabash-shea hover:bg-calabash-obsidian text-white py-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
              
              {/* Additional Information */}
              <div className="mt-8 text-sm text-gray-600">
                <p>Premium quality hair extensions</p>
                <p>Ethically sourced and crafted for quality</p>
                <p>Free shipping on orders over R200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
