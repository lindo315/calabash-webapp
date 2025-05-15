
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { X, ShoppingBag, Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  
  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(productId, quantity);
  };
  
  return (
    <div className="bg-calabash-baobab min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian mb-8">
          Your Shopping Cart
        </h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4">Product</th>
                      <th className="py-4 text-center">Price</th>
                      <th className="py-4 text-center">Quantity</th>
                      <th className="py-4 text-right">Total</th>
                      <th className="py-4 w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.product.id} className="border-b">
                        <td className="py-4">
                          <div className="flex items-center">
                            <img 
                              src={item.product.images && item.product.images.length > 0 
                                ? item.product.images[0].image_url 
                                : '/placeholder.svg'} 
                              alt={item.product.name}
                              className="w-16 h-16 object-cover rounded-md mr-4"
                            />
                            <div>
                              <h3 className="font-medium">{item.product.name}</h3>
                              {item.product.attributes && item.product.attributes.length > 0 && (
                                <p className="text-sm text-gray-600">
                                  {item.product.attributes.find(attr => attr.name === 'length') && 
                                    `Length: ${item.product.attributes.find(attr => attr.name === 'length')?.value}`}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          R{Number(item.product.price).toFixed(2)}
                        </td>
                        <td className="py-4">
                          <div className="flex items-center justify-center">
                            <button 
                              onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 bg-calabash-rose bg-opacity-30 flex items-center justify-center rounded-l-md"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
                              className="w-12 h-8 text-center border-y border-calabash-rose border-opacity-30 focus:outline-none"
                              min="1"
                            />
                            <button 
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 bg-calabash-rose bg-opacity-30 flex items-center justify-center rounded-r-md"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-right font-medium">
                          R{(Number(item.product.price) * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4 text-right">
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-500 hover:text-calabash-shea"
                            aria-label="Remove item"
                          >
                            <X size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="flex justify-between mt-6">
                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="text-red-500 border-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={16} className="mr-2" />
                    Clear Cart
                  </Button>
                  
                  <Link to="/shop">
                    <Button variant="outline">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R{totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{totalPrice > 200 ? "Free" : "R15.00"}</span>
                  </div>
                  
                  <hr className="my-2" />
                  
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>R{(totalPrice + (totalPrice > 200 ? 0 : 15)).toFixed(2)}</span>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full bg-calabash-shea hover:bg-calabash-obsidian text-white py-6 mt-6 rounded-md font-medium transition-colors">
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <div className="mt-6 text-sm text-center text-gray-600">
                  <p>Free shipping on orders over R200</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="mb-6 flex justify-center">
              <ShoppingBag size={64} className="text-calabash-shea opacity-50" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/shop">
              <Button className="bg-calabash-shea hover:bg-calabash-obsidian text-white">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
