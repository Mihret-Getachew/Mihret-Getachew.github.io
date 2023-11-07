// question 4 a
for (let x = 1; x < 6; x++) {
  let str = "";
  for (let j = 1; j < 6; j++) {
    str += j;
  }
  console.log(str);
}
// question 4b
for (let x = 1; x < 6; x++) {
  let str = "";
  for (let j = 1; j <= x; j++) {
    str += x;
  }
  console.log(str);
}
// question 4c
for (let x = 5; x >= 1; x--) {
  let str = "";
  for (let j = 1; j <= x; j++) {
    str += x;
  }
  console.log(str);
}
