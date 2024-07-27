import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Employees</h1>
      <button onClick={() => setCount((previousValue) => previousValue + 1)}>
        Counter value is now: {count}
      </button>
    </>
  );
}

export default App;
