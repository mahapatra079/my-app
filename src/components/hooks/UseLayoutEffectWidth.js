import { useLayoutEffect, useRef, useState } from "react";

export const UseLayoutEffectWidth = () => {
  const boxRef = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
    console.log('useLayoutEffect executed');
  }, []);

    console.log('useLayoutEffect called')

  return (
    <>
      <div ref={boxRef} className="card">
         <h2>useLayoutEffect runs before the browser paints</h2>
         <p>Width: {width}px</p>
      </div>
    </>
  );
}


// What is imported?

// useRef → to access a DOM element

// useState → to store the width

// useLayoutEffect → to run logic before the browser paints

// const boxRef = useRef(null);
// boxRef is a reference object

// boxRef.current will point to the <div> DOM element

// Initially null, because DOM is not created yet
// This replaces document.getElementById

// offsetWidth returns the visible width of an element in pixels.
// offsetWidth = content + padding + border


// The width value comes from the browser’s layout calculation. offsetWidth reads the ,
// final rendered width of the element including padding and border after the DOM is laid out.