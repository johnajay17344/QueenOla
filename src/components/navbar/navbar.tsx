"use client";

import styles from "./navbar.module.css";
import { navbarItems, logo, whatsappButtonData } from "./data";
import WhatsappButton from "../../components/whatsappButton/whatsappButon";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Routes that should always render the "scrolled" (solid) header style
const NO_TRANSPARENT_ROUTES: string[] = [];

// Routes that should always render the "light" header style
const LIGHT_ROUTES: string[] = [];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isNoTransparent = NO_TRANSPARENT_ROUTES.includes(pathname);
  const isLightPage = LIGHT_ROUTES.includes(pathname);


useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
        document.body.style.overflow = "";
    };
}, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isNoTransparent) {
        setIsScrolled(true);
        return;
      }
      const shouldBeScrolled = window.scrollY > 0;
      setIsScrolled((prev) =>
        prev !== shouldBeScrolled ? shouldBeScrolled : prev
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isNoTransparent]);
  

  let headerMode = "";
  if (isNoTransparent) {
    headerMode = styles.scrolled;
  } else if (isLightPage) {
    headerMode = styles.light;
  } else if (isScrolled) {
    headerMode = styles.scrolled;
  } else {
    headerMode = "";
  }
  const linksClassName = [styles.links, menuOpen ? styles.linksOpen : ""].join(" ");
  const burgerClassName = [styles.burger, menuOpen ? styles.burgerOpen : ""].join(" ");

  return (
    <header className={[styles.header, headerMode].join(" ")} id="top">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={50}
            height={50}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>{logo.name}</span>
        </div>

        <ul className={linksClassName}>
          {navbarItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}

          <li>
            <WhatsappButton
              phoneNumber={whatsappButtonData.phoneNumber}
              message={whatsappButtonData.message}
              className={styles.mobileWhatsapp}
            />
          </li>
        </ul>
        <div className={styles.desktopWhatsapp}>
          <WhatsappButton
            phoneNumber={whatsappButtonData.phoneNumber}
            message={whatsappButtonData.message}
            className={styles.whatsappButton}
          />
        </div>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          className={burgerClassName}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}