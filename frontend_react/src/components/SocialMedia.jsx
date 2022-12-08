import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/RohitKS7" target="_blank" rel="noreferr">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/SumanRohitK7" target="_blank" rel="noreferr">
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://linkedin.com/in/rohit-kumar-suman"
        target="_blank"
        rel="noreferr"
      >
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
