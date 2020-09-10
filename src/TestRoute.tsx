import React, { useContext } from "react";

import { AppContextConsumer, context } from "./ContextAPI";

const TestRoute = () => {
  const [search, setSearch] = useContext(context);

  return (
    <div
      style={{
        position: "relative",
        top: "100px",
      }}
    >
      {/* without HOOK */}
      <AppContextConsumer>
        {(appContext) => appContext && <div>Name: {search.name}</div>}
      </AppContextConsumer>

      {/* with HOOK */}
      <div>{search.name}</div>

      {/* Data manipulation */}
      <button
        onClick={() => {
          setSearch({
            name: "12345678",
          });
        }}
      >
        change to: 12345678
      </button>
    </div>
  );
};

export default TestRoute;
