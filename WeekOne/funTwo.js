//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function getAllSum(x, y){
  var sum = 0;
  for(var i = x; i < y + 1; i++){
    sum += i;
  }
  console.log(sum);
}
getAllSum(4,8);

//Write a loop that will go through an array, find the minimum value, and then return it

function getTheMin(arr){
  var min = arr[0];
  for (var i = 0; i <= arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
      }
    }
    console.log(min);
  }
getTheMin([1,2,3,4,5]);

// Write a loop that will go through an array, find the average of all of the values, and then return it

function getTheAverage(arrayone){
  var sum =0;
  for( var i =0; i < arrayone.length; i ++){
    sum+=arrayone[i];
  }
  console.log(sum/arrayone.length);
}
getTheAverage([1,2,3]);

// Rewrite these 3 as anonymous functions assigned to variables.

var findSum = function(x, y){
  var sum = 0;
  for(var i = x; i < y + 1; i++){
    sum += i;
  }
  return sum;
}
console.log(findSum(3,5));

var getMin = function(arr){
  var min = arr[0];
  for (var i = 0; i <= arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
      }
    }
  return min;
}
console.log(getMin([2,1,3,0,10]));

var getAverage = function(array){
  var sum = 0;
  for( var i =0; i < array.length; i ++){
    sum+=array[i];
  }
  return sum/array.length;
}
console.log(getAverage([1,3,5]));

// Create a JavaScript object called person with the following properties/methods
var person = {
  name : "Julie Kim",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  beConfident:function(){
    console.log("I'm going to assume that this is correct...hopefully.");
  }
}
//console.log(person.distance_traveled);
person.beConfident();
person.walk().run();
console.log(person.distance_traveled);
