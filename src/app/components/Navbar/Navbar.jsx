import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.title}>Mon portfolio</h1>
      <nav className={styles.navLinks}>
        <a href="">À propos de moi</a>
        <a href="">Compétences</a>
        <a href="">Projets</a>
        <a href="">Contact</a>
      </nav>
    </header>
  )
}