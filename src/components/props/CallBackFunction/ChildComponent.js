// Child Component
function ChildComponent({ sendData, title }) {

    return (
        <button onClick={() => sendData("Hello Parent!")} className="mt-5 addBtn">Click Me { title }</button>
    );
    
}

export default ChildComponent;