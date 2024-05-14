console.log("Hello World, Welcome to Web Workshop!!");

let age = 21;
const name = "Nikita";
console.log("Age=>", age);
console.log("Name=>", name);

const arr = ["apple", "Orange", "Mango"];
console.log("Show me the fruits name=>", arr);
console.log("First element of an arr=>", arr[0]);

console.log("Second element of an arr=>", arr[1]);

console.log("Third element of an arr=>", arr[2]);

if (arr[0] === "apple") {
  console.log("first condition is true");
} else if (arr[1] === "Orange") {
  console.log("Second Condition is true");
} else {
  console.log("Something went wrong");
}

function greet(name) {
  console.log(name);
}
greet("Monkey");
greet("apple");
greet("Mango");

function addNum(num1, num2) {
  return num1 + num2;
}
addNum(2, 3);
resultOfNum = addNum(5, 6);

console.log("resultOfNum", resultOfNum);

if (resultOfNum === 11) {
  console.log("Nice, Let's move on");
} else {
  console.log("Something went wrong!!");
}

//Push Method for Arrays

const array = [1, 2, 3];
console.log(array);
array.push("Hi, I am Here");
console.log(array);

const btn = document.getElementById("click-btn");

btn.addEventListener("click", function () {
  console.log("Button clicked");

  Headers.innerText = "Button Click changed";
});
