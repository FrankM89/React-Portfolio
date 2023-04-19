module.exports = {
  plugins: [
    // Add plugins or configurations needed
  ],
  scripts: {
    build: "craco build",
    "build:css":
      "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
  },
};
