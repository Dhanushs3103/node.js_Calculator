// imports - Native-Modules
const { randomBytes } = await import("node:crypto");

// getting the data from command line,
let data = process.argv;

// getting which type of operation need to be done from command line,
let operation = data[2];

// first number,
let first_int = data[3];

// second number,
let second_int = data[4];

// function to add,
function add(a, b) {
  if (a == undefined || b == undefined) {
    console.log("Provide both the numbers");
  } else {
    console.log(Number(a) + Number(b));
  }
}

// function to subtract,
function sub(a, b) {
  if (a == undefined || b == undefined) {
    console.log("Provide both the numbers");
  } else {
    console.log(Number(a) - Number(b));
  }
}

// function to multipy,
function multi(a, b) {
  if (a == undefined || b == undefined) {
    console.log("Provide both the numbers");
  } else {
    console.log(Number(a) * Number(b));
  }
}

// function to divide,
function divide(a, b) {
  if (a == undefined || b == undefined) {
    console.log("Provide both the numbers");
  } else {
    console.log(Number(a) / Number(b));
  }
}

// function to find tangent,
function tan(num) {
  if (num == undefined) {
    console.log("Please enter the value");
  } else if (isNaN(num)) {
    console.log("Please enter the valid number");
  } else {
    console.log(
      Math.floor(Math.tan((Number(num) * Math.PI) / 180) * 100) + "°"
    );
  }
}

// function to find Sine,
function sin(num) {
  if (num == undefined) {
    console.log("Please enter the value");
  } else if (isNaN(num)) {
    console.log("Please enter the valid number");
  } else {
    let radian = Number(num) * (Math.PI / 180);
    console.log(Math.floor(Math.sin(radian) * 100) + "°");
  }
}

// function to find CoSine,
function cos(num) {
  if (num == undefined) {
    console.log("Please enter the value");
  } else if (isNaN(num)) {
    console.log("Please enter the valid number");
  } else {
    let radian = Number(num) * (Math.PI / 180);
    console.log(Math.floor(Math.cos(radian) * 100) + "°");
  }
}

switch (operation) {
  case "add":
    add(first_int, second_int);
    break;
  case "sub":
    sub(first_int, second_int);
    break;
  case "multi":
    multi(first_int, second_int);
    break;
  case "divide":
    divide(first_int, second_int);
    break;
  case "tan":
    tan(first_int);
    break;
  case "sin":
    sin(first_int);
    break;
  case "cos":
    cos(first_int);
    break;
  default:
    console.log("Invalid operation");
}
