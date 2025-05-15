
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { type Product } from "@/types/supabase";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  
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

  return (
    <div 
      className={`product-card group ${
        featured ? "overflow-hidden" : ""
      }`}
    >
      <Link to={`/shop/${product.slug}`} className="block">
        <div className="relative overflow-hidden">
          <AspectRatio ratio={3/4}>
            <img 
              src={getMainImage()} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AspectRatio>
          
          {/* Labels */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.bestseller && (
              <span className="bg-calabash-shea text-white text-xs uppercase font-bold px-2 py-1">
                Bestseller
              </span>
            )}
            {product.new_arrival && (
              <span className="bg-calabash-rose text-calabash-obsidian text-xs uppercase font-bold px-2 py-1">
                New Arrival
              </span>
            )}
          </div>
          
          {/* Quick add button */}
          <div className="absolute bottom-4 right-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <Button 
              onClick={handleAddToCart}
              className="bg-calabash-obsidian hover:bg-calabash-shea text-white rounded-full h-10 w-10 flex items-center justify-center"
            >
              <ShoppingCart size={18} />
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-calabash-obsidian mb-1 truncate">
            {product.name}
          </h3>
          
          <div className="flex justify-between items-center mt-2">
            <span className="font-semibold text-calabash-obsidian">
              R{product.price.toFixed(2)}
            </span>
            
            <span className="text-sm text-gray-600">
              {product.attributes?.length || 0} attributes
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
