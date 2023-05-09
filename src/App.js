import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    console.log("Mounting...");
  });
  return (
    <h1>
      Geeks .....!
    </h1>
  );
}

export default App;
