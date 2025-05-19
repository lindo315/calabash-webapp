import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import {
  X,
  ShoppingBag,
  Trash2,
  Heart,
  ArrowRight,
  CheckCircle,
  PlusCircle,
  MinusCircle,
  ChevronRight,
} from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(productId, quantity);
  };

  // Calculate shipping cost
  const shippingCost = totalPrice > 200 ? 0 : 15;
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="bg-calabash-baobab min-h-screen py-12">
      <div className="container-custom">
        {/* Enhanced page header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-10 h-0.5 bg-calabash-shea"></span>
            <span className="text-calabash-shea font-medium text-sm uppercase tracking-wider">
              Shopping Cart
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian relative inline-block">
            Your Shopping Cart
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-calabash-shea"></span>
          </h1>
        </div>

        {/* Breadcrumb navigation */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-calabash-shea transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-calabash-obsidian font-medium">
              Shopping Cart
            </span>
          </div>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                  <h2 className="text-xl font-semibold">
                    Cart (
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}{" "}
                    items)
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 flex items-center gap-1.5 text-sm font-medium"
                  >
                    <Trash2 size={16} />
                    <span>Clear Cart</span>
                  </button>
                </div>

                {/* Cart Item List */}
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex flex-col sm:flex-row gap-4 pb-6 border-b last:border-0 last:pb-0 animate-fade-in"
                    >
                      {/* Product image */}
                      <div className="w-full sm:w-24 h-24 flex-shrink-0">
                        <img
                          src={
                            item.product.images &&
                            item.product.images.length > 0
                              ? item.product.images[0].image_url
                              : "/placeholder.svg"
                          }
                          alt={item.product.name}
                          className="w-full sm:w-24 h-24 object-cover rounded-md"
                        />
                      </div>

                      {/* Product details */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-lg text-calabash-obsidian mb-1">
                              {item.product.name}
                            </h3>
                            {item.product.attributes &&
                              item.product.attributes.length > 0 && (
                                <div className="text-sm text-gray-600 space-x-2">
                                  {item.product.attributes.find(
                                    (attr) => attr.name === "length"
                                  ) && (
                                    <span>
                                      Length:{" "}
                                      {
                                        item.product.attributes.find(
                                          (attr) => attr.name === "length"
                                        )?.value
                                      }
                                    </span>
                                  )}
                                  {item.product.attributes.find(
                                    (attr) => attr.name === "texture"
                                  ) && (
                                    <span>
                                      •{" "}
                                      {
                                        item.product.attributes.find(
                                          (attr) => attr.name === "texture"
                                        )?.value
                                      }
                                    </span>
                                  )}
                                </div>
                              )}
                          </div>

                          <div className="text-right">
                            <span className="font-semibold text-calabash-obsidian">
                              R{Number(item.product.price).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          {/* Quantity controls */}
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="text-gray-500 hover:text-calabash-shea transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <MinusCircle size={20} />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.product.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="w-12 h-8 mx-2 text-center border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-calabash-shea"
                              min="1"
                            />
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="text-gray-500 hover:text-calabash-shea transition-colors"
                              aria-label="Increase quantity"
                            >
                              <PlusCircle size={20} />
                            </button>
                          </div>

                          {/* Action buttons */}
                          <div className="flex gap-3">
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                            <button
                              className="text-gray-400 hover:text-calabash-shea transition-colors"
                              aria-label="Add to wishlist"
                            >
                              <Heart size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 items-center pt-6 border-t">
                  {/* Continue shopping */}
                  <Link
                    to="/shop"
                    className="text-calabash-shea hover:text-calabash-obsidian transition-colors flex items-center gap-1 font-medium"
                  >
                    <ChevronRight size={16} className="rotate-180" />
                    <span>Continue Shopping</span>
                  </Link>

                  {/* Promo code */}
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Promo Code"
                      className="w-36 sm:w-48 px-3 py-2 border border-r-0 rounded-l-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-calabash-shea"
                    />
                    <button className="px-4 py-2 bg-calabash-shea text-white rounded-r-md hover:bg-opacity-90 transition-colors font-medium">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-6 sticky top-10">
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">
                      R{totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span
                      className={
                        shippingCost === 0 ? "text-green-600 font-medium" : ""
                      }
                    >
                      {shippingCost === 0
                        ? "Free"
                        : `R${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  {/* Free shipping progress bar */}
                  {totalPrice < 200 && (
                    <div className="py-3 px-4 bg-green-50 rounded-md">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-green-800">
                          Add{" "}
                          <span className="font-semibold">
                            R{(200 - totalPrice).toFixed(2)}
                          </span>{" "}
                          for free shipping
                        </span>
                        <span className="text-green-800 font-medium">
                          {Math.min(100, Math.round((totalPrice / 200) * 100))}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round((totalPrice / 200) * 100)
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <hr className="my-2" />

                  <div className="flex justify-between font-semibold text-xl">
                    <span>Total</span>
                    <span>R{finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full bg-calabash-shea hover:bg-calabash-obsidian text-white py-6 mt-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={18} />
                  </Button>
                </Link>

                {/* Security & payment info */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-sm text-gray-600">
                      Secure Checkout
                    </span>
                  </div>

                  <div className="flex justify-center gap-2">
                    <img src="/visa.svg" alt="Visa" className="h-6" />
                    <img
                      src="/mastercard.svg"
                      alt="Mastercard"
                      className="h-6"
                    />
                    <img src="/paypal.svg" alt="PayPal" className="h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag
                size={32}
                className="text-calabash-shea opacity-50"
              />
            </div>
            <h2 className="text-2xl font-display font-medium text-calabash-obsidian mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet.
              Explore our collections to find the perfect hair extensions for
              you.
            </p>
            <Link to="/shop">
              <Button className="bg-calabash-shea hover:bg-calabash-obsidian text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2 mx-auto">
                <span>Start Shopping</span>
                <ArrowRight size={18} />
              </Button>
            </Link>

            {/* Product recommendations */}
            <div className="mt-16 text-left">
              <h3 className="text-xl font-medium mb-6 text-center">
                You might be interested in
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recommended products would go here */}
                {/* These would typically be bestsellers or featured products */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
