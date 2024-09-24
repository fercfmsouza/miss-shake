'use client';
import styles from './details.module.css';

export default function UserDetails() {
  return (
    <form className={styles.editForm}>
      <label className={styles.label}>First name</label>
      <input type='text' name='firstName' placeholder='your first name' />
      <label className={styles.label}>Last name</label>
      <input type='text' name='lastName' placeholder='your last name' />
      <label className={styles.label}>E-mail address</label>
      <input type='email' name='email' placeholder='your e-mail' />
      <label className={styles.label}>Password</label>
      <input type='password' name='password' placeholder='********' />
      <button type='submit'>Save</button>
    </form>
  );
}
