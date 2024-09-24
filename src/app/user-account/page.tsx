'use client';

import type { Metadata } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import UserFavorites from './favorites';
import UserDetails from './details';
import UserOrders from './orders';
import styles from './userAccount.module.css';

// export const metadata: Metadata = {
//   title: 'My Account',
//   description: 'Miss Shake products',
// };

export default function UserAccount() {
  const [activeSection, setActiveSection] = useState('my-details');

  useEffect(() => {
    if (location.hash && location.hash === '#favorites') {
      setActiveSection('favorites');
    }
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'details':
        return <UserDetails />;
      case 'favorites':
        return <UserFavorites />;
      case 'orders':
        return <UserOrders />;
      default:
        return <UserDetails />;
    }
  };

  console.log(location.hash);
  return (
    <div className={styles.container}>
      <h1>My Account</h1>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <div
            onClick={() => setActiveSection('details')}
            className={`${styles.link} ${activeSection === 'details' ? styles.active : ''}`}
          >
            <Image
              src='../../../assets/icon-login.svg'
              width={18}
              height={17}
              alt='login icon'
              className={styles.icons}
            />
            My details
          </div>
          <div
            onClick={() => setActiveSection('favorites')}
            className={`${styles.link} ${activeSection === 'favorites' ? styles.active : ''}`}
          >
            <Image
              src='../../../assets/icon-favorite.svg'
              width={18}
              height={17}
              alt='login icon'
              className={styles.icons}
            />
            Favorites
          </div>
          <div
            onClick={() => setActiveSection('orders')}
            className={`${styles.link} ${activeSection === 'orders' ? styles.active : ''}`}
          >
            <Image
              src='../../../assets/icon-bag.svg'
              width={18}
              height={17}
              alt='login icon'
              className={styles.icons}
            />
            My orders
          </div>
          <div className={styles.link}>
            <Image src='../../../assets/icon-logout.svg' width={18} height={17} alt='login icon' />
            Logout
          </div>
        </div>
        <div className={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
}
