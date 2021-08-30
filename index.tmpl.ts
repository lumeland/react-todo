import { Helper } from "lume/core.ts";
import ssr from "./js/server.tsx";

interface Helpers {
  [key: string]: Helper;
}

export default function (_data: unknown, { url }: Helpers) {
  return `<!doctype html>

	<html lang="en">
		<head>
			<meta charset="utf-8">
			<title>React • TodoMVC</title>
			<link rel="stylesheet" href="${url("/styles.css")}">
		</head>
		<body>
			<section class="todoapp" id="app">${ssr()}</section>
			<footer class="info">
				<p>Double-click to edit a todo</p>
				<p>
					Created by <a href="http://github.com/petehunt/">petehunt</a>
					As a part of <a href="http://todomvc.com">TodoMVC</a>
				</p>
			</footer>

			<script type="module" src="${url("/js/main.js")}"></script>
		</body>
	</html>
	`;
}
