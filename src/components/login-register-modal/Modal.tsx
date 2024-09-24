'use client';

import { useEffect } from 'react';
import styles from './modal.module.css';

interface ModalProps {
  showModal: boolean;
  handleModalCloseButton: () => void;
}

const Modal = ({ showModal, handleModalCloseButton }: ModalProps) => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const target = event.target as HTMLElement;
    if (target.id === 'modalBackground') {
      handleModalCloseButton();
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

  if (!showModal) return null;

  return (
    <div id='modalBackground' className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <h1>Welcome to Miss Shake</h1>
        <button onClick={handleModalCloseButton} className={styles.closeButton}>
          X
        </button>
        <div className={styles.modalWrapper}>
          <div className={styles.loginContent}>
            <h2>I&apos;m already a client</h2>
            <form className={styles.loginForm}>
              <label className={styles.label}>E-mail address*</label>
              <input type='text' name='email' placeholder='your e-mail' />
              <label className={styles.label}>Password*</label>
              <input type='password' name='password' placeholder='********' />
              <button type='submit'>Login</button>
            </form>
            <button className={styles.googleBtn}>Login with Google</button>
            <button className={styles.passwordBtn}>Forgotten your password?</button>
          </div>

          <div className={styles.afterelement}></div>

          <div className={styles.registerContent}>
            <h2>I&apos;m new at Miss Shake</h2>
            <form className={styles.registerForm}>
              <label className={styles.label}>First name*</label>
              <input type='text' name='firstName' placeholder='your first name' />
              <label className={styles.label}>Last name*</label>
              <input type='text' name='lastName' placeholder='your last name' />
              <label className={styles.label}>E-mail address*</label>
              <input type='email' name='password' placeholder='your e-mail' />
              <label className={styles.label}>Password*</label>
              <input type='password' name='password' placeholder='********' />
              <button type='submit'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
