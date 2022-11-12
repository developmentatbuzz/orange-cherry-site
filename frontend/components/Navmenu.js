import React, { useEffect, useState } from "react";
import $ from "jquery";
import styles from "../styles/Nav.module.css";
const Navmenu = ({ activeNav, setActiveNav }) => {
  const [style, setStyle] = useState({});

  return (
    <>
      <div
        className={`${styles.button}`}
        onClick={() => {
          setActiveNav(!activeNav);
          
        }}></div>

      <nav
        className={`${styles.navWrapper}`}
        >
        <div
          onMouseMove={(e) => {
            // From: https://codepen.io/piogil/pen/XebobL jquery solution. 
  
            let cntWd = window.innerWidth;
            let links = $('#links');
            let sldWd = links.outerWidth();
            links.css({left: ((cntWd - sldWd)*((e.pageX / cntWd).toFixed(3))).toFixed(1) +"px" });
          }}
          onMouseLeave={(e) => {
            let links = $('#links');
            links.css({left: "0px"});
          }}
          id="links"
          className={`${styles.navInnerWrapper}`}
          >

          <div
            className={`${styles.linkWrapper} ${
              activeNav ? styles.linkWrapperOpen : ""
            }`}
            >
            
            <a
              href=""
              className={`${styles.navTab} ${
                activeNav ? styles.navTabOpen : "/"
              }`}>
              <h2 className={`${styles.navText}`}>Home</h2>
              <img
                src="https://images.unsplash.com/photo-1667848015080-00ee6e487bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className={`${styles.navImg}`}
              />
            </a>
            <a
              href="/albums"
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
              href="/about"
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
              href="/lmfao"
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
        </div>
      </nav>
    </>
  );
};

export default Navmenu;
