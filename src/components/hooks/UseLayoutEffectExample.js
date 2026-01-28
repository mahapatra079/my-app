import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { UseLayoutEffectWidth } from './UseLayoutEffectWidth';

export const UseLayoutEffectExample = () => {
  const [count, setCount] = useState(0);
  const divRef = useRef();

  // useEffect - runs after DOM updates
  useEffect(() => {
    console.log('useEffect - DOM updated');
  }, [count]);

  // useLayoutEffect - runs before DOM updates are painted
  useLayoutEffect(() => {
    console.log('useLayoutEffect - before paint');
    if (divRef.current) {
      divRef.current.style.backgroundColor = count % 2 === 0 ? '#e3f2fd' : '#fff3e0';
    }
  }, [count]);

  return (
    <>
      <UseLayoutEffectWidth/>
      <div className="card">
        <h2 className='mb-10'>useLayoutEffect Hook Example</h2>
        
        <div 
          ref={divRef}
          style={{ 
            padding: '20px', 
            border: '2px solid #ccc', 
            borderRadius: '8px',
            transition: 'background-color 0.3s ease'
          }}
        >
          <h3>Count: {count}</h3>
          <p>Background changes synchronously with useLayoutEffect</p>
          
          <button onClick={() => setCount(count + 1)} className="addBtn">
            Increment
          </button>
          
          <button onClick={() => setCount(0)} className="addBtn">
            Reset
          </button>
          
          <p>Check console to see the execution order</p>
        </div>
        </div>
      </>
  );
};

