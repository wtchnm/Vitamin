const defaultConfig = require("tailwindcss/defaultConfig");
const formsPlugin = require("@tailwindcss/forms");

module.exports = {
  purge: {
    content: ["index.html", "src/**/*.tsx"],
    preserveHtmlElements: false,
    options: {
      keyframes: true,
    },
  },
  theme: {
    fontFamily: {
      sans: ["Inter var", defaultConfig.theme.fontFamily.sans],
    },
  },
  plugins: [formsPlugin],
};
