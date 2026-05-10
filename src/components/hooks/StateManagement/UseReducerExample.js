import {useReducer} from "react";

function Counter() {  

  const initialState = {
    count: 0
  }
  
  const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type) {
      case "INCREMENT":
        return {count: state.count + 1 }
      case "DECREMENT":
        return { count: state.count - 1 }
       // return state.count === 0 ? state : { count: state.count - 1 }; // guard in the DECREMENT case to prevent going below 0:
      // return { count: Math.max(0, state.count - 1) }; //it returns the existing state unchanged — so the count stays at 0
      //Math.max is slightly more readable.
      
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