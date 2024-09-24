import Link from 'next/link';
import CardItem from '../card-item/CardItem';
import styles from './secondSection.module.css';
import Image from 'next/image';
import products from '../../../data.json';

export default function SecondSection() {
  return (
    <div className={styles.container}>
      <div className={styles.bestSeller}>
        <h2>Bestseller Milkshakes</h2>
        <p>Easiest way to healthy life by buying your favorite milkshake</p>
        <Link href='/products'>
          See more
          <Image
            className={styles.iconImage}
            src='/assets/icon-arrow.svg'
            alt='see more icon'
            width={21}
            height={11.25}
          />
        </Link>
      </div>
      <div className={styles.cardContainer}>
        {products.slice(0, 3).map((product) => {
          return <CardItem product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
