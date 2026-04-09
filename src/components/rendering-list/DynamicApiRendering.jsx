import { useEffect, useState } from "react";

export const DynamicApiRendering = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));
     }, []);

    return (
        <>
            <div className="card">
                <h2 className="font-bold text-lg mb-5">Dynamic API List Rendering</h2>
                {users.map(user => (
                    <p key={user.id}>{user.name}</p>
                ))}
            </div>
        </>
    );
}

// Use when:
    // Backend data