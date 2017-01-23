#!/usr/bin/env node

const execSync = require('child_process').execSync

let globs = process.argv.slice(2)

for (let glob of globs) {
	execSync(`git checkout -- *${glob}*`)
}
