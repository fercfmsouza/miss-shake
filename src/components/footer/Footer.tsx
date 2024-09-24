'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../footer/footer.module.css';

export default function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.details}>
          <h2>Miss Shake</h2>
          <p>We help you find your dream Milkshake.</p>
          <div className={styles.social}>
            <Link href='https://www.linkedin.com/in/fernanda-souza-dev/' target='_blank' rel='noopener noreferrer'>
              <Image src='../../../assets/icon-facebook.svg' alt='facebook' width={20} height={20} />
            </Link>
            <Link href='https://fernandasouza.vercel.app/' target='_blank' rel='noopener noreferrer'>
              <Image src='../../../assets/icon-insta.svg' alt='facebook' width={20} height={20} />
            </Link>
            <Link href='https://github.com/fercfmsouza' target='_blank' rel='noopener noreferrer'>
              <Image src='../../../assets/icon-twitter.svg' alt='facebook' width={20} height={20} />
            </Link>
          </div>
        </div>

        <div className={styles.info}>
          <ul>
            <h3 className={styles.infoList}>Information</h3>
            <li>About</li>
            <li>Product</li>
            <li>Blog</li>
          </ul>
          <ul>
            <h3 className={styles.infoList}>Company</h3>
            <li>Community</li>
            <li>Career</li>
            <li>Our story</li>
          </ul>
          <ul>
            <h3 className={styles.infoList}>Contact</h3>
            <li>Getting Started</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>
      <div className={styles.rights}>
        <p>2024 ®All Rights Reserved MISS SHAKE</p>
      </div>
    </div>
  );
}
