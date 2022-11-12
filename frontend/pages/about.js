import React, { useState } from "react";
import { AboutCard } from "../components/AboutCard";
import Navmenu from "../components/Navmenu";
import styles from "../styles/About.module.css";

const About = () => {
  let [activeNav, setActiveNav] = useState(false);

  return (
    <>
      <div className={`wrapper ${activeNav ? "moveUp" : ""}`}>
        <div className="px-32 py-20 bg-white">
          <h1 className="text-7xl pb-4 font-semibold">
            We are <span className="text-[#FE9607]">Orange</span> Cherry
          </h1>
          <h2 className="text-3xl">A group of friends who do things</h2>
        </div>
        <div className="bg-[#FFCA84] px-16 py-28">
          <div className="flex flex-row gap-7">
            <div className="flex-1 flex-col">
              <AboutCard
                name="Donald Thai"
                imgSrc={
                  "https://images.unsplash.com/photo-1668123508592-d004d362dde3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                }
                title="soldier"
              />
              <AboutCard name="Andrew Fortner" title="CEO"/>
            </div>
            <div className="flex-1 flex-col mt-28">
              <AboutCard name="Nabil Chowdhury" title="lgbtq avenger" />
              <AboutCard name="Nick Nguyen" title="Dog Niga"/>
            </div>
            <div className="flex-1 flex-col -mt-16">
              <AboutCard name="Albert Sun" title="cutie" />
              <AboutCard />
            </div>
            <div className="flex-1 flex-col mt-10">
              <AboutCard name="Vincent Cheng" title="glizzy gobbler" />
              <AboutCard name="Jason Dang" title="Sexy Boy"/>
            </div>
          </div>
        </div>
      </div>
      <Navmenu activeNav={activeNav} setActiveNav={setActiveNav} />
    </>
  );
};

export default About;
