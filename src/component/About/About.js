import React, { useState } from "react";
import "./style.css";
import { TypeAnimation } from "react-type-animation";
import { FaStackOverflow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const About = () => {
  const [textColor, setTextColor] = useState("red");
  const socialMediaLinks = [
    {
      icon: <FaStackOverflow />
    },
    {
      icon: <FaGithub />
    },
    {
      icon: <FaLinkedin />
    },
    {
      icon: <FaInstagram />
    },
    {
      icon: <SiLeetcode />
    }
  ]
  return (
    <div className="about-section">
      <div
      className="animation-div"
        style={{
          color: textColor,
          width: "80%",
          textAlign: "center",
          fontFamily:"cursive"
        }}
      >
        <TypeAnimation
          sequence={[
            "Hi 👋, I'm Hrithik Varshney",
            800,
            () => setTextColor("aqua"),
            "A passionate Software Developer from India. I am proficient in front-end development. Also having great interest in back-end development for which I say ~ I am working on it.",
            800,
            () => setTextColor("deeppink"),
            "Feel free to take a look at my latest projects.",
            1000,
            () => setTextColor("darkkhaki"),
            "Ask me about JavaScript, TypeScript, React, React Native and C++",
          ]}
          repeat={Infinity}
        />
      </div>
      <button
      class="button-55"
        onClick={() => {
          const items = [
            "blue",
            "green",
            "purple",
            "pink",
            "brown",
            "darkmagenta",
            "darksalmon",
            "dodgerblue",
            "firebrick",
            "darkviolet",
          ];
          setTextColor(items[Math.floor(Math.random() * items.length)]); // set random color
        }}
      >
        Change Color
      </button>
      <div className="socialMedia-links">

      </div>
    </div>
  );
};

export default About;
