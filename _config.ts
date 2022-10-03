import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

const site = lume();

site
  .ignore("README.md")
  .ignore("app")
  .use(esbuild({
    extensions: [".jsx"],
  }))
  .use(lightningcss())
  .use(sourceMaps({
    sourceContent: true,
  }));

export default site;
