import ConfigContext from "../contexts/Config";

const Config = ({ children, value }) => {
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export default Config;
