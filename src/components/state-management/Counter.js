
export const Counter =()=>{
    let count = 0;
    const handleCounter = ()=>{
        count = count +1; 
        console.log(count);
    }
    return(
        <>
            <div className="counter">
                <h3>State Management - without State</h3>
                <p>Counter</p>
                <button type="button" className="addBtn" onClick={handleCounter}>Counter</button>
            </div>
        </>
    )
}

// count = count + 1
// this is normal js logic that will show in console 
// but this won't render in the ui i.e where STATE comes to the picture to render in the browser