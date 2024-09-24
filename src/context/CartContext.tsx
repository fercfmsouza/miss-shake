'use client';

import { Product } from '@/types/interfaces';
import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface CartContextType {
  cartItems: Product[];
  setCartItems: Dispatch<SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  return <CartContext.Provider value={{ cartItems, setCartItems }}>{children}</CartContext.Provider>;
};
