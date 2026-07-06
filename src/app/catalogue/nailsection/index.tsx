"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "@/components/ui/Haircard/productcard";
import { nailProducts } from "./data";
import styles from "./nailsection.module.css";




export default function NailSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (

    <div className={styles.nailSection} id="nail">
    
      <div className={styles.header}>
        <p className={styles.subtitle}>Nails</p>
        <p className={styles.quote}>
          “Your nails are your crown — we just help you wear them right.”
        </p>
      </div>

      <div className={styles.carouselWrap}>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {nailProducts.map((product, i) => (
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