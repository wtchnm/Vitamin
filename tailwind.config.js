const defaultConfig = require("tailwindcss/defaultConfig");
const formsPlugin = require("@tailwindcss/forms");

module.exports = {
  purge: ["index.html", "src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Inter var", defaultConfig.theme.fontFamily.sans],
    },
  },
  darkMode: "media",
  plugins: [formsPlugin],
};
