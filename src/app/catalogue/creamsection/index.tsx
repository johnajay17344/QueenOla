"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "../../../components/ui/Haircard/productcard";
import { hairProducts } from "./data";
import styles from "./creamsection.module.css";

export default function CreamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (

    <div className={styles.section} id="cream">
    
      <div className={styles.header}>
        <p className={styles.subtitle}>Cream</p>
        <h2 className={styles.title}>Crowned in Every Strand</h2>
        <p className={styles.quote}>
          “Your hair is your crown — we just help you wear it right.”
        </p>
      </div>

      <div className={styles.carouselWrap}>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {hairProducts.map((product, i) => (
              <div className={styles.slide} key={`${product.image}-${i}`}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  phonenumber={product.phonenumber}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={scrollPrev}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={scrollNext}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}