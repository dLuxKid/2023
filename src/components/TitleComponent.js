import React from "react";

const TitleComponent = ({ children, styles }) => {
  return (
    <h1
      className={`text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide leading-5 ${styles}`}
    >
      {children}
    </h1>
  );
};

export default TitleComponent;
