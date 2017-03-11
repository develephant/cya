
/* Just some paths */

const path = require('path')
const work_dir =  path.resolve()

//Swoosh...
module.exports = {
  license_out:    path.join(work_dir, 'LICENSE.md'),
  license_tpls:   path.join(__dirname, 'tpl', 'licenses'),
  pkg_json_path:  path.join(work_dir, 'package.json'),
  readme_out:     path.join(work_dir, 'README.md'),
  readme_tpl:     path.join(__dirname, 'tpl', 'README.md')
}