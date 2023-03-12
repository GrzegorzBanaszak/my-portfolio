import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <a href="#open">Open</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
