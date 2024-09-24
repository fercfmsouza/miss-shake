'use client';

import { useState } from 'react';
import { useFavorite } from '@/context/FavoriteContext';
import { Product } from '@/types/interfaces';
import { useCart } from '@/context/CartContext';
import styles from './cardProduct.module.css';
import Image from 'next/image';

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  const { favorites, setFavorites } = useFavorite();
  const { cartItems, setCartItems } = useCart();
  const [counter, setCounter] = useState(0);

  const isFavorited = favorites.find((favorite) => favorite.id === product.id);

  const toggleFavorite = () => {
    if (!isFavorited) {
      setFavorites((prev) => [...prev, product]);
    } else {
      setFavorites((prev) => prev.filter((favorite) => favorite.id !== product.id));
    }
  };

  const handleAddToCart = () => {
    if (counter === 0) return;

    setCartItems((prev) => {
      const currentItem = prev.find((item) => item.id === product.id);

      if (currentItem) {
        return prev.map((item) => {
          if (item.id === currentItem.id) {
            return { ...item, quantity: item.quantity + counter };
          } else return item;
        });
      }

      return [...prev, { ...product, quantity: counter }];
    });

    setCounter(0);
  };

  const handleClick = () => {
    toggleFavorite();
  };

  const handleAddProduct = () => {
    setCounter(counter + 1);
  };

  const handleRemoveProduct = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.favoriteButton}>
        <Image
          src={isFavorited ? '/assets/icon-favorite-filled.svg' : '/assets/icon-favorite.svg'}
          alt='favorite product icon'
          width={19}
          height={17}
        />
      </button>
      <Image
        className={styles.image}
        src={`/images/${product.imageUrl}`}
        alt='milkshake product'
        width={300}
        height={363}
        style={{ width: '300px', height: '363px' }}
      />
      <div className={styles.infoContainer}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <div className={styles.info}>
          <div className={styles.addProduct}>
            <button onClick={handleRemoveProduct} className={styles.removeBtnProduct}>
              -
            </button>
            <p>{counter}</p>
            <button onClick={handleAddProduct} className={styles.addBtnProduct}>
              +
            </button>
          </div>
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart
            <Image
              src='/assets/icon-cart.svg'
              alt='cart icon'
              width={22.5}
              height={22.5}
              style={{ filter: 'invert(100%)' }}
              className={styles.cartButtonIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
