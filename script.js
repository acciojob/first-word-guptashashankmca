// function firstWord(s) {
//   // your code here
// }

// // Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));

function firstWord(s) {
  // Trim any leading or trailing spaces
  s = s.trim();

  // Find the index of the first space
  const firstSpaceIndex = s.indexOf(' ');

  // If there is no space, return the entire string
  if (firstSpaceIndex === -1) {
    return s;
  }

  // Return the substring up to the first space
  return s.slice(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

