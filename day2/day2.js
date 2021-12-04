const fs = require("fs");

const readInputAll = function (file) {
  let input = fs.readFileSync(file).toString("utf-8");
  return input;
};

/////////////////////////
// DAY 2

const input = readInputAll("./input_day2.txt");
// const input = readInputAll("../test.txt");
const instructions = input.split("\n");
// console.log(instructions);

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
const lastPosition = day2a(instructions); // { h: 1823, d: 1018 }
const result = lastPosition.h * lastPosition.d;
console.log(result); // 1855814
