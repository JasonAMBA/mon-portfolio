'use client';
import { motion, AnimatePresence } from "framer-motion";
import styles from './Modal.module.scss';

export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modalContent}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique à l’intérieur
        >
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le code</a>
          <div className={styles.videoWrapper}>
            <video src={project.video} type="video/mp4" controls/>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}