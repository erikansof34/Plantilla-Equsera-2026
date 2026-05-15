const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

function fixPaths(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  // Rutas absolutas de assets públicos → relativas (file:// compatible)
  content = content.replace(/ src="\/(?![\/#])/g, ' src="./');
  content = content.replace(/ href="\/(?![/#])/g, ' href="./');
  fs.writeFileSync(filePath, content);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith(".html")) {
      fixPaths(fullPath);
      console.log("Fixed:", fullPath);
    }
  }
}

walk(outDir);
console.log("All paths fixed.");
