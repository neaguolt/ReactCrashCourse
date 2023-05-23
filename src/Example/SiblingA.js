import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function SiblingA() {
  const { theme: val1, theme2: val2 } = useContext(ThemeContext);
  console.log("Sibling ComponentA", val1, val2);
  return (
    <div>
      <h1>
        Sibling Component A 
      </h1>
    </div>
  );
}