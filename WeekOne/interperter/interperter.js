//problem 1
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

//solution 1
var first_variable;
function firstFunc(){
  first_variable = "Not Aymore";
}
console.log(first_variable);
first_variable = "Yipee i was first";
console.log(first_variable);

//problem 2
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

//solution 2
var food;
function eat(){
  var food;
  food = "beef";
  console.log(food);
}
food = "bbq Pork";
eat();
console.log(food);

//problem 3
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

//solution 3
var new_word;
function lastFunc(){
  new_word = "old word";
  //console.log("new_word");
}
new_word = "New!";
console.log(new_word);
