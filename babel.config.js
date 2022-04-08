module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-react-jsx", "@babel/plugin-syntax-jsx"],
};
