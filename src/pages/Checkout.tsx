
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "South Africa",
  });
  
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd process payment and submit order here
    
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/");
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="bg-calabash-baobab min-h-screen py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              You need to add items to your cart before proceeding to checkout.
            </p>
            <Link to="/shop">
              <Button className="bg-calabash-shea hover:bg-calabash-obsidian text-white">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-calabash-baobab min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian mb-8">
          Checkout
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingInfo.firstName}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingInfo.lastName}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                  >
                    <option value="South Africa">South Africa</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>
              
              {/* Shipping Method */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Shipping Method</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="standard"
                      name="shippingMethod"
                      value="standard"
                      checked={shippingMethod === "standard"}
                      onChange={() => setShippingMethod("standard")}
                      className="h-4 w-4 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <label htmlFor="standard" className="ml-2 block">
                      <span className="font-medium">Standard Shipping</span>
                      <span className="block text-sm text-gray-500">
                        Delivery in 5-7 business days
                      </span>
                    </label>
                    <span className="ml-auto font-medium">
                      {totalPrice > 200 ? "Free" : "$15.00"}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="express"
                      name="shippingMethod"
                      value="express"
                      checked={shippingMethod === "express"}
                      onChange={() => setShippingMethod("express")}
                      className="h-4 w-4 text-calabash-shea focus:ring-calabash-shea"
                    />
                    <label htmlFor="express" className="ml-2 block">
                      <span className="font-medium">Express Shipping</span>
                      <span className="block text-sm text-gray-500">
                        Delivery in 1-3 business days
                      </span>
                    </label>
                    <span className="ml-auto font-medium">$30.00</span>
                  </div>
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Payment Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={paymentInfo.cardName}
                      onChange={handlePaymentChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiration Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={paymentInfo.expiry}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentChange}
                        placeholder="123"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Submit Button (for mobile) */}
              <div className="lg:hidden">
                <Button 
                  type="submit" 
                  className="w-full bg-calabash-shea hover:bg-calabash-obsidian text-white py-6 rounded-md font-medium transition-colors"
                >
                  Complete Order
                </Button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="max-h-60 overflow-y-auto mb-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex py-3 border-b">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src={item.product.images && item.product.images.length > 0 
                          ? item.product.images[0].image_url 
                          : '/placeholder.svg'} 
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-medium">
                      ${(Number(item.product.price) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shippingMethod === "express" 
                      ? "$30.00" 
                      : totalPrice > 200 ? "Free" : "$15.00"}
                  </span>
                </div>
                
                <hr className="my-2" />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>
                    ${(
                      totalPrice + 
                      (shippingMethod === "express" 
                        ? 30 
                        : totalPrice > 200 ? 0 : 15)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
              
              {/* Submit Button (for desktop) */}
              <div className="hidden lg:block mt-6">
                <Button 
                  type="submit" 
                  form="checkout-form"
                  onClick={handleSubmit}
                  className="w-full bg-calabash-shea hover:bg-calabash-obsidian text-white py-6 rounded-md font-medium transition-colors"
                >
                  Complete Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
