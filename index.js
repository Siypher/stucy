#!/usr/bin/env node

const { generateProject } = require("./lib/generator");

const projectName = process.argv[2];
const architecture = process.argv[3] || "mvc";

if (!projectName) {
  console.log("❌ Usage: nodekit <project-name> [mvc|mvp]");
  process.exit(1);
}

generateProject(projectName, architecture);
