import * as t from "https://deno.land/std/testing/asserts.ts";
import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { EXT } from "https://code4fukui.github.io/EXT/EXT.js";
import { HJSON } from "../HJSON.js";

Deno.test("all", async () => {
  const tests = (await dir2array("./")).filter(i => i.endsWith(".hjson"));
  for (const item of tests) {
    console.log(item);
    const src = await Deno.readTextFile(item);
    if (item.indexOf("_test") >= 0) {
    //if (item.indexOf("/fail") >= 0) {
      //continue; // t.assertThrows(() => HJSON.parse(src));
      t.assertThrows(() => HJSON.parse(src));
    } else {
      const chk = await Deno.readTextFile(EXT.set(item, "json"));
      console.log(item);
      const obj = HJSON.parse(src);
      const obj2 = JSON.parse(chk);
      t.assertEquals(obj, obj2);
    }
  }
});
