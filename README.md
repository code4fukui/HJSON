# hjson-js

an [HJSON](https://hjson.github.io/) compatible parser and encoder

**TODO: needs testing, any contrinutions are more than welcome**

## Usage

```js
import { HJSON } from "https://code4fukui.github.io/HJSON/HJSON.js";

const s = `{
  # comment
  a: "abc", // comment
  b: 123, /* comment */
}`;

const obj = HJSON.parse(s);
console.log(obj);
const s2 = HJSON.stringify(obj);
console.log(s2);
```
