import { useContext } from "react";
import DataContext from "../contexts/Config";

export default function useData() {
  return useContext(DataContext);
}
