import { useState, useCallback } from 'react';

const Button = ({ onClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={onClick} className="addBtn">{children}</button>;
};

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    console.log('Incrementing Inside');
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    console.log('Decrementing Inside');
    setCount(count - 1);
  }, [count]);

  const handleReset = useCallback(() => {
    console.log('Resetting Inside');
    setCount(0);
  }, []);
  
  
  return (
    <div className="card">
      <h2>useCallback Hook Example</h2>
      
      <div>
        <h3>Count: {count}</h3>
        
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
};

export default UseCallbackExample;