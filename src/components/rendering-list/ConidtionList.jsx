
export const ConditionList = () => {

    const numbers = [1, 2, 3, 4, 5,6];

    return (
        <div className="card">
            <h2 className="font-bold text-lg mb-5">Conditional List Rendering</h2>
            {numbers.map( num => num % 2 === 0 ?  
                <p key = { num }> {num}</p> :null
            )}
        </div>
    )
}   

// Use when:
// Show/hide items dynamically