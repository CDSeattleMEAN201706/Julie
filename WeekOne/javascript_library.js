var _ = {
   map: function(array, callback) {
     //will always return an array given to it
     for(var i =0; i <array.length; i++){
       array[i] = callback(array[i]);
     }
   },
   reduce: function(array, callback, memo) {
     // will boil down an array into one value
     //memo is the initial statye of the reduction
     //memo acts as a temp variable

     for(i in array){
       memo = callback(memo, array[i]);
     }
     return memo;
   },
   find: function() {
     // will look through the list and return the first one that passes the boolean test
     for(var i =0; i <array.length; i++){
       if(callback(array[i])){
         return array[i];
       }
     }
   },
   filter: function(array, callback) {
     // same as find but will return all that pass the boolean test
     var temp = [];
     for(var i = 0; i <array.length; i++){
       if(callback(array[i])){
         temp.push(array[i]);
       }
     }
   },
   reject: function(array, predicate) {
     // returns all the values that failed the boolean test
     //another way of calling boolean = predicate
     var temp = []
     for(var i  = 0; i < array.length; i++){
       if(!predicate(array[i])){
         temp.push(array[i]);
       }
     }
     return temp;
   }
 }
var array = [3,4,5]
 _.map(array, function callback(x){return x * 3;});
 console.log(array);

var reduceTest = _.reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
 	 console.log("_.reduce --> " + reduceTest);

var rejectTest = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
		        console.log("_.reject --> " + rejectTest);

//the makes sense way
var _ = {
  map: function(arr, callback) {
      var newArr = [];
      for(index in arr) {
          newArr.push(callback(arr[index]));
      }
      return newArr;
  },
  reduce: function(arr, callback, memo) {
      for(index in arr) {
          memo = callback(memo, arr[index]);
      }
      return memo;

  },
  find: function(list, predicate) {
      for(index in list) {
          if(predicate(list[index])) {
              return list[index];
          }
      }
  },
  filter: function(list, predicate) {
      var newArr = [];
      for(index in list) {
          if(predicate(list[index])) {
              newArr.push(list[index]);
          }
      }
      return newArr;
  },
  reject: function(list, predicate) {
      var newArr = [];
      for(index in list) {
          if(!predicate(list[index])) {
              newArr.push(list[index]);
          }
      }
      return newArr;
  }
}
// Show "map" variable in underscore
var mapTest = _.map([1, 2, 3], function(num) { return num * 3; });
console.log("_.map --> " + mapTest);
// Show "reduce" variable in underscore
var reduceTest = _.reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
console.log("_.reduce --> " + reduceTest);
// Show "find" variable in underscore
var findTest = _.find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
console.log("_.find --> " + findTest);
// Show "filter" variable in underscore
var filterTest = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
console.log("_.filter --> " + filterTest);

// Show "reject" variable in underscore
var rejectTest = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
console.log("_.reject --> " + rejectTest);


//this is the correct answers
// var _ = {
//   map: function(array, callback){
//     for (var i = 0; i < array.length; i++) {
//       array[i] = callback(array[i]);
//     }
//   },
//   reduce: function(array, callback, memo){
//       var el = 0;
//       if (!memo){
//         memo = array[0];
//         el = 1;
//       }
//       for (var i = el; i < array.length; i++) {
//         memo = callback(array[i], memo);
//       }
//       return memo;
//
//   },
//   find: function(array, callback){
//     for (var i = 0; i < array.length; i++) {
//       if (callback(array[i])){
//         return array[i];
//       }
//     }
//   },
//   filter: function(array, callback){
//     var tempArray =[];
//     for (var i = 0; i < array.length; i++) {
//       if (callback(array[i])){
//         tempArray.push(array[i]);
//       }
//     }
//     // we could also modify the original array
//     return tempArray;
//   },
//   reject: function(array, callback){
//     var tempArray =[];
//     for (var i = 0; i < array.length; i++) {
//       if (!callback(array[i])){
//         tempArray.push(array[i]);
//       }
//     }
//     // we could also modify the original array
//     return tempArray;
//   },
// }
//

// console.log(_.find(array, function callback(x){return x == 15;}));
// // note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
// _.filter(array, function(x){return x > 20;})
// console.log(array);
