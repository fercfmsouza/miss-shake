'use client';

import { useFavorite } from '@/context/FavoriteContext';
import styles from './favorites.module.css';
import CardItem from '@/components/card-item/CardItem';

export default function UserFavorites() {
  const { favorites } = useFavorite();

  return (
    <div className={styles.favorites}>
      {favorites.map((favoriteItem) => (
        <div className={styles.favoriteItem} key={favoriteItem.id}>
          <CardItem product={favoriteItem} />
        </div>
      ))}
    </div>
  );
}
