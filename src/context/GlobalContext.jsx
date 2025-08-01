import { useReducer } from "react";
import { createContext } from "react";
export const MainContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE":
      return { ...state, openSidebar: payload };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    onSidebar: true,
  });
  return (
    <MainContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
