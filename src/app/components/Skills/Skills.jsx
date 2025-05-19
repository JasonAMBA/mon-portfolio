import Image from "next/image";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.title}>Mes compétences</h2>

      <div className={styles.skillsWrapper}>
        {/* FRONTEND */}
        <div className={styles.column}>
          <div className={styles.iconGroup}>
            <h3 className={styles.title}>Frontend</h3>
            <div className={styles.icons}>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Frontend/Nextjs.png" width={100} height={100} alt="Next.js"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Frontend/React.png" width={100} height={100} alt="React.js"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Frontend/Vue.png" width={100} height={100} alt="Vue.js"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Frontend/Nuxt.png" width={100} height={100} alt="Nuxt.js"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Frontend/Tailwind+CSS.png" width={100} height={100} alt="Tailwind CSS"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Frontend/Figma.png" width={100} height={100} alt="Figma"/>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className={styles.column}>
          <div className={styles.iconGroup}>
            <h3 className={styles.title}>Backend</h3>
            <div className={styles.icons}>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Backend/Node.png" width={100} height={100} alt="Node.js"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Backend/MySQL.png" width={100} height={100} alt="My SQL"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Backend/Prisma.png" width={100} height={100} alt="Prisma"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Backend/Postman.png" width={100} height={100} alt="Postman"/>
              <Image src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Technos/Backend/Amazon+S3.png" width={100} height={100} alt="Amazon S3"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
