'use client';

import { useFavorite } from '@/context/FavoriteContext';
import styles from './cardItem.module.css';
import Image from 'next/image';
import { Product } from '@/types/interfaces';

interface CardItemProps {
  product: Product;
}

export default function CardItem({ product }: CardItemProps) {
  const { favorites, setFavorites } = useFavorite();

  const isFavorited = favorites.find((favorite) => favorite.id === product.id);

  const toogleFavorites = () => {
    if (!isFavorited) {
      setFavorites((prev) => [...prev, product]);
    } else {
      setFavorites((prev) => prev.filter((favorite) => favorite.id !== product.id));
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={toogleFavorites} className={styles.favoriteButton}>
        <Image
          src={isFavorited ? '/assets/icon-favorite-filled.svg' : '/assets/icon-favorite.svg'}
          alt='favorite product icon'
          width={19}
          height={17}
        />
      </button>
      <div>
        <Image
          className={styles.image}
          src={`/images/${product.imageUrl}`}
          alt='milkshake product'
          width={300}
          height={363}
        />
      </div>
      <div className={styles.info}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
