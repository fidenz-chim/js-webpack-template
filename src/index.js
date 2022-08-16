var converter = require('number-to-words');
var nums = [45, 456, 42334];
var count = 0;

console.log("JS loaded");

var lab = document.getElementById("label_1")
var blo = document.getElementById("block_1")
lab.innerHTML = "Value from JS"

var line,block="";
for (var i=0; i<nums.length; i++) {
  line = `${nums[i]} in words => ${converter.toWords(nums[i])}<br/>`;
  block +=line;
}
blo.innerHTML  = block;

document.getElementById('login').addEventListener('click', () => {
  console.log("Login Clicked")
  var lab2 = document.getElementById("label_2")
  lab2.innerHTML = `Clicked ${++count} times`
  });
