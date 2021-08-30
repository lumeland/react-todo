import { React } from "./deps.ts";
import ReactDOM from "https://deno.land/x/react_deno@17.0.2/dom.ts";
import App from "./components/app.tsx";

function render() {
  ReactDOM.hydrate(
    <App />,
    document.getElementById("app"),
  );
}

render();
