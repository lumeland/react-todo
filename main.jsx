import { ReactDOMClient } from "react";
import App from "./app/app.tsx";

function render() {
  ReactDOMClient.hydrateRoot(
    document.getElementById("app"),
    <App />,
  );
}

render();
