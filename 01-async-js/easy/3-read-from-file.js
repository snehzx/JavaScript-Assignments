// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

fs.readFile("./read.txt", "utf-8", (error, result) => {
  if (error) {
    console.log("ERROR!", error);
  } else {
    console.log(result);
    console.log("file content");
  }
});

//async task dont return result ..

// expensive operation(cpu-bound task)

let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}
console.log("expensive operation done ");

/*
this is cpu-bound sync task
it runs on main js thread and blocks event loop 
nothing else can run before it finishes*/

/*
Async = non-blocking I/O, but callbacks still need the JS thread to run.
CPU-bound synchronous tasks block the event loop and delay callbacks.
The order you see in console depends on how long the blocking task takes.

*/
// to do more and more exp oper like doing while(true) the callback never runs
