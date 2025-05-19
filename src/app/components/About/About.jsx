import Image from "next/image";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.aboutSection} id="aboutMe">
      <div>
        <h1 className={styles.title}>Jason <span className={styles.titleBlue}>Amba</span></h1>
        <h2 className={styles.secondTitle}>Développeur web</h2>
        <p className={styles.basicText}>Curieux de nature, je m’efforce de concevoir des projets captivants.</p>
        <div className={styles.flex}>
          <a href="https://github.com/JasonAMBA">
            <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Socials/Github.png" width={50} height={50} alt="Picture of Github" />
          </a>
          <a href="https://www.linkedin.com/in/jason-amba-developpement-web/">
            <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Socials/Linkedin.png" width={50} height={50} alt="Picture of Linkedin" />
          </a>
        </div>
        
        <a href="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Profile/CV+Amba.pdf" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}><p>Télécharger mon <span className={styles}>CV</span></p></button>
        </a>
      </div>
      <div className={styles.photoContainer}>
        <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Profile/Jason.png" width={190} height={250} className={styles.photo} alt="Jason Amba" />
        <div className={styles.linesContainer}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  )
}