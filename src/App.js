
import {ThemeProvider} from "./Example/ThemeContext";
import SiblingA from "./Example/SiblingA"
import SiblingB from "./Example/SiblingB"
import SiblingC from "./Example/SiblingC"

const App = () => {
  
  return (
    <div className="App">
    <ThemeProvider>
      <SiblingA />
      <SiblingB />
      <SiblingC />
    </ThemeProvider>
  </div>
  )
}
export default App;
