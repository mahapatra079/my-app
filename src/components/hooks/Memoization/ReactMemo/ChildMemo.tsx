import React from "react";

const ChildMemo = React.memo(({ name }: { name: string }) => {
  console.log("ChildMemo rendered - prop changed to:", name);
    return (
      <>
        <div className="card">
          <h1 className="font-bold">{name}</h1>
        </div>
      </>
    );
});

export default ChildMemo;