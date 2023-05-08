import { useState } from 'react';
import './App.css';

const App = () => {
  const [change, setChange] = useState(true);
  return (
    <div>
      <button onClick={() => setChange(!change)}>
        Click Here!
      </button>
      {change ? <h1>Whelcome to my App</h1>: 
        <h1>Computer Science Portal</h1>}
    </div>
  );
}

export default App;
