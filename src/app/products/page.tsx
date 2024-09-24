import type { Metadata } from 'next';
import styles from './products.module.css';
import CardProduct from '@/components/card-product/CardProduct';
import Image from 'next/image';
import products from '../../../data.json';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Miss Shake products',
};

export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Milkshakes and more</h1>
        <p>Find your favorite flavor</p>
      </div>
      <div className={styles.cardProductsContainer}>
        {products.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
      </div>
      <div className={styles.pagination}>
        <button>
          <Image
            src='../../../assets/icon-arrow-left.svg'
            alt='button left'
            width={8.75}
            height={17.5}
            style={{ width: '100%', height: 'auto' }}
          />
        </button>
        <div className={styles.paginationNumbers}>
          <p>Page 1 of 10</p>
        </div>
        <button>
          <Image
            src='../../../assets/icon-arrow-right.svg'
            alt='button left'
            width={8.75}
            height={17.5}
            style={{ width: '100%', height: 'auto' }}
          />
        </button>
      </div>
    </div>
  );
}
