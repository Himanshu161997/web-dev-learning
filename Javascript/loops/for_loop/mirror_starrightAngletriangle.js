let size = 5;
let space = size-1; // To keep track of spaces in rows
let output = "";
for (let rowIndex = 1; rowIndex <= size; rowIndex++) { // Row
  for (let spaceIndex = 0; spaceIndex <= space; spaceIndex++) { // Space
    output += " ";
  }
  space--;
  for (let starIndex = 1; starIndex <= rowIndex; starIndex++) { // Star
    output += "*";
  }
  console.log(output);
  output = "";
}
