import React from "react";
import "./About.scss";
// import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Abouts } from "../DataApi";
import VideoCard from "../../components/VideoCard/VideoCard";
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
        Proven Results That <span> Drive Business </span> <br /> Growth &{" "}
        <span> User Success </span>
      </h2>

      <div className="app__profiles">
        {Abouts.map((about, index) => (
          <VideoCard
            key={about.title + index}
            videoSrc={about.videoUrl}
            imageSrc={about.imgUrl}
            title={about.title}
            subtitle={about.subtitle}
            description={about.description}
            metrics={about.metrics}
            highlight={about.highlight}
            loading="lazy"
          />
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
