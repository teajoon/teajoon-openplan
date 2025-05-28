import { config } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    rules: {
      "indent": ["error", 2],
      "semi": [2, "always"]
    }
  }
];
