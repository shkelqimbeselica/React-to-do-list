import React from "react";
import ReactDOM from "react-dom";
import Authentication from "./components/Authentication";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <Authentication />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
