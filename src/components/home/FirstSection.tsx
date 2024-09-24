import Image from 'next/image';
import styles from './firstSection.module.css';

export default function FirstSection() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Buy your dream Milkshake</h1>
        <div className={styles.moreinfo}>
          <div>
            <h3>50+</h3>
            <p>Flavors of Milkshake</p>
          </div>
          <div className={styles.afterelement}></div>
          <div>
            <h3>260+</h3>
            <p>Customers</p>
          </div>
        </div>
        <div>
          <form action='' className={styles.searchbar}>
            <input type='text' placeholder='What are you looking for?' />
            <button>
              <Image
                src='../../assets/icon-search.svg'
                alt='search icon'
                width={20}
                height={20}
                className={styles.searchIcon}
              />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.image}>
        <Image src='/images/home.png' alt='strawberry milkshake' width={450} height={468} />
      </div>
    </div>
  );
}
