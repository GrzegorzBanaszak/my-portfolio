import { Project } from "@/data/projecsData";
import React from "react";
import styles from "../styles/Project.module.css";
import CustomIcon from "./CustomIcon";
import { motion } from "framer-motion";
import useIconColor from "@/hooks/useIconColor";

interface ProjectProps {
  project: Project;
}

const containerVariants = {
  hover: {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0, 0, 0)",
    transition: {
      duration: 0.4,
    },
  },
  click: {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0, 0, 0)",
    transition: {
      duration: 0.4,
    },
  },
};

const buttonVariant = {
  hover: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(0, 0, 0)",
    transition: {
      duration: 0.4,
    },
  },
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { title, description, skills, repo, live } = project;
  const getColor = useIconColor();

  const getIconVariant = (type: string) => {
    const color = getColor(type);

    return {
      hover: {
        fill: color,
        transition: {
          duration: 0.4,
        },
      },
    };
  };

  return (
    <motion.article
      variants={containerVariants}
      whileHover="hover"
      className={styles.container}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.list}>
        {skills.map((item, index) => (
          <motion.li variants={getIconVariant(item)} key={index}>
            <CustomIcon type={item} />
          </motion.li>
        ))}
      </ul>
      <div className={styles.links}>
        {repo && (
          <motion.a
            variants={buttonVariant}
            className={styles.link}
            href={repo}
            target="_blank"
          >
            Github
          </motion.a>
        )}
        {live && (
          <motion.a
            variants={buttonVariant}
            className={styles.link}
            href={live}
            target="_blank"
          >
            Live
          </motion.a>
        )}
      </div>
    </motion.article>
  );
};

export default Project;
