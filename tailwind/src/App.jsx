import { useState } from "react";
import Things from "./components/Things";

function App() {
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <Things username="deepu" post="laundry" newArr={arr} />
      <Things />
      <Things />
    </>
  );
}

export default App;
