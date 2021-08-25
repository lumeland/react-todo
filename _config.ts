import lume from "lume/mod.ts";
import bundler from "lume/plugins/bundler.ts";
import terser from "lume/plugins/terser.ts";
import gpm from "https://deno.land/x/gpm@v0.3.0/mod.ts";

const site = lume();

site
  .ignore("README.md")
  .ignore("vendor")
  .copy("vendor/director.js")
  .copy("vendor/todomvc-app-css")
  .use(bundler({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    entries: ["/js/main.jsx"],
    includes: [
      new URL("https://cdn.jsdelivr.net/gh/JedWatson/classnames@next/index.js"),
      "./vendor/react-deno",
    ],
    options: {
      bundle: "module",
      check: false,
    },
  }))
  .use(terser());

// Download dependencies into `vendor`
site.addEventListener("beforeBuild", () =>
  gpm([
    {
      name: "flatiron/director",
      files: ["build/director.js"],
    },
    "tastejs/todomvc-app-css",
    {
      name: "lumeland/react-deno",
      files: ["deno"],
    },
  ]));

export default site;
