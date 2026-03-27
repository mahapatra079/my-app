import {useReducer} from "react";

function Counter() {
  // const [count, setCount] = useState(0);
  
  // const handleIncrement = () => {
  //   setCount(count + 1)
  // }
  
  // const handleDecrement = () => {
  //   if (count > 0) {
  //      setCount(count-1)
  //    }
  // }
  
  //  const handleReset = () => {
  //   setCount(0)
  // }

  // const [state, dispatch] = useReducer(reducer, initalState);

  const initialState = {
    count: 0
  }
  const reducer = (state, action) => {
    console.log(state, action)

      // if (action.type === "INCREMENT") {
      //   return state + 1
      // }
      // if (action.type === "DECREMENT") {
      //   return state - 1
      // }
      // if (action.type === "RESET") {
      //   return state = 0
    // }
    
    switch(action.type) {
      case "INCREMENT":
        return {count: state.count + 1 }
      case "DECREMENT":
        return {count: state.count - 1 }
      case "RESET":
        return {count: 0}
      default:
        return state
    }
   };

  const [state, dispatch] = useReducer(reducer, initialState)
  
  console.log(useReducer(reducer, initialState))
  

  return (
    <>
      <div className="card">
        <h2>useReducer Hook</h2>
          <div>
            <p>Count: {state.count}</p>
            <button type="button" className="addBtn" onClick={() => dispatch({type:"INCREMENT"}) }>Increment</button>
            <button type="button" className="addBtn" onClick={() => dispatch({type:"DECREMENT"}) }>Decrement</button>
            <button type="button" className="addBtn" onClick={() => dispatch({type:"RESET"}) }>Reset</button>
          </div>
      </div>
    </>
  );
}

export default Counter;