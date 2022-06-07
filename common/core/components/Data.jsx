import DataContext from "../contexts/Data";

const Data = ({ children, value }) => {
  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  );
};

export default Data;
