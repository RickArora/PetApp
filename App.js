import React from "react";
import { render } from "react-dom";
import SearchParam from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParam />
    </div>
  );
};

render(<App />, document.getElementById("root"));
