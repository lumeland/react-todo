import { React, ReactDOM } from "./deps.ts";
import App from "./components/app.tsx";

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById("app"),
  );
}

render();
