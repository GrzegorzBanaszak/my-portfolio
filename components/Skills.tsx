import Image from "next/image";
import React from "react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.skills}>
          <Image
            alt="List of skills"
            src="/skills.png"
            height={720}
            width={720}
          />
        </div>
        <article className={styles.content}>
          <h3>Javascript</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus, dolore. Consequuntur ipsum repellendus, delectus
            officiis, dignissimos hic repellat quidem blanditiis cupiditate
            asperiores pariatur ipsam suscipit! Eveniet sint dignissimos dolor
            ex!
          </p>

          <div className={styles.selection}>
            <div className={styles.select}>
              <p className={styles.select__text}>Frondend Skills</p>
            </div>
            <div className={styles.select}>
              <p className={styles.select__text}>Backend Skills</p>
            </div>
            <div className={styles.select}>
              <p className={styles.select__text}>Other Skills</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
