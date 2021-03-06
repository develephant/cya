# cya

> Generate a "pretty" license from your __package.json__. Looks great in a repo, or anywhere that speaks Markdown.

![cya](http://develephant.com/projects/cya.png)

_This README.md and the LICENSE.md were generated by `cya`_

---

## Install

```
npm i @develephant/cya --global
```

## Usage

```sh
cya [ARGS]
```

## Example

Generate a "pretty" markdown `LICENSE.md` file based on keys from the root __package.json__ file.

```js
cya
```

Or, generate the `LICENSE.md` and a `README.md` file stub:

```js
cya -r
```

## Typical Workflow

```
//create your package.json
npm init

//generate a license and readme
cya -r
```

## Overrides/Help

```
cya -h
```

[You can find more details in the Wiki](https://github.com/develephant/cya/wiki/Detailed-Usage)

## Licenses Supported

|SPDX|Name|
|----:|-------|
|`Apache-2.0`|Apache License 2.0|
|`BSD-2-Clause`|2-clause BSD License|
|`BSD-3-Clause`|3-clause BSD License|
|`GPL-2.0`|GNU General Public License version 2|
|`GPL-3.0`|GNU General Public License version 3|
|`ISC`|ISC License|
|`MIT`|MIT License|
|`MPL-2.0`|Mozilla Public License 2.0|
|`Zlib`|zlib/libpng license|

_[https://opensource.org/licenses/alphabetical](https://opensource.org/licenses/alphabetical)_

^_^

---

#### `cya` &Star; &copy; 2017 develephant &Star; MIT license
