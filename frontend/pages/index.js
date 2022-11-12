import React, { useState } from "react";
import Navmenu from "../components/Navmenu";
import styles from "../styles/Home.module.css";

export default function Home() {
  let [activeNav, setActiveNav] = useState(false);
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.body} ${activeNav ? styles.moveUp : ""}`}></div>
      </div>
      <Navmenu activeNav={activeNav} setActiveNav={setActiveNav} />
    </>
  );
}
