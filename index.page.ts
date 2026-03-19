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
			<section class="todoapp" id="app"></section>
			<footer class="info">
				<p>Double-click to edit a todo</p>
				<p>
					Created by <a href="http://github.com/petehunt/">petehunt</a>
					As a part of <a href="http://todomvc.com">TodoMVC</a>
				</p>
			</footer>

			<script type="module" src="${url("/app/main.js")}"></script>
		</body>
	</html>
	`;
}
