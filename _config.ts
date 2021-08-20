import lume from "lume/mod.ts";
import bundler from "lume/plugins/bundler.ts";
import gpm from "https://deno.land/x/gpm@v0.2.1/mod.ts";

const site = lume();

site
  .ignore("README.md")
  .copy("vendor")
  .use(bundler({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  }));

// Download dependencies into `vendor`
site.addEventListener("beforeBuild", () =>
  gpm([
    "https://unpkg.com/director@1.2.8/build/director.js",
    "tastejs/todomvc-app-css",
  ]));

export default site;
