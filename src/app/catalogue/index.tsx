import HairSection from "@/app/catalogue/hairsection";
import NailSection from "@/app/catalogue/nailsection";
import CreamSection from "@/app/catalogue/creamsection";
import styles from "./catalogue.module.css";

export default function Catalogue() {
    return (
        <section id="catalogue" className={styles.catalogue}>
            <div className={styles.textCenter}>
                <h1 className={styles.h1}>Catalogue</h1>
            </div>
            <HairSection />
            <NailSection />
            <CreamSection />
        </section>
    )
}