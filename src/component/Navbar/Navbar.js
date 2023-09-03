import React, { useState, useEffect } from "react";
import "./style.css";
import { FaGripHorizontal } from "react-icons/fa";
import myImage from "../../assets/images/myImage.jpeg";
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  return (
    <div className="navbar_comp flexCommon">
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
        <>
          <div className="diff_Nav_View df jcsb">
            <div className="img_div">
              <img src={myImage} alt="myImage" className="myImage" />
            </div>
            <div className="navbar_name df jcsb cpoint">
              <div className="firstName">Hrithik</div>
              <div className="lastName">Varshney</div>
            </div>
            <div className="icon_div">
              <FaGripHorizontal />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
