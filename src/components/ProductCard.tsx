import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { type Product } from "@/types/supabase";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  // Function to get the first image or a placeholder
  const getMainImage = () => {
    if (product.images && product.images.length > 0) {
      return product.images[0].image_url;
    }
    return "https://placehold.co/600x800?text=No+Image";
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add wishlist functionality here
  };

  return (
    <div
      className="product-card group transform transition-all duration-300 hover:shadow-xl overflow-hidden bg-white rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/shop/${product.slug}`} className="block">
        <div className="relative overflow-hidden">
          <AspectRatio ratio={1 / 1}>
            <img
              src={getMainImage()}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </AspectRatio>

          {/* Enhanced Labels with better styling */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.bestseller && (
              <span className="bg-calabash-shea text-white text-xs uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                Bestseller
              </span>
            )}
            {product.new_arrival && (
              <span className="bg-purple-500 text-white text-xs uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                New Arrival
              </span>
            )}
            {featured && !product.bestseller && !product.new_arrival && (
              <span className="bg-calabash-rose text-calabash-obsidian text-xs uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                Featured
              </span>
            )}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="absolute bottom-4 right-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
            <button
              onClick={handleWishlist}
              className="bg-white hover:bg-calabash-obsidian hover:text-white text-calabash-obsidian rounded-full h-10 w-10 flex items-center justify-center shadow-md transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-calabash-obsidian hover:bg-calabash-shea text-white rounded-full h-10 w-10 flex items-center justify-center shadow-md transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-calabash-obsidian mb-1 truncate transition-colors group-hover:text-calabash-shea">
            {product.name}
          </h3>

          <div className="flex justify-between items-center mt-2">
            <span className="font-semibold text-calabash-obsidian">
              R{product.price.toFixed(2)}
            </span>

            {/* Star rating (mocked for demo) */}
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={
                      star <= 4
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-yellow-400 fill-transparent"
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">(24)</span>
            </div>
          </div>

          {/* Bonus: Attributes preview */}
          {product.attributes && product.attributes.length > 0 && (
            <div className="mt-2 text-sm text-gray-600">
              {product.attributes.find((attr) => attr.name === "length") && (
                <span className="inline-block mr-3">
                  Length:{" "}
                  {
                    product.attributes.find((attr) => attr.name === "length")
                      ?.value
                  }
                </span>
              )}
              {product.attributes.find((attr) => attr.name === "texture") && (
                <span className="inline-block">
                  {
                    product.attributes.find((attr) => attr.name === "texture")
                      ?.value
                  }
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
