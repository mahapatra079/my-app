
export const WithOutMemo = () => {
    console.log('WithoutMemo Component Rendered');
    const sum = () => {
        let i = 0;
        for (i = 0; i < 1000000000; i++) {
            i = i + 1;
        }
        return i;
    }
    const total = sum();
    return <p> sum: {total}</p>
}

// This component simulates an expensive computation by running a loop that counts to a very large number.
// The console log statement will help us see when the component is re-rendered.
// Here the expensive computation will run every time the parent component re-renders, causing unnecessary re-renders of the WithoutMemo component.