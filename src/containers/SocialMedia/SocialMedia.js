import React from "react";
import { FaStackOverflow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import * as Styled from "./style";
import { Link } from "react-router-dom";
const SocialMedia = () => {
  const socialMediaLinks = [
    {
      icon: <FaGithub />,
      backgroundColor: "#4e545a",
      link: "https://github.com/Hrithik08-varshney",
    },
    {
      icon: <FaLinkedin />,
      backgroundColor: "#0077ba",
      link: "https://www.linkedin.com/in/hrithik-varshney-687206192/",
    },
    {
      icon: <SiLeetcode />,
      backgroundColor: "red",
      link: "https://leetcode.com/u/varshneyhrithik/",
    },
    {
      icon: <FaInstagram />,
      backgroundColor: "purple",
      link: "https://www.instagram.com/varshneyhrithik/",
    },
    {
      icon: <FaStackOverflow />,
      backgroundColor: "orange",
      link: "https://stackoverflow.com/users/16092190/hrithik-varshney",
    },
  ];
  return (
    <Styled.SocialMedia>
      {socialMediaLinks.map((elem, indx) => {
        return (
          <Styled.MediaLink
            className="social-hover"
            backgroundColor={elem.backgroundColor}
            key={elem + indx}
            
          >
          <Link className="social-links" to={elem.link} target="_blank">
          {elem.icon}
          </Link>
          </Styled.MediaLink>
        );
      })}
    </Styled.SocialMedia>
  );
};

export default SocialMedia;
