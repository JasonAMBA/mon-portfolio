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
              <Image src="/frontend/nextjs.png" width={100} height={100} alt="Next.js"/>
              <Image src="/frontend/react.png" width={100} height={100} alt="React.js"/>
              <Image src="/frontend/vue.png" width={100} height={100} alt="Vue.js"/>
              <Image src="/frontend/nuxt.png" width={100} height={100} alt="Nuxt.js"/>
              <Image src="/frontend/Tailwind CSS.png" width={100} height={100} alt="Tailwind CSS"/>
              <Image src="/frontend/figma.png" width={100} height={100} alt="Figma"/>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className={styles.column}>
          <div className={styles.iconGroup}>
            <h3 className={styles.title}>Backend</h3>
            <div className={styles.icons}>
              <Image src="/backend/node.png" width={100} height={100} alt="Node.js"/>
              <Image src="/backend/mysql.png" width={100} height={100} alt="My SQL"/>
              <Image src="/backend/Prisma.png" width={100} height={100} alt="Prisma"/>
              <Image src="/backend/postman.png" width={100} height={100} alt="Postman"/>
              <Image src="/backend/Amazon S3.png" width={100} height={100} alt="Amazon S3"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
