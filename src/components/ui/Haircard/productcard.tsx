"use client";
import Image from "next/image";
import WhatsappButton from "../../whatsappButton/whatsappButon";
import styles from "./productcard.module.css";


export interface ProductCardProps {
  name: string;
  price: string | number;
  image?: string;
  category?: string; // e.g. "Hair" | "Nails" | "Skin"
  className?: string;
  phonenumber: string;
}


export default function ProductCard({
  name,
  price,
  image,
  category,
  className,
  phonenumber,

}: ProductCardProps) {
  const formattedPrice =
    typeof price === "number" ? `₦${price.toLocaleString()}` : price;
  const message = `Hi, I would like to enquire about this product: ${name}`;

  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      {image && (
        <div className={styles.imageWrap}>
          <Image
            src={image}
            alt={name}
            fill
            className={styles.image}
            sizes="(max-width: 760px) 100vw, 320px"
          />
        </div>
      )}

      <div className={styles.body}>
        {category && <p className={styles.category}>{category}</p>}
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{formattedPrice}</p>

        <WhatsappButton
          phoneNumber={phonenumber}
          message={message}
          className={styles.enquireButton}
        />
      </div>
    </div>
  );
}