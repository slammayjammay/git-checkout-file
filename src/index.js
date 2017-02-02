#!/usr/bin/env node

const execSync = require('child_process').execSync
const gitFiles = require('git-files')

let globs = process.argv.slice(2)
let files = gitFiles.all()
let matchedFiles = {}

for (let glob of globs) {
	// case-insensitive for now
	let regex = new RegExp(glob, 'i')
	let matches = files.filter(file => regex.test(file))
	matches.forEach(file => matchedFiles[file] = true)

}

for (let file of Object.keys(matchedFiles)) {
	execSync(`git checkout -- ${file}`)
}
