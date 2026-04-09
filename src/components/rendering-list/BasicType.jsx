
export const BasicType = () => {

    const users = ["Name", "Amit", "30"];

    //user.id is undefined since it's an array of strings. Use the index

    return (
        <div className="card"> 
         <h2 className="font-bold text-lg">Basic List Rendering</h2>    
            <div className="flex flex-col gap-2 mt-5">
                {users.map((user, i) =>
                  <span key={i}>{user}</span>
                )} 
            </div>
        </div>
    );

}

//Use when:
    // Simple arrays
    // Static or small data