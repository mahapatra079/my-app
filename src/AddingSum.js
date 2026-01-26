import {useState } from "react"

function AddingSum (){

    const[value1,setValue1] =useState("");
    const[value2,setValue2] =useState("");

    const[addValue, setAddValue] =useState(null);

    // logic
    const AddingSum = () =>{
        setAddValue(Number(value1) + Number(value2));
    }

    return(
        <div className="adding-sum">
            <h2 className="textCenter">Adding Sum </h2>
            <div>
                <div>
                    <label>Enter The First Number</label>
                    <input type="number" className="form-control" onChange={(e)=> setValue1(e.target.value)}/>
                    {/* React passes event, not value. */}
                    {/* 
                         . onChange captures user input and updates component state using the event object
                         . React event
                         . Runs when users types in the input 
                    
                    */}
                    {/* 
                     . (e) => { ... } - arrow function, e = event oject, React automatically gives it 
                     . e.target - The HTML element that triggered the event
                     . e.target.value - current value inside the input
                   */}
                </div>
                <div>
                    <label>Enter The Second Number</label>
                    <input type="number" className="form-control" onChange={(e)=> setValue2(e.target.value)}/>
                </div>
            </div>
              <button type="button" onClick={AddingSum} className="addBtn">Add</button>
             <div>
                <label>Sum</label>
                <input type="number" className="form-control" value={addValue} />
            </div>
        </div>
    )
}
export default AddingSum;