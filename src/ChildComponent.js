function ChildComponent ({name, age}){
    return(
        <div className="child-data">
            <h4 className="title">Child Component</h4>
            <span> Name : {name}</span>      
            <span className="d-block"> Age  : {age}</span>
        </div>
        
    )
}
export default ChildComponent;


// Numbers, booleans, objects, arrays, variables, expressions → use { } 
//   | Value Type | How to Pass           |
//   | ---------- | --------------------- |
//   | String     | `"Amit"`              |
//   | Number     | `{25}`                |
//   | Boolean    | `{true}`              |
//   | Variable   | `{age}`               |
//   | Expression | `{10 + 5}`            |
//   | Object     | `{{ city: "Delhi" }}` |


//  Anything that is NOT a string must go inside {} in JSX *
//   In TypeScript

//     Parent component
//     <ChildComponent name="Amit" age="30"/>

//     Child Component
//     type UserCardProps = {
//           name: string;
//           age: number;
//         };

//         example in Child Component
//           function UserCard({ name, age }: UserCardProps) {
//               return (
//                 <div>
//                   <h2>{name}</h2>
//                   <p>Age: {age}</p>
//                 </div>
//               );
//             }          
                