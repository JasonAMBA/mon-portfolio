'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.scss';
import Modal from '../Modal/Modal';

const projectData = [
  {
    id: 1,
    title: 'PSG Squad Project',
    description: "Un mini site dédié à l’effectif du PSG pour la saison 2024-2025.",
    link: 'https://github.com/JasonAMBA/psg-mini-project/tree/dev',
    video: '/videos/PSG Squad Project.mp4',
    image: '/projects/PSG Squad Project/Homepage.png',
    techs: ['/frontend/nextjs.png', '/frontend/motion.png']
  },
  {
    id: 2,
    title: '3EldenWord',
    description: 'Un mini jeu pour deviner les boss d’Elden Ring à partir de 3 images.',
    link: 'https://github.com/JasonAMBA/3EldenWord/tree/dev',
    video: '/videos/3EldenWord.mp4',
    image: '/projects/3EldenWord/Homepage.png',
    techs: ['/frontend/vue.png', '/backend/mysql.png', '/backend/node.png', '/backend/Amazon S3.png']
  }
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section className={styles.projectsSection} id='projects'>
      <h2 className={styles.title}>Mes projets</h2>
      <div className={styles.gridProjects}>
        {projectData.map((project) => (
          <div key={project.id} className={styles.project}>
            <h3 className={styles.title}>{project.title}</h3>
            <Image className={styles.borderImg} src={project.image} width={0} height={0} sizes='100vw' alt={project.title} />
            <div className={styles.gridTechno}>
              {project.techs.map((tech, index) => (
                <Image key={index} src={tech} width={100} height={100} alt="Tech icon" />
              ))}
            </div>
            <button onClick={() => openModal(project)}><p>En savoir plus</p></button>
          </div>
        ))}
      </div>

      {/* Affichage de la modale */}
      <Modal isOpen={modalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
}
