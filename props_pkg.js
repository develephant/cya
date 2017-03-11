
/* Get the root package.json properties object */

const fs = require('fs')
const paths = require('./paths')

//pull package.json
const pkg = require(paths.pkg_json_path)

// derive author
let author_name
if (pkg.author.name) {
  author_name = pkg.author.name
} else {
  //just the authors name, please
  author_name = pkg.author.split(' ').shift()
}

//give back what we found
const props = {
  license: pkg.license,
  author: author_name,
  description: pkg.description,
  program: pkg.name.split('/').pop()
}

// ^_^ woohoo...
module.exports = props