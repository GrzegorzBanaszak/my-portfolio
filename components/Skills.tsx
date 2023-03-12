import { SectionType, SkillType } from "@/data/skillsData";
import useIconColor from "@/hooks/useIconColor";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Skills.module.css";
import CustomIcon from "./CustomIcon";

type SkillsProps = {
  data: Array<SectionType>;
};

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillType>(
    data[0].data[0]
  );
  const [skillsList, setSkillsList] = useState<Array<SkillType>>(data[0].data);
  const getColor = useIconColor();

  const onIconClick = (iconType: string) => {
    const selectedSkillData = skillsList.find((i) => i.name === iconType);

    if (selectedSkillData) {
      setSelectedSkill(selectedSkillData);
    }
  };

  const onClickTypeSelect = (type: string) => {
    const selectedType = data.find((i) => i.type === type);

    if (selectedType) {
      setSkillsList(selectedType.data);
      setSelectedSkill(selectedType.data[0]);
    }
  };
  return (
    <section id="skills" className={styles.section}>
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
          <ul className={styles.list}>
            {skillsList.map((item, index) => (
              <motion.li
                style={{
                  fill:
                    selectedSkill.name === item.name
                      ? getColor(item.name)
                      : "rgb(0,0,0)",
                }}
                onClick={() => onIconClick(item.name)}
                key={index}
                className={styles.element}
              >
                <CustomIcon type={item.name} />
              </motion.li>
            ))}
          </ul>
          <h3>{selectedSkill.name}</h3>
          <p>{selectedSkill.description}</p>

          <div className={styles.selection}>
            {data.map((item, index) => (
              <div
                onClick={() => onClickTypeSelect(item.type)}
                className={styles.select}
                key={index}
              >
                <p className={styles.select__text}>{item.type}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
