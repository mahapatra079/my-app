
export const NestedList = () => {
    const categories = [
        { id: 1, items: ["A", "B"] },
        { id: 2, items: ["C", "D"] }
      ];

    return (
        <div className="card">
            <h2 className="font-bold text-lg">Nested List Rendering</h2>
          {/*  Outer loop only */}
            <div className="card">
                <h3 className="font-bold text-xs mb-5">Outer loop</h3>
                {categories.map(cat => (
                    <p key={cat.id}>{ cat.items}</p>
                ))}
            </div>
            
            {/*  Nested loop (deep) */}
           <div className="card">
                <h3 className="font-bold text-xs">Nested loop </h3>
                {categories.map(cat => (
                <div key={cat.id} className="card">
                    {cat.items.map(item => (
                    <p key={item}>{item}</p>
                    ))}
                </div>
                ))}
            </div>     
        </div>
    );

}

// Use when:
// Complex data structures (menus, comments)