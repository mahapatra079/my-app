import {useState} from 'react';
import { ExpensiveComponent } from './ExpensiveComponent';
// import { WithOutMemo } from './WithOutMemo';

export const UseMemoExample = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => { 
        setCount(count + 1);
    };
    return (
      <>
        <div className="card">
          <h2 className="mb-10">useMemo Example</h2>
          <div>
            {/* <WithOutMemo /> */}
            <ExpensiveComponent />
            <button className="addBtn" onClick={handleCount}>
              Re-Render the Parent
            </button>
            <p>Parent Re-Renders: {count}</p>
          </div>
        </div>
      </>
    );
}