'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import logo from '../../../public/assets/miss-shake.svg';
import NavLinks from './navlinks/Navlinks';
import Iconlinks from './iconlinks/Iconlinks';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <Image src={logo} alt='miss shake pink logo' width={130} height={40} />
      </Link>

      <NavLinks />

      <Iconlinks />
    </div>
  );
}
