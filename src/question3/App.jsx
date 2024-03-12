// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import React from "react";
import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};

const App = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Räknare: {count}</h1>
      <button onClick={increment}>Öka</button>
      <button onClick={decrement}>Minska</button>
    </div>
  );
};

export default App;
