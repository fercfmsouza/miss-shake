import type { Metadata } from 'next';
import FirstSection from '@/components/home/FirstSection';
import styles from './page.module.css';
import SecondSection from '@/components/home/SecondSection';
import AboutSection from '@/components/home/AboutSection';
import Categories from '@/components/home/Categories';
import Feedback from '@/components/home/Feedback';

export default function Home() {
  return (
    <main className={styles.main}>
      <FirstSection />
      <SecondSection />
      <AboutSection />
      <Categories />
      <Feedback />
    </main>
  );
}
