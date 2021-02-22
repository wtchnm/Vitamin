module.exports = (context) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: context.env === "production" ? {} : false,
  },
});
