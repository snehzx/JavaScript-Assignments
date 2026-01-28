// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
fs.readFile("./read2.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("ERROR");
  }

  const changes = result.trim().replace(/\s+/g, " ");
  // \s+ - removes all white spaces or tab or newline
  // \t - preserve the new line

  fs.writeFile("./read2.txt", changes, "utf-8", (err, result) => {
    if (err) {
      console.log("ERROR");
    } else {
      console.log("done");
    }
  });
});
