const size = 5;
let output = "";

for (let index = 1; index <= size; index++) {
  for (j = 1; j <= index; j++) {
    output += "*";
  }
  console.log(output);
  output = "";
}

