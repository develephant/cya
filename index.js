#!/usr/bin/env node

const fs      = require('fs')
const colors  = require('colors/safe')
const paths   = require('./paths')

const fc = require('fortune-cookie');
function getFortune() {
  return fc[Math.round(Math.random() * fc.length)]
}

/* Check for package.json */

if (fs.existsSync(paths.pkg_json_path) !== true) {
  console.log(colors.red('Could not find package.json! Bye...'))
  process.exit(1)
} else {

  /* ...carry on. */

  const props_def   = require('./props_def')
  const props_pkg   = require('./props_pkg')
  const props_cli   = require('./props_cli')

  const genLicense  = require('./gen_license')
  const genReadme   = require('./gen_readme')

  //merges
  Object.assign(props_def, props_pkg)

  // check cya key in package.json
  if (props_pkg.cya) {
    Object.assign(props_def, props_pkg.cya)
  }

  //skip nulls
  for (let p in props_cli) {
    if (props_def[p]) {
      if (props_cli[p] !== null) { props_def[p] = props_cli[p] } 
    }
  }

  //generate license
  genLicense(props_def)

  //..and maybe a readme stub
  if (props_cli.readme === true) {
    genReadme(props_def)
  }

  console.log(colors.inverse(`^_^ ${getFortune()}`))
}

