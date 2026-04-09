import React from "react";
import Card from "../Children/Card";

export const ChildrenRenderingInList = ({children}) => {
    return (
        <>
            <Card>    
                <h2 className="font-bold text-lg">List Rendering with React.Children.map()</h2>
                
                <Card>
                    {React.Children.map(children, child => (
                        <div>{child}</div>
                    ))}
                </Card>
                {/* React.Children.map() is a special utility provided by React to safely iterate over props.children. */}
            </Card>
        
        </>
    );
}

// Use when:
// Working with props.children
    

// <Card>                        ← outer card
//     <h2>Title</h2>
//     <Card>                    ← inner card
//         <div>child 1</div>
//         <div>child 2</div>
//         <div>child 3</div>
//     </Card>
// </Card>