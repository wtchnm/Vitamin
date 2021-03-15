module.exports = (context) => ({
  plugins: {
    "@tailwindcss/jit": {},
    autoprefixer: context.env === "production" ? {} : false,
  },
});
