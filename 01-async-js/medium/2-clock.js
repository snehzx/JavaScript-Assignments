// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function update() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let second = now.getSeconds();
  console.log(`${hours}:${minutes}:${second}`);
}
setInterval(update, 1000);
