const { dir } = require("console");
const fs = require("fs");

const readInputAll = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  return input;
};

const readInputAsArray = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  let inputArray = input.split("\r\n");
  return inputArray;
};
/////////////////////////
// DAY 1

const day1a = function () {
  let depthArray = readInputAsArray("./input/day1.txt");
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
// day1a(); // 1529

const day1b = function () {
  // let depthArray = readInputAsArray("./input/day1.txt");
  let depthArray = readInputAsArray(`forward 8
  forward 3
  down 8`);
  // depthArray = depthArray.map((el) => Number(el));
  let countIncreasing = 0;

  let a, b, c;
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
// day1b(); // 1567

/////////////////////////
// DAY 2

const input = readInputAll("./input/day2.txt");
// const input = readInputAll("./input/test.txt");
const instructions = input.split("\n");
console.log(instructions);

const modifyPosition = function (position, instruction) {
  let { h, d } = position;
  let command = instruction.split(" ");
  let direction = command[0];
  let delta = Number(command[1]);

  switch (direction) {
    case "forward":
      h = h + delta;
      break;
    case "down":
      d = d + delta;
      break;
    case "up":
      d = d - delta;
      break;
    default:
      console.log("bug");
  }

  position.h = h;
  position.d = d;
  return position;
};

// console.log(modifyPosition({ h: 0, d: 0 }, "down 5"));
// console.log(modifyPosition({ h: 0, d: 5 }, "up 2"));
// console.log(modifyPosition({ h: 0, d: 3 }, "forward 5"));

const day2a = function (instructions) {
  let horiz = 0;
  let down = 0;
  let position = { h: horiz, d: down };

  for (instruction of instructions) {
    console.log(position, instruction);
    modifyPosition(position, instruction);
  }
  console.log(position);
  return position;
};

///// day 2: part 1 results
// const lastPosition = day2a(instructions); // { h: 1823, d: 1018 }
// const result = lastPosition.h * lastPosition.d;
// console.log(result); // 1855814
