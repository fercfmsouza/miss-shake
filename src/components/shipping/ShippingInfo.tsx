import styles from './shipping.module.css';

export default function ShippingInfo() {
  return (
    <div className={styles.shippingWrapper}>
      <h4>Shipping Information</h4>
      <form className={styles.shippingForm}>
        <div className={styles.labelWrapper}>
          <div className={styles.info}>
            <label className={styles.label}>Name</label>
            <input type='text' name='name' placeholder='your name' />
          </div>
          <div className={styles.info}>
            <label className={styles.label}>Mobile Number</label>
            <input type='text' name='lastName' placeholder='your mobile number' />
          </div>
        </div>
        <div className={styles.labelWrapper}>
          <div className={styles.info}>
            <label className={styles.label}>E-mail address</label>
            <input type='email' name='email' placeholder='your e-mail' />
          </div>
          <div className={styles.info}>
            <label className={styles.label}>City</label>
            <input type='text' name='city' placeholder='your city' />
          </div>
        </div>
        <div className={styles.labelWrapper}>
          <div className={styles.info}>
            <label className={styles.label}>Country</label>
            <input type='email' name='email' placeholder='your country' />
          </div>
          <div className={styles.info}>
            <label className={styles.label}>ZIP Code</label>
            <input type='text' name='ZIPCode' placeholder='your ZIP code' />
          </div>
        </div>
        <div className={styles.info}>
          <label className={styles.label}>Address</label>
          <input type='text' name='address' placeholder='your complete address' />
        </div>
      </form>
    </div>
  );
}
