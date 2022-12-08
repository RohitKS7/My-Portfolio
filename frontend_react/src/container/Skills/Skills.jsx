import React from "react";
import "./Skills.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { SkillsList } from "../DataApi";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="head-text margin-top">
        My Skills <span> & </span> Technologies
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {SkillsList.map((skill, index) => (
            <motion.div
              key={skill.title + index}
              whileInView={{
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
