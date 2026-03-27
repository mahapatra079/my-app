import { useMemo } from "react";

export const ExpensiveComponent = () => {
    console.log('Expensive Component Rendered');
    const sum = () => {
        let i = 0;
        for (i = 0; i < 1000000000; i++) {
            i = i + 1;
        }
        return i;
    }

    const total = useMemo(() => {
        // This function will only be executed once when the component is first rendered, and the result will be memoized.
        return sum();
    }, []);

    // const total = sum();
    return <p> sum: {total}</p>
}

// This component simulates an expensive computation by running a loop that counts to a very large number.
// The console log statement will help us see when the component is re-rendered.
// In the UseMemoExample component, we will use the useMemo hook to memoize the result of this expensive computation so that it only re-runs when necessary,
// preventing unnecessary re-renders of the ExpensiveComponent when the parent component re-renders.
