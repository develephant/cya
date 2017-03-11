# cya

> Generate a "pretty" license from your __package.json__. Looks great in a repo, or anywhere that speaks Markdown.

__Supports the following SPDX short identifiers:__

  - Apache-2.0
  - BSD-2-Clause
  - BSD-3-Clause
  - GPL-2.0
  - GPL-3.0
  - ISC
  - MPL-2.0
  - MIT
  - Zlib

  _[Licenses have been approved by the OSI](https://opensource.org/licenses/alphabetical)_

## Install

```
npm i @develephant/cya --global
```

## Usage

```sh
cya [ARGS]
```

## Example

Generate a "pretty" markdown `LICENSE` file based on keys from the root package.json file.

```js
cya
```

Also generate a `README.md` stub:

```js
cya -r
```

## Overrides

```
cya -h
```

---

#### `cya` | &copy;2017 develephant | MIT license
