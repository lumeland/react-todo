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
- Edit `_config.ts` file to change Lume configuration, specially the `bundler`
  plugin:
  - The `extensions` array indicates the types of files to load.
  - The `options` key contains the `Deno.emit()` available options.
    [See Deno docs for more info](https://doc.deno.land/builtin/unstable#Deno.emit)
- Edit the `import_map.json` file to add/change dependencies.
- The HTML file is build in `index.tmpl.ts`:
  - Imports the `<App>` component and render it.
  - Exports a function that returns a string with the html page, including the
    React app.

## Getting Started

1. Clone this Repository `git clone https://github.com/lumeland/react-todo.git`
2. Run `deno task serve`
