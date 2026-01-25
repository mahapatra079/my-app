import React, { Component } from "react";
// Imports Component class to create class-based components

class Welcome extends Component {
// Defines a class component
// extends Component gives access to React features

    render() {
    //   render() is mandatory in class components 
    // It returns JSX
    
    return (
      <h2>Class Component Example</h2>
    );
  }
}

export default Welcome;


// A class component extends React.Component and must contain a render method that returns JSX.

// Why does return need to be on the same line?
// Because JavaScript automatically inserts a semicolon after return, causing it to return undefined.