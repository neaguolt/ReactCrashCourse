import MyButton from "./Example/MyButton";
import { useState } from "react";

const App = () => {
  const [count, setCont]= useState(0);

  function handleClick() {
      setCont(count +1);
      console.log("handleClick")
  }

  return (
    <>
    <MyButton count={count} onClick={handleClick} />
    <MyButton count={count} onClick={handleClick} />
    </>
  )
}
export default App;
