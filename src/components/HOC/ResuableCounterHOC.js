
import { useState } from "react";

const ResuableCounterHOC = (OldComponent) => {
    return function NewComponent(props) {
        
        const [count, setCount] = useState(0);
        
        const handleCount = () => {
            setCount(count + 1);
        };
        return (
            <OldComponent {...props} count={count} incrmentCount={handleCount} />
            // we can also pass the props to the old component using spread operator
            // controlling prop spread order {...props} to avoid props collision (if any)
        );
    }
}

export default ResuableCounterHOC;