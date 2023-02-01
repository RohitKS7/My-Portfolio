import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
// import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Abouts } from "../DataApi";
// import { urlFor, client } from "../../client";

const About = () => {
  // NOTE Use the below code for "about data" if using sanity backend.
  // const [abouts, setAbouts] = useState([]);

  // // Trigger only when about section loads
  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);

  return (
    <>
      <h2 className="head-text margin-top">
        I Know That <span> Good Dev </span> <br /> means{" "}
        <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        {Abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} loading="lazy" />
            {/* NOTE Uncomment below tag when using sanity_backend */}
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
