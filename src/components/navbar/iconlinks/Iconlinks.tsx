'use client';

import { useState, useEffect, useRef } from 'react';
import { useFavorite } from '../../../context/FavoriteContext';
import { useCart } from '@/context/CartContext';
import ShoppingCart from '@/components/shopping-cart/ShoppingCart';
import Modal from '@/components/login-register-modal/Modal';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../iconlinks/iconlinks.module.css';

const Iconlinks = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [showCartBox, setShowCartBox] = useState(false);
  const loginBoxRef = useRef<HTMLDivElement>(null);
  const cartBoxRef = useRef<HTMLDivElement>(null);
  const { favorites } = useFavorite();
  const { cartItems } = useCart();

  const favoriteCount = favorites.length;

  const handleModalClick = () => {
    setShowModal(true);
  };

  const handleModalCloseButton = () => {
    setShowModal(false);
  };

  const handleLoginClick = () => {
    setShowLoginBox(!showLoginBox);
  };

  const handleCartClick = () => {
    setShowCartBox(!showCartBox);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (loginBoxRef.current && !loginBoxRef.current.contains(event.target as Node)) {
      setShowLoginBox(false);
    }

    if (cartBoxRef.current && !cartBoxRef.current.contains(event.target as Node)) {
      setShowCartBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const cartItemsCount = cartItems.reduce((acc, current) => acc + current.quantity, 0);

  return (
    <ul className={styles.list}>
      <li className={styles.linkContainer}>
        <button onClick={handleLoginClick} className={styles.button}>
          <Image src='/assets/icon-login.svg' alt='login icon' width={24} height={24} />
        </button>

        {showLoginBox && (
          <div ref={loginBoxRef} className={styles.loginBox}>
            <button onClick={handleModalClick} className={styles.loginButton}>
              Login
            </button>
            <br />
            <button onClick={handleModalClick} className={styles.registerButton}>
              Register now
            </button>
            <span> - it only takes a minute.</span>
          </div>
        )}
      </li>

      <li>
        <Link href='/user-account#favorites' className={styles.button}>
          <Image src='/assets/icon-favorite.svg' alt='favorite icon' width={24} height={24} />
          {favoriteCount > 0 && <span className={styles.favoriteCount}>{favoriteCount}</span>}
        </Link>
      </li>

      <li>
        <button onClick={handleCartClick} className={styles.button}>
          {<span className={styles.cartItems}>{cartItemsCount}</span>}
          <Image src='/assets/icon-cart.svg' alt='cart icon' width={24} height={24} />
        </button>

        {showCartBox && <ShoppingCart cartBoxRef={cartBoxRef} />}
      </li>

      <Modal showModal={showModal} handleModalCloseButton={handleModalCloseButton} />
    </ul>
  );
};

export default Iconlinks;
