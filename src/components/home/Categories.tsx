import Link from 'next/link';
import styles from './categories.module.css';
import Image from 'next/image';

export default function Categories() {
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <p className={styles.paragraph}>Find what you are looking for</p>
      <div className={styles.bg}>
        <div className={styles.cardContainerWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src='/images/milkshake-4.png' alt='fruits milkshake' width={352} height={512} />
              </div>
              <h3>Fruit Milkshake</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src='/images/milkshake-acessories.png' alt='fruits milkshake' width={352} height={512} />
              </div>
              <h3>Milkshake Accessories</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src='/images/milkshake-5.png' alt='fruits milkshake' width={352} height={512} />
              </div>
              <h3>Healthy Milkshake</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <Link href='/products'>
            Explore
            <Image
              className={styles.iconImage}
              src='/assets/icon-arrow.svg'
              alt='see more icon'
              width={21}
              height={11.25}
            />
          </Link>
        </button>
      </div>
    </div>
  );
}
