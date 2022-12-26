import React, {useState} from "react";

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="align">
      <div >
        <h1>Counter App</h1>
        <div ></div>
        <h2 >{count}</h2>
        <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="btn btn-secondary mx-3" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
