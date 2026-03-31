import React, { Suspense } from "react";

function LazyLoading() {
    
  const Profile = React.lazy(() => import("./Profile.js"));

  return (
    <div className="lazyLoading">
      <h4 className="textCenter">Lazy Loading</h4>

      <Suspense fallback={<p>Loading...</p>}>
        <Profile />
      </Suspense>
    </div>
  );
}

export default LazyLoading;

// What happens step by step?

// App renders

// Profile is not loaded yet

// React shows 👉 Loading... (fallback)

// Profile finishes loading

// React replaces fallback with <Profile />