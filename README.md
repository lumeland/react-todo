# React Todo Example

This is a repository to show how to create a React App with the
[Lume](https://github.com/lumeland/lume) static site generator.

This project is adapted from the fantastic [TodoMVC](https://todomvc.com/)
project, and its
[React version](https://github.com/tastejs/todomvc/tree/master/examples/react)
with the following changes:

- Upgraded to React 17 (the original version is in React `0.13`).
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
  - The `entries` array contains the different entry points (in this example,
    the file `/app/main.jsx` is the unique entry point, and will output
    `/app/main.js` with all dependencies included).
  - The `includes` array contain the external dependencies to be downloaded and
    included in the bundler. (this is a limitation of the current `Deno.emit()`
    that cannot download the external dependencies automatically
    [until this issue is fixed](https://github.com/denoland/deno/issues/9866))
  - The `options` key contains the `Deno.emit()` available options.
    [See Deno docs for more info](https://doc.deno.land/builtin/unstable#Deno.emit)
- The HTML file is build in `index.tmpl.ts`:
  - Imports the `<App>` component and render it.
  - Exports a function that returns a string with the html page, including the
    React app.

## Getting Started

1. Clone this Repository `git clone https://github.com/lumeland/react-todo.git`
2. Make sure you have the latest version of Deno and lume installed:
   `deno upgrade && lume upgrade`
3. Run Lume `lume --serve`
