'use client';

import { Product } from '@/types/interfaces';
import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface FavoriteContextType {
  favorites: Product[];
  setFavorites: Dispatch<SetStateAction<Product[]>>;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorite must be used within a FavoriteProvider');
  }
  return context;
};

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  return <FavoriteContext.Provider value={{ favorites, setFavorites }}>{children}</FavoriteContext.Provider>;
};
