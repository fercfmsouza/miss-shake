'use client';

import { useCart } from '@/context/CartContext';
import styles from './order-summary.module.css';
import Image from 'next/image';

export default function OrderSummary() {
  const { cartItems } = useCart();

  //finding the totalPrice to the cart
  const totalPrice = Object.values(cartItems).reduce((acc, current) => {
    const priceNumber = current.price.split('$ ')[1];
    const calculatePartialValue = Number(priceNumber) * current.quantity;

    return acc + calculatePartialValue;
  }, 0);

  //adding up the totalItems to the cart
  const totalItems = Object.values(cartItems).reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  return (
    <div className={styles.orderSummaryWrapper}>
      <h4>Order Summary</h4>
      <div className={styles.orders}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((cartItem) => (
            <div className={styles.cartItem} key={cartItem.id}>
              <div className={styles.cartBoxContent} key={cartItem.id}>
                <Image src={`/images/${cartItem.imageUrl}`} width={54} height={66} alt='cartItem image' />
                <div>
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.price}</p>
                </div>
              </div>
              <div className={styles.cartBoxTotal}>
                <p className={styles.totalTitle}>Total</p>
                <div>
                  <p className={styles.totalPrice}>$ totalPrice</p>
                  <p className={styles.totalItems}>totalItems Items</p>
                </div>
                <button className={styles.confirmButton}>Confirm Order</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
