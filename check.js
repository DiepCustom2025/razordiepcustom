const fs = require('fs');
const path = require('path');

const targetName = 'Arena';
const relativePath = '../Native/Arena'; // adjust if you used './Native/Arena' in some files
const sourceDir = path.resolve('./src'); // change to './lib' if needed

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      callback(fullPath);
    }
  });
}

function fixFile(filePath) {
  let contents = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  const importRegex = new RegExp(`import\\s+${targetName}\\s+from\\s+['"](.*/)?${targetName}['"];?`, 'g');

  contents = contents.replace(importRegex, (match, prefix) => {
    modified = true;
    const fixedPath = prefix ? `${prefix}${targetName}` : targetName;
    return `import { ${targetName} } from '${fixedPath}';`;
  });

  if (modified) {
    fs.writeFileSync(filePath, contents, 'utf-8');
    console.log(`✅ Fixed import in: ${filePath}`);
  }
}

console.log('🔍 Scanning files to fix Arena imports...');
walkDir(sourceDir, fixFile);
console.log('✅ Done fixing Arena imports.');