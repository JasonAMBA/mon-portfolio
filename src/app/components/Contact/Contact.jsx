import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contactMe">
      <h2 className={styles.title}>Me contacter</h2>
      <form action="">
        <div className={styles.column}>
          <div className={styles.row}>
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />
          </div>
          <div className={styles.row}>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Objet" />
          </div>
          <div className={styles.row}>
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
        <button><span>Envoyer</span></button>
      </form>
      <p>© 2025 Jason Amba. Tous droits réservés.</p>
    </section>
  )
}
