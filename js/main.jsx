import { React, ReactDOM } from "./deps.ts";
import App from "./components/app.jsx";
import Model from "./model.js";

const model = new Model("react-todos");

function render() {
  ReactDOM.hydrate(
    <App model={model} />,
    document.getElementById("app"),
  );
}

model.subscribe(render);
render();
