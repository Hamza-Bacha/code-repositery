import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < Infinity) {
      setCounter(prevCounter => prevCounter + 1);
    } else {
      console.log("Counter cannot go above twenty");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    } else {
      console.log("Counter cannot go below zero");
    }
  };

  return (
    <div className="container">
      <h1>Counter Project</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default App;
