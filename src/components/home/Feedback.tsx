import FeedbackCard from './FeedbackCard';
import styles from './feedback.module.css';

export default function Feedback() {
  return (
    <div className={styles.container}>
      <h2>What customers say about MISS SHAKE?</h2>
      <div className={styles.feedbackCards}>
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </div>
  );
}
