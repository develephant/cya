
/* Generate the readme file */

const fs = require('fs')
const colors = require('colors/safe')
const paths = require('./paths')
const pkg = require(paths.pkg_json_path)

module.exports = function genReadme(license_keys) {

  let usage_help, code_type

  if (pkg.preferGlobal === true) {
    install_cmd = `npm i -g ${pkg.name}`
  } else {
    install_cmd = `npm i -S ${pkg.name}`
  }

  //usage
  if (pkg.bin) {
    code_type = 'sh'
    usage_help = `${license_keys.program} [ARGS]`
  } else {
    code_type = 'js'
    usage_help = `const ${license_keys.program} = require('${pkg.name}')`
  }

  fs.readFile(paths.readme_tpl, 'utf8', (err, data) => {
    if (err) {
      console.log(colors.red('Could not load README template!'))
    } else {
      //check for existing file
      fs.exists(paths.readme_out, (res) => {
        if (res === true) {
          console.log(colors.yellow('README exists! Will not overwrite, please remove.'))
        } else {
          //LCTE (low ceremony templating engine)
          data = data
            .replace(/<YEAR>/, license_keys.year)
            .replace(/<AUTHOR>/, license_keys.author)
            .replace(/<PACKAGE>/g, pkg.name)
            .replace(/<PACKAGE_SHORT>/g, license_keys.program)
            .replace(/<USAGE>/, usage_help)
            .replace(/<DESCRIPTION>/, license_keys.description)
            .replace(/<INSTALL>/, install_cmd)
            .replace(/<LICENSE>/, license_keys.license)
            .replace(/<CODETYPE>/, code_type)
            .replace(/<EXAMPLE>/, '// Place example code here. I dare ya.')

          fs.writeFile(paths.readme_out, data, (err) => {
            if (err === null) {
              console.log(colors.green('README file stub created.'))
            } else {
              console.log(colors.red('Could not create README at', paths.readme_out))
            }
          })
        }
      })


    }
  })
}

// ^_^ Have a Nice Day.