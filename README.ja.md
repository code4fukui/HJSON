# HJSON

HJSONは[HJSON](https://hjson.github.io/)形式を扱うパーサーおよびエンコーダーです。

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

Alvaro Leiva Mirandaが2024年に作成しました。MIT Licenseの下で提供されています。