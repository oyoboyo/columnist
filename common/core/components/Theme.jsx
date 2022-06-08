import ThemeContext from "../contexts/Theme";

const Theme = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default Theme;
