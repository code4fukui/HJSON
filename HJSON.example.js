import { HJSON } from "./HJSON.js";

const s = `{
  # comment
  a: "abc", // comment
  b: 123, /* comment */
}`;

const obj = HJSON.parse(s);
console.log(obj);
const s2 = HJSON.stringify(obj);
console.log(s2);
