export const Destructuring = () => { 
    const person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    const { name, age, city } = person; // Destructuring 
    console.log("Name:", name, "Age:", age, "City:", city); // Output: Name: John Age: 30 City: New York
    return (
        <div className="card">
            <h2 className="font-bold text-lg mb-5">Destructuring -  Used to extract values from objects/arrays</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}


// let obj = {
//     name: "Alice",
//     age: 30,
//     city: "New York"
// };

// option1: let { name, age, city } = obj; - "destructuring"
// option 2: let readname = obj.name;
// option 3: let readage = obj["age"];


// Key point:
    // Used everywhere (React + normal JS)
    // Not related to lifecycle or state initialization