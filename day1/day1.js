const fs = require("fs");

const readInputAsArray = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  let inputArray = input.split("\r\n");
  return inputArray;
};

/////////////////////////
// DAY 1

const day1a = function () {
  let depthArray = readInputAsArray("./input_day1.txt");
  //   let depthArray = ["1", "0", "5", "5", "10"];
  depthArray = depthArray.map((el) => Number(el));
  let countIncreasing = 0;

  for (let i = 1; i < depthArray.length; i++) {
    if (depthArray[i] > depthArray[i - 1]) {
      countIncreasing++;
    }
  }

  console.log(countIncreasing); // 1529
  return countIncreasing;
};

///// day 1: part 1 results
day1a(); // 1529

const day1b = function () {
  let depthArray = readInputAsArray("./input_day1.txt");
  depthArray = depthArray.map((el) => Number(el));
  let countIncreasing = 0;

  let a, b;
  for (let i = 0; i < depthArray.length - 3; i++) {
    a = depthArray[i] + depthArray[i + 1] + depthArray[i + 2];
    b = depthArray[i + 1] + depthArray[i + 2] + depthArray[i + 3];
    if (a < b) {
      countIncreasing++;
    }
  }

  console.log(countIncreasing); // 1567
  return countIncreasing;
};

///// day 1: part 2 results
day1b(); // 1567
