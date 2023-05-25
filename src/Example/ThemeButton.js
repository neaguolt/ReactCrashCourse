import ThemeContext from "./ThemeContext"
import { useContext } from "react";

export default function ThemeButton() {
    const {toggleTheme}= useContext(ThemeContext);

    return (
        <button onClick= {toggleTheme}>ThemeButton</button>
    )
}