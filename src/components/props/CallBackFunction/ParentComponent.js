import ChildComponent from "./ChildComponent";

function ParentComponent() {

    const handleData = (childData) => {
        alert(childData);
        console.log(childData);
    }

    return (
        <>
          <ChildComponent sendData={handleData} title="Parent Component" />
        </>
    );
    
}

export default ParentComponent;

// React follows unidirectional data flow, so child cannot directly update parent data.
// To send data back, we pass a callback function from parent to child.

// Parent creates a function → handleData
// Parent passes it as prop → sendData
// Child receives the function
// Child calls the function with data
// Parent receives the data