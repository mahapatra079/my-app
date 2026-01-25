import React from "react";

function Fragment() {
  const items = [1, 2, 3, 4, 5];

  return (
    <>
      <h2>this is our fragments</h2>
      <p className="textCenter">hello jsx</p>

      <ul className="textCenter">
        {items.map(item => (
          <React.Fragment key={item}>
            <li>{item}</li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default Fragment;
