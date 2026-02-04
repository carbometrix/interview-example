import { allRules } from "@arnaud-barre/tsl-config";
import { type AST, type Context, core, defineConfig, type Rule } from "tsl";

export default defineConfig({
  ignore: [
    "prisma/generated",
    "prisma/_ts-migrations-history/",
    "src/generated/",
  ],
  rules: [
    ...allRules,
    core.strictBooleanExpressions({
      allowAny: true,
      allowNullableBoolean: true,
      allowNullableEnum: true,
      allowNullableNumber: true,
      allowNullableObject: true,
      allowNullableString: true,
      allowNumber: false,
      allowString: true,
    }),    
  ],
});

