
import {ThemeProvider} from "./Example/ThemeContext";
import SiblingA from "./Example/SiblingA"
import SiblingB from "./Example/SiblingB"
import SiblingC from "./Example/SiblingC"
import ThemeButton from "./Example/ThemeButton";
import './parent.css'

const App = () => {
  
  return (
    <div className="App">
    <ThemeProvider>
      <SiblingA />
      <SiblingB />
      <SiblingC />
      <ThemeButton />
    </ThemeProvider>
  </div>
  )
}
export default App;
