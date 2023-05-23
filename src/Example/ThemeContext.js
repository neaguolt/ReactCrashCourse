import { createContext} from "react";
import { useState } from "react";

const ThemeContext = createContext({
  theme1: "light",
  theme2: "dark"
});

export const ThemeProvider= ({children}) => {
    const [theme,setTheme] = useState("light");
    const [theme2, setTheme2]= useState("dark");

    return (
        <ThemeContext.Provider value={{theme,theme2}}>
            {children}    
        </ThemeContext.Provider>
    )
}
export default ThemeContext;