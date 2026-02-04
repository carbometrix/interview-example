import baseConfig from "@arnaud-barre/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [
      ".idea/",
      "prisma/generated.ts",
      "prisma/_ts-migrations-history/",
      "prisma/generated/",
      "src/generated/",
    ],
  },
  ...baseConfig,
  {
    rules: {
      "no-extra-boolean-cast": "off",
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          extraHOCs: ["wrapFormComponentHOC", "wrapComplexFormComponentHOC"],
        },
      ],
    },
  },
  {
    files: ["emails/**/*.tsx"],
    rules: {
      "@arnaud-barre/no-default-export": "off",
      "react-refresh/only-export-components": "off",
    },
  },
);
