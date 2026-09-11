import { createContext } from "react";
import GrandChildContext from "./GrandChildContext";

export const UserContext = createContext();

function UseContextExample() {

  const user ={ name: "Amit", age: 30, email: "amit@example.com" }; // multiple values can be passed as an object

  return (
    <div className="border-2 border-green-400 rounded-lg p-3 bg-green-50">
      <h3 className="font-bold text-green-600">Provider - wraps all children</h3>
      <p className="text-sm text-gray-500">value="Amit" available to any child</p>
      <div className="mt-2">
        {/* <UserContext.Provider value="Amit">
          <GrandChildContext/>
        </UserContext.Provider> */}

         <UserContext.Provider value={user}>
             <GrandChildContext/>
        </UserContext.Provider>
      </div>
    </div>
  );
}
export default UseContextExample;

