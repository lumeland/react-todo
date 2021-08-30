import { React, ReactDOM } from "./deps.ts";
import App from "./components/app.tsx";

function render() {
  ReactDOM.hydrate(
    <App />,
    document.getElementById("app"),
  );
}

render();
