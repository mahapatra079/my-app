export const Destructuring = () => { 
    const person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    const { name, age, city } = person; // Destructuring 
    console.log("Name:", name, "Age:", age, "City:", city ); // Output: Name: John Age: 30 City: New York
    return (
        <div className="card">
            <h2 className="font-bold text-lg mb-5">Destructuring -  Used to extract values from objects/arrays</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}

//Destructing Object
const  user = 
{
    name:'Amit',
    age:30
};

const {name,age} = user;
console.log(name,age)

// Destructurin  with arrays
const color =['red','green','yellow'];
const [first,second,_] = color  //first will be 'red', second will be 'green' and _ will be 'yellow' but we are not using it so we can ignore it by using _

console.log(first,second)