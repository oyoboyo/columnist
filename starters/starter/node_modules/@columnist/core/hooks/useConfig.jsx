import { useContext } from "react";
import ConfigContext from "../contexts/Config";

export default function useConfig() {
  return useContext(ConfigContext);
}
