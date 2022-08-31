const { readFile, writeFile } = require("fs");
console.log("start");
// readFile asyn & writeFile sync

// for sync method we need to run a callback
// 2nd arg is callback with parameters error and result
// if you do not put "utf8" in between content and callback you will receive a buffer(a line of code repping incomatiable code), not the actual data
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", () => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile("./content/result-async.txt"),
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task");
      };
  });
  //   receive data if no error
});
console.log("starting next task");
