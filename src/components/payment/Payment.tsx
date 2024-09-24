'use client';

import Image from 'next/image';
import styles from './payment.module.css';
import { useState } from 'react';

export default function Payment() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className={styles.paymentWrapper}>
      <h4>Payment Method</h4>
      <form className={styles.paymentForm}>
        <div className={styles.cards}>
          <input type='radio' />
          <Image src='/assets/cards.png' width={237} height={34} alt='payment methods' />
        </div>

        <input className={styles.cardName} type='text' placeholder='Name as appears on card' />

        <div className={styles.cardInfo}>
          <div className={styles.cardInfoNumber}>
            <label>Card Number</label>
            <input type='text' placeholder='Card number' />
          </div>
          <div className={styles.cardInfoDate}>
            <label>Card Expirantion Date</label>
            <div className={styles.selectOption}>
              <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value='' disabled>
                  Month
                </option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value='' disabled>
                  Year
                </option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
