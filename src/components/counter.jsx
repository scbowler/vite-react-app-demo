import { useState } from 'react';

export default function Counter() {
  const [ count, setCount ] = useState(0);
  return (
    <button
      className="btn"
      onClick={() => setCount(count => count + 1)}
    >
      Click Count: {count}
    </button>
  );
}
