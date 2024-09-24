import Image from 'next/image';
import styles from './aboutSection.module.css';

export default function AboutSection() {
  return (
    <div className={styles.container}>
      <h2>About us</h2>
      <p className={styles.paragraph}>Order now and appreciate the flavours of milkshake</p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <Image src='/assets/icon-plant.svg' alt='plant icon' width={40} height={40} />
          </div>
          <h3>Large assortment</h3>
          <p>we offer many different types of products with fewer variations in each category.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <Image src='/assets/icon-shipping.svg' alt='shipping icon' width={40} height={40} />
          </div>
          <h3>Fast & Free Shipping</h3>
          <p>4-day or less delivery time, free shipping and an expedited delivery option.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <Image src='/assets/icon-suport.svg' alt='icon support' width={40} height={40} />
          </div>
          <h3>24/7 Support</h3>
          <p>answers to any business related inquiry 24/7 and in real-time.</p>
        </div>
      </div>
    </div>
  );
}
