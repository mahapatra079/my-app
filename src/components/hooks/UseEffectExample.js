import { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Effect with no dependencies - runs on every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // Effect with empty dependencies - runs only on mount
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // Effect with dependencies - runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Timer effect with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h2>useEffect Hook Example</h2>
      
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)} className="addBtn">Increment</button>
        <p>Check browser title and console for effects</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Timer: {seconds} seconds</h3>
        <button onClick={() => setSeconds(0)} className="addBtn">Reset Timer</button>
      </div>
    </div>
  );
};

export default UseEffectExample;