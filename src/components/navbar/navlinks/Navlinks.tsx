'use client';

import Link from 'next/link';
import styles from '../navlinks/navlinks.module.css';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      <li>
        <Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className={`${styles.link} ${pathname === '/products' ? styles.active : ''}`} href='/products'>
          Products
        </Link>
      </li>
      <li>
        <Link className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`} href='/contact'>
          Contact
        </Link>
      </li>
    </ul>
  );
}
