import React, { useEffect, useState } from "react";
import styles from "../styles/Nav.module.css";
const Navmenu = ({ activeNav, setActiveNav }) => {
  const [style, setStyle] = useState({});

  return (
    <>
      <div
        className={`${styles.button}`}
        onClick={() => {
          setActiveNav(!activeNav);
          console.log(activeNav);
        }}></div>

      <nav
        className={`${styles.navWrapper}`}
        onMouseMove={(e) => {
          setStyle({
            "left":
              ((window.innerWidth - window.outerWidth - window.outerWidth/7) * (e.pageX / window.innerWidth).toFixed(3)).toFixed(1) +
              "px",
          });
          // cntWd = window.innerWidth;
          // tb = $('#thumbs');
          // sldWd = tb.outerWidth();
        }}
        style={style}
        >
        <div
          className={`${styles.linkWrapper} ${
            activeNav ? styles.linkWrapperOpen : ""
          }`}
          id="links"
          >
          
          <a
            href=""
            className={`${styles.navTab} ${
              activeNav ? styles.navTabOpen : ""
            }`}>
            <h2 className={`${styles.navText}`}>Home</h2>
            <img
              src="https://images.unsplash.com/photo-1667848015080-00ee6e487bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className={`${styles.navImg}`}
            />
          </a>
          <a
            href=""
            className={`${styles.navTab} ${
              activeNav ? styles.navTabOpen : ""
            }`}>
            <h2 className={`${styles.navText}`}>Albums</h2>
            <img
              src="https://images.unsplash.com/photo-1667848015080-00ee6e487bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className={`${styles.navImg}`}
            />
          </a>
          <a
            href=""
            className={`${styles.navTab} ${
              activeNav ? styles.navTabOpen : ""
            }`}>
            <h2 className={`${styles.navText}`}>About Us</h2>
            <img
              src="https://images.unsplash.com/photo-1667848015080-00ee6e487bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className={`${styles.navImg}`}
            />
          </a>
          <a
            href=""
            className={`${styles.navTab} ${
              activeNav ? styles.navTabOpen : ""
            }`}>
            <h2 className={`${styles.navText}`}>Lmfao</h2>
            <img
              src="https://images.unsplash.com/photo-1667848015080-00ee6e487bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className={`${styles.navImg}`}
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navmenu;
