import { useRef, useState } from 'react';

const UseRefExample = () => {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const focusInput = () => {
    inputRef.current.focus();
    console.log('Input focused:', inputRef.current);
  };

  const incrementCount = () => {
    countRef.current += 1;
    console.log('Count:', countRef.current);
  };

  const forceRender = () => {
    setRenderCount(prev => prev + 1);
  };

  return (
    <div className="card">
      <h2>useRef Hook Example</h2>
      
      <div>
        <h3>Focus Input</h3>
        <input ref={inputRef} type="text" placeholder="Click button to focus" className="form-control" />
        <button onClick={focusInput} className="addBtn">Focus Input</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Persistent Counter (Check Console)</h3>
        <p>Current ref count: {countRef.current}</p>
        <p>Render count: {renderCount}</p>
        <button onClick={incrementCount} className="addBtn">Increment Ref</button>
        <button onClick={forceRender} className="addBtn">Force Re-render</button>
      </div>
    </div>
  );
};

export default UseRefExample;
