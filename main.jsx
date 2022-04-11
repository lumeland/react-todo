import React from "react";
import App from "./app/app.tsx";
import ReactDOM from "react-dom";

function render() {
  ReactDOM.hydrate(
    <App />,
    document.getElementById("app"),
  );
}

render();
