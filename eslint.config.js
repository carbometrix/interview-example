import baseConfig from "@arnaud-barre/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(...baseConfig, {
  rules: { "no-extra-boolean-cast": "off" },
});
