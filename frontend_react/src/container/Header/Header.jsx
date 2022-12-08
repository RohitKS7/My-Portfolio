import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    tranistion: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const imgBgContainer = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const imgBG = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">ROHIT</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">𝗙𝗥𝗢𝗡𝗧𝗘𝗡𝗗 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 of 𝗪𝗘𝗕𝟮 & 𝗪𝗘𝗕𝟯</p>
            <p className="p-text">𝗕𝗔𝗖𝗞𝗘𝗡𝗗 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 of 𝗪𝗘𝗕𝟯</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-img"
      >
        <img src={images.rohitprofile2} alt="profile_bg" />
        <motion.div
          variants={imgBgContainer}
          initial="hidden"
          animate="show"
          className="overlay_circle"
        >
          <motion.img
            variants={imgBG}
            src={images.circle}
            alt="profile_circle"
          />
          <motion.div
            variants={imgBG}
            className="overlay_circle extra-circle1"
          />
          <motion.div
            variants={imgBG}
            className="overlay_circle extra-circle2"
          />
          <motion.div
            variants={imgBG}
            className="overlay_circle extra-circle3"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.solidity, images.react, images.ethereum].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
