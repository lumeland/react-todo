import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import lightningcss from "lume/plugins/lightningcss.ts";

const site = lume();

site
  .ignore("README.md")
  .ignore("app")
  .use(esbuild({
    extensions: [".jsx"],
  }))
  .use(lightningcss());

export default site;
