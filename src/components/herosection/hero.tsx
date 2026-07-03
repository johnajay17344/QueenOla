import Link from 'next/link';
import HeroVideo from '../ui/herrovideo';
import { heroData } from './data';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.hero}>
        <HeroVideo />
      </div>

      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{heroData.eyebrow}</p>
        <h1 className={styles.title}>
          {heroData.titleStart} <span className={styles.emphasis}>{heroData.emphasisWord}</span> {heroData.titleEnd}
        </h1>
        <p className={styles.copy}>{heroData.description}</p>


        <div className={styles.actions}>
          <Link href={heroData.buttonLink} className={styles.cta}>
            {heroData.buttonText}
          </Link>
          {heroData.secondaryButtonLink && heroData.secondaryButtonText && (
            <Link href={heroData.secondaryButtonLink} className={styles.ctaSecondary}>
              {heroData.secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}