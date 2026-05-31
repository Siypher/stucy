const structures = {
  mvc: [
    "src/controllers",
    "src/models",
    "src/routes",
    "src/services",
    "src/middlewares",
    "src/config"
  ],

  mvp: [
    "src/models",
    "src/views",
    "src/presenters",
    "src/services",
    "src/config"
  ]
};

const files = {
  "app.js": `const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
`,

  "index.js": `const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`
};

module.exports = { structures, files };