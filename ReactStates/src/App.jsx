import { useState } from "react";
import "./App.css";

function App() {
  // let [incre, useStates] = useStates(15);
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeVal = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <center color="red">
        <h1>MyReact Counter</h1>
        <center>Counter Value: {counter}</center>
        <br></br>
        <button className="deepu" onClick={addValue}>
          increment{" "}
        </button>
        :{counter}
        <button className="deepu" onClick={removeVal}>
          decrement
        </button>
        :{counter}
      </center>
    </>
  );
}
export default App;
