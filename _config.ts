import lume from "lume/mod.ts";
import bundler from "lume/plugins/bundler.ts";
import terser from "lume/plugins/terser.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site
  .ignore("README.md")
  .ignore("vendor")
  .copy("vendor")
  .use(bundler({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    entries: ["/app/main.jsx"],
    includes: [
      "https://cdn.jsdelivr.net/gh/JedWatson/classnames@next/index.js",
      "https://deno.land/x/react_deno@17.0.2/react.ts",
      "https://deno.land/x/react_deno@17.0.2/src/react.js",
      "https://deno.land/x/react_deno@17.0.2/dom.ts",
      "https://deno.land/x/react_deno@17.0.2/src/react_dom.js",
      "https://deno.land/x/react_deno@17.0.2/src/scheduler.js",
    ],
    options: {
      bundle: "module",
      check: false,
    },
  }))
  .use(terser())
  .use(postcss());

export default site;
