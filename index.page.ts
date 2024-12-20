import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./app/app.tsx";

const ssr = ReactDOMServer.renderToString(React.createElement(App));

export default function (_data: Lume.Data, { url }: Lume.Helpers) {
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
