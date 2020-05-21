module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks", "eslint-plugin-import-helpers"],
  rules: {
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          "/^@shared/",
          ["parent", "sibling", "index", "/^~/"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "react/state-in-constructor": ["off", "always"],
    "react/static-property-placement": "off",
    "no-console": ["error", { allow: ["tron"] }],
    "no-param-reassign": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src",
      },
    },
  },
};
