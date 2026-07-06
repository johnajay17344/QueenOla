import styles from "./map.module.css";

export default function Map() {
  return (
    <section className={styles.mapContainer}>
      <iframe
        title="Salon Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2941.7968437466725!2d3.2587900472994065!3d6.610930188936776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1783342621803!5m2!1sen!2sng"
        className={styles.map}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
