module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "**/tsconfig.json",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@next/next/no-img-element": "off",
  },
};
