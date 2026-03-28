
function FuncationalComponment({ name }) {    
    return (
        <div className="card">
            <h2 className="font-medium text-xl">Functional Component</h2>
            <p className="text-lg text-gray-500 border-2 border-gray-300 p-2 mt-20">Hello World : {name}</p>
        </div>
    );
}

export default FuncationalComponment;

// Exports the component so it can be imported and used in other files.
// default export means we can import it with any name.



// const greet = () => <h2>hello world</h2>

// export default greet;

// JSX must be transpiled by Babel. If the file or configuration doesn’t support JSX,
//  the parser treats JSX as invalid JavaScript and throws an unexpected token error.