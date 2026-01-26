
function Greet({ name }) {    
    return <h2 className="textCenter">Hello World : {name} This is Functional Component Example</h2>
}

export default Greet;

// Exports the component so it can be imported and used in other files.
// default export means we can import it with any name.



// const greet = () => <h2>hello world</h2>

// export default greet;

// JSX must be transpiled by Babel. If the file or configuration doesn’t support JSX,
//  the parser treats JSX as invalid JavaScript and throws an unexpected token error.