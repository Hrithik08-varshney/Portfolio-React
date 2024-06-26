import React, { useState } from "react";
import "./style.css";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "../../containers/SocialMedia/SocialMedia";
import { AboutTextColors } from "../../utils/constant";
import Wave from 'react-wavify'
const About = ({ navigationBar }) => {
  const [textColor, setTextColor] = useState("red");
  const handleChangeColor = () => {
    setTextColor(AboutTextColors[Math.floor(Math.random() * AboutTextColors.length)]); // set random color
  };

  return (
    <div
      className={
        navigationBar
          ? "about-section about-section-navigation-height"
          : "about-section"
      }
    >
    <Wave fill='#f79902'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 60,
          amplitude: 20,
          speed: 0.15,
          points: 5
        }}
  />
      <div
        className="animation-div"
        style={{
          color: textColor,
          width: "80%",
          textAlign: "center",
          fontFamily: "cursive",
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
      <button class="button-55" onClick={handleChangeColor}>
        Change Color
      </button>
      <div className="socialMedia-links">
        <SocialMedia />
      </div>
    </div>
  );
};

export default About;
