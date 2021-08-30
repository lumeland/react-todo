import ReactDOMServer from "https://deno.land/x/react_deno@17.0.2/dom_server.ts";
import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import App from "./components/app.tsx";

export default function render(): string {
  return ReactDOMServer.renderToString(<App />);
}
