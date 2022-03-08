import { createContext, useContext, useReducer } from "react";
import { reducerFunc } from "./reducerFunc";
const Themecontext = createContext();
const useThemeContext = () => useContext(Themecontext);
const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, { theme: "dark" });
  return (
    <Themecontext.Provider value={{ state, dispatch }}>
      {children}
    </Themecontext.Provider>
  );
};
export { useThemeContext, ThemeContextProvider };
