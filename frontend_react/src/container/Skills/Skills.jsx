import React from "react";
import "./Skills.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { SkillsList, Web2SkillsList } from "../DataApi";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="head-text margin-top">
        My Skills <span> & </span> Technologies
      </h2>

      <div className="app__skills-container">
        <div className="app__skills-category-container">
          <h3 className="bold-text"> Frontend </h3>
          <div className="app__skills-list">
            {Web2SkillsList.map((w2skill, index) => (
              <motion.div
                key={w2skill.title + index}
                whileInView={{
                  opacity: [0, 1],
                }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: w2skill.bgColor }}
                >
                  <img src={w2skill.icon} alt={w2skill.title} loading="lazy" />
                </div>
                <p className="p-text">{w2skill.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="app__skills-category-container">
          <h3 className="bold-text"> Web3 / Backend</h3>
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
                  <img src={skill.icon} alt={skill.title} loading="lazy" />
                </div>
                <p className="p-text">{skill.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
