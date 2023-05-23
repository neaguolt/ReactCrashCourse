import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function SiblingC() {
    const {theme} = useContext(ThemeContext);

    console.log("SiblingC component: theme=",theme);
    return (
        <h1>SiblinC Component</h1>
    )
}