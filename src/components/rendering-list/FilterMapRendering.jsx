
export const FilterMapRendering = () => {
    const users = ["Amit", "John", "Sara"];

    return (
        <div className="card">
            <h2 className="font-bold text-lg mb-5">Filter + Map Rendering</h2>
             {users
                .filter(user => user.startsWith("A")) 
                .map(user => <p key={user}>{user}</p>)}
        </div>
    )
}

// Use when:
// Search, filtering UI