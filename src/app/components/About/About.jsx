import Image from "next/image";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.section} id="aboutMe">
      <div>
        <h1 className={styles.title}>Jason <span className={styles.titleBlue}>Amba</span></h1>
        <h2 className={styles.secondTitle}>Développeur web</h2>
        <p className={styles.basicText}>Curieux de nature, je m’efforce de concevoir des projets captivants.</p>
        <div className={styles.flex}>
          <a href="https://github.com/JasonAMBA">
            <Image src="/Socials/icons8-github-100.png" width={50} height={50} alt="Picture of Github" />
          </a>
          <a href="https://www.linkedin.com/in/jason-amba-developpement-web/">
            <Image src="/Socials/linkedin.png" width={50} height={50} alt="Picture of Linkedin" />
          </a>
        </div>
        
        <a href="/CV/CV Amba.pdf" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}><p>Télécharger mon <span className={styles}>CV</span></p></button>
        </a>
      </div>
      <div className={styles.photoContainer}>
        <Image src="/Picture/New moi (without bg).png" width={190} height={250} className={styles.photo} alt="Jason Amba" />
        <div className={styles.linesContainer}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  )
}