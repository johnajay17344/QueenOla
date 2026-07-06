"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./location.module.css";
import { location } from "./data";
import Map from "../map/map";

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      id="contact"
    >
      <div className={styles.wrap}>
        <div className={styles.info}>
          <p className={styles.eyebrow}>{location.heading}</p>
          <h2 className={styles.title}>{location.title}</h2>
          <p className={styles.subheading}>{location.subHeading}</p>

          <ul className={styles.list}>
            {location.locationData.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.details}
                  className={styles.item}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <span className={styles.iconBox}>
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className={styles.itemLabel}>{item.details}</p>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.mapFrame}>
          <Map />
        </div>
      </div>
    </section>
  );
}