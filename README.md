# React Todo Example

This is a repository to show how to create a React App with the
[Lume](https://github.com/lumeland/lume) static site generator.

This project is adapted from the fantastic [TodoMVC](https://todomvc.com/)
project, and its
[React version](https://github.com/tastejs/todomvc/tree/master/examples/react)
with the following changes:

- Upgraded to React 17 (the original version is in React `0.13`).
- Code formatted to Deno standards.
- JSX is compiled at buildtime, instead runtime.

## Getting Started

1. Clone this Repository `git clone https://github.com/lumeland/react-todo.git`
2. Make sure you have the latest version of Deno and lume installed:
   `deno upgrade && lume upgrade`
3. Run Lume `lume --serve`

## To-dos:

- [ ] Server side rendering.
- [ ] Bundle js to a single file.
- [ ] Replace/remove deprecated dependencies (like `director`)
