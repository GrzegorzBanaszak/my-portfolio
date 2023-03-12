import Image from "next/image";
import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.curve}></div>
      <article className={styles.container}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles.content}>
          <Image
            alt="Contact image"
            src="https://res.cloudinary.com/dvnnx9h8e/image/upload/v1678625135/portfolio/letter_tbrh2w.png"
            width={500}
            height={500}
          />
          <div className={styles.list}>
            <div>
              <h5 className={styles.header}>Email</h5>
              <p>grzegorz.banaszak95@gmali.com</p>
            </div>
            <div>
              <h5 className={styles.header}>Phone</h5>
              <p>601-866-823</p>
            </div>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/grzegorz-banaszak/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
