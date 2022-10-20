import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incAsync = () => {
    setTimeout(() => setCount((count) => count + 1), 500);
  };
  return (
    <div>
      <label>Count: {count}</label>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
      <button onClick={incAsync}>+1async</button>
    </div>
  );
}
