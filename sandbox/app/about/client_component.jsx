"use client";

import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(10);
  
  function addCount() {
    setCount(count,setCount)=useState(10);
  }

    function addCount() {
        setCount(count +1);
    }

    function substractCount() {
        setCount (count -1); 
    }

   return (
    <>
      <Button onClick={addCount}> Sumar</Button>
      <h1> El contador es {count}</h1>
      <Button onClick={substractCount}> Restar</Button>
      </>
   );
}