import { useRef, useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();
  const reCaptchaRef = useRef();
  const [captchaValid, setCaptchaValid] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!captchaValid) {
      toast.error("Veuillez valider le reCAPTCHA");
      return;
    }

    const email = form.current.email.value;

    try {
      const response = await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_ABSTRACT_API_KEY}&email=${email}`)

      if (!response.data.is_valid_format.value || !response.data.is_smtp_valid.value) {
        toast.error("L'adresse mail est invalide ou inexistante !");
        return;
      }
      
      await emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_YOUR_TEMPLATE_ID, form.current, {publicKey: process.env.NEXT_PUBLIC_EMAILJS_YOUR_PUBLIC_KEY});

      toast.success('Message envoyé avec succès !');
      form.current.reset();
      reCaptchaRef.current.reset();
      setCaptchaValid(false);
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer !");
      console.error(error);
    }
  };


  return (
    <section className={styles.contactSection} id="contactMe">
      <h2 className={styles.title}>Me contacter</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.column}>
          <div className={styles.row}>
            <input type="text" placeholder="Nom" name="nom" required />
            <input type="text" placeholder="Prénom" name="prenom" required />
          </div>
          <div className={styles.row}>
            <input type="email" placeholder="Email" name="email" required />
            <input type="text" placeholder="Objet" name="objet" required />
          </div>
          <div className={styles.row}>
            <textarea placeholder="Message" name="message" required></textarea>
          </div>
        </div>
        <div className={styles.recaptchaContainer}>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            ref={reCaptchaRef}
            onChange={() => setCaptchaValid(true)}
            onExpired={() => setCaptchaValid(false)}
          />
        </div>
        <button><span>Envoyer</span></button>
      </form>
      <p>© 2025 Jason Amba. Tous droits réservés.</p>
    </section>
  )
}
