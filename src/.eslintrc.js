module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
      "prettier/prettier": [
          "error",
          {},
          {
              usePrettierrc: true,
          },
      ],
      quotes: ["error", "double"],
      "object-curly-spacing": ["error", "always"],
  },
};
