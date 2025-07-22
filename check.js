const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve('./src'); // Change if your source dir is different
const TARGET_MODULE = 'Arena';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full, callback);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      callback(full);
    }
  });
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, i) => {
    const lineNum = i + 1;

    // Import statements that refer to Arena
    if (line.includes('import') && line.includes('Arena')) {
      console.log(`📥 Import in ${filePath}:${lineNum} → ${line.trim()}`);
    }

    // Export statements that define Arena
    if (line.match(/export\s+(default\s+)?class\s+Arena/)) {
      console.log(`📤 Export in ${filePath}:${lineNum} → ${line.trim()}`);
    }
  });
}

console.log(`🔍 Scanning for import/export of "${TARGET_MODULE}" in ${ROOT_DIR}...\n`);
walk(ROOT_DIR, analyzeFile);
console.log('\n✅ Scan complete.');