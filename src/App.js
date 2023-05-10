import './App.css';
import { useState } from 'react';
const App = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button clicked!");
  }

  return (
    <div onClick={handleClick}>
      <h1>Click anywhere in the body to trigger the event</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
