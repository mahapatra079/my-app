import React, { Component } from "react";
// Imports Component class to create class-based components

class ClassComponent extends Component {
// Defines a class component
// extends Component gives access to React features

    render() {
    //   render() is mandatory in class components 
    // It returns JSX
    
      return (
        <div className="card">
          <h2 className="font-medium text-xl">Class Component</h2>
          <p className="text-lg text-gray-500 border-2 border-gray-300 p-2 mt-20">Class Component Example</p>
      </div>
    );
  }
}

export default ClassComponent;


// A class component extends React.Component and must contain a render method that returns JSX.

// Why does return need to be on the same line?
// Because JavaScript automatically inserts a semicolon after return, causing it to return undefined.