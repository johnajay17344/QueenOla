'use client';
import styles from './herrovideo.module.css';
import { videoData } from './data';

export default function HeroVideo() {
  return (
    <div className={styles.heroVideo}>
        <video className={styles.backgroundVideo} autoPlay muted loop playsInline >
        <source  src={videoData.src} type={videoData.type}/>
      </video>
    </div>
  )
}