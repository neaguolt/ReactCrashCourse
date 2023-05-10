import { useEffect } from 'react';
import './App.css';
import SayHello from './CrashCourse/SayHello';

const App = () => {
  useEffect(() => {
    console.log("Mounting...");
  });
  return (
    <>
      <h1>Geeks .....!</h1>
      <SayHello/>
    </> 
  );
}

export default App;
