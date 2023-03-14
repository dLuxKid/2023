const HeadingComponent = ({ children, styles }) => {
  return (
    <h2
      className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold ${styles}`}
    >
      {children}
    </h2>
  );
};

export default HeadingComponent;

