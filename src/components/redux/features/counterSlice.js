import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./action/counterAction";

const CounterSlice = () => {
  const count = useSelector(state => {
    console.log('Redux state:', state);
    return state.counter ? state.counter.count : 0;
  });
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Counter with Redux</h2>
      
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h3>Count: {count || 0}</h3>
      </div>
      
      <div>
        <button 
          className="addBtn" 
          onClick={() => {
            console.log('Dispatching increment');
            dispatch(increment());
          }}
        >
          Increment (+)
        </button>
        
        <button 
          className="addBtn" 
          onClick={() => {
            console.log('Dispatching decrement');
            dispatch(decrement());
          }}
        >
          Decrement (-)
        </button>
        
        <button 
          className="addBtn" 
          onClick={() => {
            console.log('Dispatching reset');
            dispatch(reset());
          }}
        >
          Reset (0)
        </button>
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>This counter uses traditional Redux pattern:</p>
        <ul style={{ textAlign: 'left' }}>
          <li>useSelector to get count from store</li>
          <li>useDispatch to dispatch actions</li>
          <li>Actions from counterAction.js</li>
          <li>Reducer from counterReducer.js</li>
        </ul>
      </div>
    </div>
  );
};

export default CounterSlice;