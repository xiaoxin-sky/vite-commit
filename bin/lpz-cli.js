#!/usr/bin/env node
// console.log(process.argv.slice(2));
// console.log(process.env);
/* process.exit(111);
process.on("exit", (e) => {
  console.log("程序崩溃了",e);
});

 */
console.log(process.version);
require("../dist/server/server");
// console.log('hello');
