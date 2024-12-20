import ReactDOMClient from "react-dom/client";
import App from "./app/app.tsx";

function render() {
  ReactDOMClient.hydrateRoot(
    document.getElementById("app"),
    <App />,
  );
}

render();
