import { Helper } from "lume/core.ts";
import ReactDOMServer from "https://deno.land/x/react_deno@17.0.2/dom_server.ts";
import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import App from "./app/app.tsx";

const ssr = ReactDOMServer.renderToString(React.createElement(App));

interface Helpers {
  [key: string]: Helper;
}

export default function (_data: unknown, { url }: Helpers) {
  return `<!doctype html>

	<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			<title>React • TodoMVC</title>
			<link rel="stylesheet" href="${url("/styles.css")}">
		</head>
		<body>
			<section class="todoapp" id="app">${ssr}</section>
			<footer class="info">
				<p>Double-click to edit a todo</p>
				<p>
					Created by <a href="http://github.com/petehunt/">petehunt</a>
					As a part of <a href="http://todomvc.com">TodoMVC</a>
				</p>
			</footer>

			<script type="module" src="${url("/main.js")}" bundle></script>
		</body>
	</html>
	`;
}
