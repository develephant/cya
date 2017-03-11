
/* Get the command line arguments */

const paths = require('./paths')
const pkg = require(paths.pkg_json_path)

const ArgParser = require('argparse').ArgumentParser

//spark up the parser
let parser = new ArgParser({
  version: pkg.version,
  description: pkg.description,
  allowAbbrev: false,
  epilog: '^_^ Cover Your A$$.'
})

//register boolean type
parser.register('type', 'bool', (val) => 
{ return Boolean(val) })

//add arguments (be nice!)
parser.addArgument(['-a', '--author'],
{ help: 'The author (copyright holder) name.' })

parser.addArgument(['-y', '--year'],
{ help: 'The copyright year.' })

parser.addArgument(['-p', '--program'],
{ help: 'The program name.' })

parser.addArgument(['-d', '--description'],
{ help: 'A short description.' })

parser.addArgument(['-l', '--license'], 
{ help: 'Generate a license using a SPDX short identifier.',
  metavar: 'SPDX',
  choices: [
    'Apache-2.0', 
    'BSD-2-Clause', 
    'BSD-3-Clause', 
    'GPL-2.0', 
    'GPL-3.0', 
    'ISC', 
    'MIT', 
    'MPL-2.0', 
    'Zlib'
  ] 
})

parser.addArgument(['-r', '--readme'],
{ help: 'Generate a basic README.md as well.',
  action: 'storeTrue' })

// ^_^ boing...
module.exports = parser.parseArgs()
