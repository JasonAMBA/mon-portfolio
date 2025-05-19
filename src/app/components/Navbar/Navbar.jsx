'use client';
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import {FiMenu, FiX} from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior:'smooth'});
    setMenuOpen(false);
  }

  return (
    <header className={styles.navbar}>
      <h1 className={styles.title}>Mon portfolio</h1>

      {/* Navigation desktop */}
      <nav className={styles.navLinks}>
        <button onClick={() => scrollTo('aboutMe')}>À propos de moi</button>
        <button onClick={() => scrollTo('skills')}>Compétences</button>
        <button onClick={() => scrollTo('projects')}>Projets</button>
        <button onClick={() => scrollTo('contactMe')}>Contact</button>
      </nav>

      {/* Menu burger icon */}
      <div className={styles.burgerIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Menu mobile slide */}
      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
          <nav className={styles.mobileMenu}>
            <button onClick={() => scrollTo('aboutMe')}>À propos de moi</button>
            <button onClick={() => scrollTo('skills')}>Compétences</button>
            <button onClick={() => scrollTo('projects')}>Projets</button>
            <button onClick={() => scrollTo('contactMe')}>Contact</button>
          </nav>
        </>
      )}
    </header>
  )
}