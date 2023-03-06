import { Project as ProjectType } from "@/data/projecsData";
import React, { FC, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import Project from "./Project";

type ProjectsProps = {
  projects: Array<ProjectType>;
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {projects.map((item, index) => (
          <Project key={index} project={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
