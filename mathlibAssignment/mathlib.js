module.exports = function (){
  return {
    add: function(num1, num2) {
         // add two numbers
         return(num1+num2);
    },
    multiply: function(num1, num2) {
         // multiply two numbers
         return(num1*num2);
    },
    square: function(num2) {
         // square that number
         return(Math.floor(Math.sqrt(num2)));
    },
    random: function(num, num3) {
         // given a range pick a random number from the range
         return(Math.floor(Math.random()*num3)+num);
    }
  }
};
