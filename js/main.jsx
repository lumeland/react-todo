import { React, ReactDOM } from "./deps.ts";
import App from "./components/app.tsx";
import Model from "./model.ts";

const model = new Model("react-todos");

function render() {
  ReactDOM.render(
    <App model={model} />,
    document.getElementById("app"),
  );
}

model.subscribe(render);
render();
