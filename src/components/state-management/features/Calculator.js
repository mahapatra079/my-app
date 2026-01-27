import { useState } from "react";

function Calculator() {
    // State to hold the current input and result
 const [screen, setScreen] = useState("");

    // Append value to screen on button click
  const handleClick = (value) => {
    setScreen((prev) => prev + value);
  };
    
    // Synchronous → try/catch

    // Asynchronous → Promise / async-await
    
  const calculate = () => {
        try {
        setScreen(eval(screen).toString());
        } catch {
        setScreen("Error");
        }
  };
    
    // eval() runs synchronously
    // try / catch is for synchronous errors
    // No .then(), .catch(), async, or await
    // No Promise is created or returned
    //This is normal synchronous JavaScript, not async.

    // Clear screen
    const clearAll = () => {
        setScreen("");
    };

  return (
    <div className="calculator">
      <h3 className="mb-10">Simple Calculator</h3>

      <div className="calculator-body">
        <input
          type="text"
          className="calculator-screen mb-10"
          value={screen}
          disabled
        />

        <div className="calculator-keys">
          {/* Operators */}
          <button className="operator" onClick={() => handleClick("+")}>+</button>
          <button className="operator" onClick={() => handleClick("-")}>-</button>
          <button className="operator" onClick={() => handleClick("*")}>×</button>
          <button className="operator" onClick={() => handleClick("/")}>÷</button>

          {/* Numbers */}
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button className="decimal" onClick={() => handleClick(".")}>.</button>

          {/* Actions */}
          <button className="all-clear" onClick={clearAll}>AC</button>
          <button className="equal-sign" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;


// used React state to store the input and evaluated the expression on equal button click

// What’s happening (Simple)

// screen → stores input & result

// Number/operator buttons → append value

// = → evaluates expression

// AC → clears screen