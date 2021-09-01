/*
 * @Descripttion: 
 * @Author: Lijia Lin
 * @Date: 2021-09-01 10:35:03
 * @LastEditTime: 2021-09-01 11:04:39
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ]
  },
};
