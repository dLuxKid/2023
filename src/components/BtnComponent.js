import React from "react";

const BtnComponent = ({ children, styles }) => {
  return (
    <button
      type="button"
      className={`outline-0 border-0 bg-brown text-center flex items-center justify-center py-1 px-6 md:px-8 rounded-md  text-white font-light text-xs xs:text-sm md:text-base lg:text-lg hover:shadow-lg active:scale-90 active:duration-150 ${styles}`}
    >
      {children}
    </button>
  );
};

export default BtnComponent;
