import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    case 'set':
      return { count: action.payload };
    default:
      throw new Error();
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card">
      <h2>useReducer Hook Example</h2>
      
      <div>
        <h3>Count: {state.count}</h3>
        
        <button 
          onClick={() => dispatch({ type: 'increment' })} 
          className="addBtn"
        >
          Increment
        </button>
        
        <button 
          onClick={() => dispatch({ type: 'decrement' })} 
          className="addBtn"
        >
          Decrement
        </button>
        
        <button 
          onClick={() => dispatch({ type: 'reset' })} 
          className="addBtn"
        >
          Reset
        </button>
        
        <button 
          onClick={() => dispatch({ type: 'set', payload: 10 })} 
          className="addBtn"
        >
          Set to 10
        </button>
        
        <p>useReducer is useful for complex state logic</p>
      </div>
    </div>
  );
};

export default UseReducerExample;