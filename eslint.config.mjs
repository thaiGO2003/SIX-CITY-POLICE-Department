import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint/config";
import { dirname } from "path";
import { fileURLToPath } from "url";

const baseDirectory = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory });

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  globalIgnores([".next/**", "node_modules/**", "next-env.d.ts"]),
];

export default config;
