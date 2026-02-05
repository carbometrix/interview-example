import { allRules } from "@arnaud-barre/tsl-config";
import { core, defineConfig } from "tsl";

export default defineConfig({
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
