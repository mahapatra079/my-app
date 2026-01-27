import { useState } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="card">
      <h2>useState Hook Example</h2>
      
      <div>
        <h3>Counter: {count}</h3>
        <button className='addBtn' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='addBtn' onClick={() => setCount(count - 1)}>Decrement</button>
        <button className='addBtn' onClick={() => setCount(0)}>Reset</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Name: {name}</h3>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default UseStateExample;