![@tsdotnet/char: Classify characters. Letters, digits and white space.](https://cdn.jsdelivr.net/gh/tsdotnet/char@master/assets/banner.svg)

[![npm version](https://img.shields.io/npm/v/@tsdotnet/char.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/char)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/char/blob/master/LICENSE)

Character tests on char codes: digit, letter, letter-or-digit and white space (`isDigit` also takes a string).

## Install

```sh
npm install @tsdotnet/char
```

## Usage

```ts
import { isDigit, isLetter, isWhiteSpace } from '@tsdotnet/char';

isDigit('7');                    // true
isDigit('a7', 1);                // true: checks the char at index 1
isLetter('q'.charCodeAt(0));     // true
isWhiteSpace(32);                 // true
```

`isLetter`, `isLetterOrDigit` and `isWhiteSpace` take a char code.

## Use it from

ESM (`import { isDigit, isLetter, isWhiteSpace } from '@tsdotnet/char';`) or CommonJS (`const { isDigit, isLetter, isWhiteSpace } = require('@tsdotnet/char');`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/char@1/dist/umd/char.min.js"></script>
<script>
  const { isDigit, isLetter, isWhiteSpace } = tsdotnet.char;
</script>
```

</details>

## Docs

[tsdotnet.github.io/char](https://tsdotnet.github.io/char/)
