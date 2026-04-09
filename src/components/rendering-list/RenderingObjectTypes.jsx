
export const RenderingObjectTypes = () => {

    const personNames = [
        { id: 1, name: "Amit"},
        { id: 2, name: "Kalyan"},
        { id: 3, name:"Sumit"}
    ]

    return (
        <div className="card">
            <h2 className="font-bold text-lg mb-5">List Rendering with Objects</h2>
          
            {personNames.map(personName =>                
                <p key={personName.id}>{personName.id} - {personName.name}</p>
              )}

            </div>
    );
}

// Use when:

    // Data comes from API
    // Need unique IDs