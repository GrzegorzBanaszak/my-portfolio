import Image from "next/image";
import React from "react";
import styles from "../styles/Hero.module.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className={styles.section}>
      <Navbar />
      <div className={styles.container}>
        <article className={styles.article}>
          <h1>Grzegorz Banaszak </h1>
          <h2>Junior Web Developer</h2>
          <h3>Javascript - Typescript - NodeJs - React</h3>
          <p>
            Building powerful and dynamic web applications to bring your ideas
            to life.
          </p>
          <button className={styles.button}>View more</button>
        </article>
        <div>
          <Image
            width={633}
            height={600}
            alt="Hero section monitor and phone"
            src="/monitor.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
