import React, { useEffect } from "react";
import styles from "../styles/Projects.module.css";
import Project from "./Project";

const Projects = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
