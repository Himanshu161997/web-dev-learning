let size = 5;
let output = "";
for (let rowIndex = size; rowIndex > 0; rowIndex--) {
  for (let j = 1; j <= rowIndex; j++) {
    output += "*";
  }
  console.log(output);
  output = "";
}
