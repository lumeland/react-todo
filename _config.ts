import lume from "lume/mod.ts";
import bundler from "lume/plugins/bundler.ts";
import terser from "lume/plugins/terser.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site
  .ignore("README.md")
  .use(bundler({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    entries: ["/app/main.jsx"],
    options: {
      bundle: "module",
      check: false,
    },
  }))
  .use(terser())
  .use(postcss());

export default site;
