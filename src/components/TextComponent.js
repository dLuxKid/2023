import React from "react";

const TextComponent = ({children, styles}) => {
  return (
    <p className={`text-xs sm:text-sm md:text-base font-regular tracking-tight leading-[14px] ${styles}`}>
      {children}
    </p>
  );
};

export default TextComponent;
