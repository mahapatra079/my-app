import ParentComponent from "../../CallBackFunction/ParentComponent";
import ParentWithoutDestructuring from "../Without Destructuring/ParentWithoutDestructuring";

function ChildDestructuring({header,title,subTitle}){
    // Destructuring is a JavaScript syntax that lets you extract values from arrays or objects into variables in one line.
    console.log(header,title,subTitle)
    return (
        <>
          <div className="card">
             <h2 className="font-bold text-xl">Props - With Destructuring</h2>
             <p className="text-lg text-gray-500 border-2 border-gray-300 p-2 mt-20">{header} - data flow from {title} to {subTitle}</p>
         </div>
            <div className="card">
                <ParentWithoutDestructuring/>
            </div>
            <div className="card">
                <h2 className="font-bold text-xl">Props Handling - child to parent (callback function)</h2>
                <ParentComponent/>
            </div>
        </>
    )
}

export default ChildDestructuring;