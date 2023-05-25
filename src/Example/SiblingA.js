import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function SiblingA() {
  const { theme } = useContext(ThemeContext);
  console.log("Sibling ComponentA", theme);
  return (
    <div>
      <h1 className={`${theme} `}>
        Sibling Component A 
      </h1>
    </div>
  );
}