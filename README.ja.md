# HJSON

[HJSON](https://hjson.github.io/) 互換のパーサーおよびエンコーダーです。

## 使い方

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

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
