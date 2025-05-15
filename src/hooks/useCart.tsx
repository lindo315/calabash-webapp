
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";
import { type Product } from "@/types/supabase";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("calabashCart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
        localStorage.removeItem("calabashCart");
      }
    }
  }, []);

  // Calculate total price whenever cart changes
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotalPrice(newTotal);
    
    // Save cart to localStorage
    localStorage.setItem("calabashCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex > -1) {
        // Product exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        toast.success(`Updated quantity in cart!`);
        return updatedItems;
      } else {
        // Product doesn't exist, add new item
        toast.success(`${product.name} added to cart!`);
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.product.id !== productId);
      if (updatedItems.length < prevItems.length) {
        toast.info("Item removed from cart");
      }
      return updatedItems;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
