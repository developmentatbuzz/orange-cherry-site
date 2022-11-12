import React from "react";

export const AboutCard = ({imgSrc, name, title}) => {
  return (
    <div className="mb-8">
      <img
        src={imgSrc || "https://images.unsplash.com/photo-1668132667587-5864126be7e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}
        alt=""
        className=""
      />
      <h3 className="text-[1.05rem] font-semibold mt-1 uppercase">{name || "Name"} · <span className="text-[1rem] font-normal capitalize">{title || "gay"}</span></h3>
    </div>
  );
};
