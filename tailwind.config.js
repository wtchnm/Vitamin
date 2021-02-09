const formsPlugin = require("@tailwindcss/forms");

module.exports = {
  purge: {
    content: ["index.html", "src/**/*.tsx"],
    preserveHtmlElements: false,
    options: {
      keyframes: true,
    },
  },
  plugins: [formsPlugin],
};
