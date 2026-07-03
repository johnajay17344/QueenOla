interface ProductCardProps {
  name: string;
  price: string | number;
  image?: string;
  category?: string; // e.g. "Hair" | "Nails" | "Skin"
  className?: string;
}
