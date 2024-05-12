import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FaGripHorizontal } from "react-icons/fa";
import myImage from "../../assets/images/myImage.jpeg";
const Navbar = ({ navigationBar, setNavigationBar }) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navigationMenu, setNavigationMenu] = useState(false);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const routeArr = [
    {
      name: "Home",
    },
    {
      name: "Experience",
    },
    {
      name: "Projects",
    },
    {
      name: "Skills",
    },
    {
      name: "Contact",
    },
  ];

  const handleIcon = () => {
    setNavigationBar(!navigationBar);
    setNavigationMenu(!navigationMenu);
  };

  const handleProfile = () => {
    navigate("/myprofile");
  };
  return (
    <div
      className={
        navigationMenu
          ? "navbar_comp flexCommon h260"
          : "navbar_comp flexCommon"
      }
    >
      {windowWidth > 1200 ? (
        <>
          <div className="navbar_name df jcsb cpoint">
            <div className="firstName">Hrithik</div>
            <div className="lastName">Varshney</div>
          </div>
          <div className="navbar_route df jcsa cpoint">
            {routeArr.map((item, index) => {
              return (
                <span className="routeValues" key={item + index}>
                  {item.name}
                </span>
              );
            })}
          </div>
        </>
      ) : (
        <div className="diff_Nav_View_Parent">
          <div className="diff_Nav_View df jcsb">
            <div className="img_div" onClick={handleProfile}>
              <img src={myImage} alt="myImage" className="myImage" />
            </div>
            <div className="navbar_name df jcsb cpoint">
              <div className="firstName">Hrithik</div>
              <div className="lastName">Varshney</div>
            </div>
            <div className="icon_div" onClick={handleIcon}>
              <FaGripHorizontal />
            </div>
          </div>
          {navigationMenu && (
            <div className="navigationMenu ">
              {routeArr.map((item, index) => {
                return (
                  <span className="routeValues p5" key={item + index}>
                    {item.name}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
