const fs = require("fs");
const path = require("path");
const { structures, files } = require("./template");

function generateProject(name, architecture) {
  const targetDir = path.join(process.cwd(), name);

  const structure = structures[architecture] || structures.mvc;

  fs.mkdirSync(targetDir, { recursive: true });

  structure.forEach((folder) => {
    fs.mkdirSync(path.join(targetDir, folder), { recursive: true });
  });

  fs.writeFileSync(
        path.join(targetDir, "README.md"),
        `# ${name} (${architecture.toUpperCase()})`
  );

    fs.writeFileSync(
        path.join(targetDir, ".gitignore"),
        [
        "node_modules",
        "dist",
        ".env"
        ].join("\n")
    );

    fs.writeFileSync(
        path.join(targetDir, ".env"),
        `PORT=3000`
    );

    createFiles(targetDir);

  console.log(`🚀 Created ${name} using ${architecture.toUpperCase()}`);
}

function createFiles(targetDir) {
  Object.entries(files).forEach(([fileName, content]) => {
    fs.writeFileSync(
      path.join(targetDir, fileName),
      content
    );
  });
}


module.exports = { generateProject,createFiles};