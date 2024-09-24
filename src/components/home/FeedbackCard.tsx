import Image from 'next/image';
import styles from './feedbackCard.module.css';

export default function FeedbackCard() {
  return (
    <div className={styles.cardContainer}>
      <div>
        <p>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>

      <div className={styles.info}>
        <div className={styles.quote}>
          <Image className={styles.quoteIcon} src='/assets/icon-quote.svg' alt='quote icon' width={48} height={41} />
          <Image className={styles.quoteUser} src='/images/person1.png' alt='person' width={97} height={143} />
        </div>

        <div className={styles.userInfo}>
          <h3>Anne Lee</h3>
          <p>Youtuber</p>
        </div>

        <div className={styles.userGrade}>
          <Image src='/assets/icon-star.svg' alt='star icon' width={28} height={18.75} />
          <h4>4.5</h4>
        </div>
      </div>
    </div>
  );
}
