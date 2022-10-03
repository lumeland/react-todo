# React Todo Example

This is a repository to show how to create a React App with the
[Lume](https://github.com/lumeland/lume) static site generator.

This project is adapted from the fantastic [TodoMVC](https://todomvc.com/)
project, and its
[React version](https://github.com/tastejs/todomvc/tree/master/examples/react)
with the following changes:

- Upgraded React (the original version is in React `0.13`).
- Code formatted to Deno standards and converted to Typescript.
- JSX is compiled at buildtime, instead runtime bundled to a single file and
  minified.
- Removed unmaintained dependencies (like `director`).
- Use React hooks to manage state.
- Server-side rendered (hydrated in client-side).

### Implementation notes

- The React code is in `/app/` folder.
- The HTML file is build in `index.tmpl.ts`:

## Getting Started

1. Clone this Repository `git clone https://github.com/lumeland/react-todo.git`
2. Run `deno task serve`
