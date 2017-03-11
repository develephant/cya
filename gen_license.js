
/* Generate the license file */

const fs = require('fs')
const path = require('path')
const colors = require('colors/safe')
const paths = require('./paths')

module.exports = function genLicense(license_keys) {
  const tpl_path = path.join(paths.license_tpls, `${license_keys.license}-LICENSE.md`)
  //read in the template
  let license_tpl = fs.readFile(tpl_path, 'utf8', (err, data) => {
    if (err) {
      console.log(colors.red('Could not find license', license_keys.license+'.', 'Try cya -h'))
    } else {

      //check if license already exists
      fs.exists(paths.license_out, (res) => {
        if (res === true) {
          console.log(colors.yellow('LICENSE exists! Will not overwrite, please remove.'))
        } else {

          //replace tags 
          let copyright = `&copy; ${license_keys.year} ${license_keys.author}`

          data = data
            .replace(/<COPYRIGHT>/g, copyright)
            .replace(/<PROGRAM>/g, license_keys.program)
            .replace(/<DESCRIPTION>/g, license_keys.description)

          //burn to file
          fs.writeFile(paths.license_out, data, (err) => {
            //say stuff
            if (err === null) {
              console.log(colors.green(`${license_keys.license} license file created.`))
            } else {
              console.log(colors.red('Could not create LICENSE at'. paths.license_out))
            }
          })
        }
      })
    }
  })
}

// ^_^ Have a Nice Day.