import React from "react";

function Fragment() {
  const items = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="card">
        <h2 className="font-medium text-xl">Fragments</h2>
        <p className="text-lg text-gray-500 border-2 border-gray-300 p-2 mt-20">Hello JSX</p>

        <ul className="flex flex-col gap-2 mt-4 text-gray-500">
          {items.map(item => (
            <React.Fragment key={item}>
              <li>{item}</li>
            </React.Fragment>
          ))}
          </ul>
        </div>
    </>
  );
}

export default Fragment;
// Fragments let you group a list of children without adding extra nodes to the DOM.
// This is useful when you want to return multiple elements from a component without wrapping them in a div or another container element.
// key is required when using Fragments in a list to help React identify which items have changed, are added, or are removed.
