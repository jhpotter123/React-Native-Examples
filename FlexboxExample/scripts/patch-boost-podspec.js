const fs = require('fs');
const path = require('path');

// Idempotent patch: ensure the bundled boost.podspec points at a reliable
// SourceForge URL with the expected sha256. This runs after npm install so
// node_modules exists. It's intentionally conservative and will no-op if the
// file cannot be found.

const podspecPath = path.join(__dirname, '..', 'node_modules', 'react-native', 'third-party-podspecs', 'boost.podspec');
const expectedUrl = "https://downloads.sourceforge.net/project/boost/boost/1.76.0/boost_1_76_0.tar.bz2";
const expectedSha = "f0397ba6e982c4450f27bf32a2a83292aba035b827a5623a14636ea583318c41";

if (!fs.existsSync(podspecPath)) {
	console.log('patch-boost-podspec: boost.podspec not found at', podspecPath);
	process.exit(0);
}

let content = fs.readFileSync(podspecPath, 'utf8');
const newSource = `spec.source = { :http => '${expectedUrl}',\n                  :sha256 => '${expectedSha}' }`;

// Replace any existing spec.source block for boost.podspec
if (/spec\.source\s*=/.test(content)) {
	content = content.replace(/spec\.source\s*=\s*\{[\s\S]*?\}/m, newSource);
} else {
	// If for some reason it's not present, insert newSource before the platforms line
	content = content.replace(/(spec\.platforms\s*=)/, function(match) { return newSource + "\n\n  " + match; });
}

fs.writeFileSync(podspecPath, content, 'utf8');
console.log('patch-boost-podspec: patched', podspecPath);
