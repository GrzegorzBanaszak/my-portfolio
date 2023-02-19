import React from "react";
import styles from "../styles/Hero.module.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className={styles.section}>
      <Navbar />
    </section>
  );
};

export default Hero;
