import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function SiblingB() {
  const { theme } = useContext(ThemeContext);
  console.log("SiblingComponentB", theme);
  return (
      <h1>
        Sibling Component B {theme}
      </h1>
  );
}