import { useContext } from "react";
import { MainContext } from "../context/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(MainContext);
  return context;
};
