import ShippingInfo from '@/components/shipping/ShippingInfo';
import styles from './checkout.module.css';
import Payment from '@/components/payment/Payment';
import OrderSummary from '@/components/order-summary/OrderSummary';

export default function Checkout() {
  return (
    <div className={styles.checkoutWrapper}>
      <h1>Checkout</h1>
      <div className={styles.wrapper}>
        <div className={styles.infoContent}>
          <ShippingInfo />
          <Payment />
        </div>
        <div className={styles.orderContent}>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
