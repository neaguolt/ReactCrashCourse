import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  
  if (count >= 5) {
    console.log("count"); // Mutat aici
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      {/*count >= 5 && <AdditionalComponent />*/}
      
    </div>
  );
}

function AdditionalComponent() {
  const [message, setMessage] = useState('Additional component');

  return (
    
    <div>
      <p>{message}</p>
      
    </div>
  );
}

export default Counter;