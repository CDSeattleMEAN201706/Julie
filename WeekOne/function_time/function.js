//i am running algorithim
function runningEverywhere(){
  var y = "I need to run home!";
  console.log(y);
}
runningEverywhere();

//multiplies the value passed by 10
function multiplyByTen(digimon){
  var  pokemonIsBetter = 10 * digimon;
  console.log(pokemonIsBetter);
}
multiplyByTen(2.5);

//write two function tht reutrn two different hard-coded string
function stringReturnOne(){
  var plob = "I hope this is right?";
  console.log(plob);
}
function stringReturnTwo(){
  var blob = "Don't look at me, I don't know.";
  console.log(blob);
}
stringReturnOne();
stringReturnTwo();

//return an argument when passed a parameter
function returnArg(param){
  if (typeof(param)=="function"){
    param();
  }
}
returnArg(runningEverywhere);

//using doubleConsolelog
function doubleConsolelog(partOne, partTwo){
  if(typeof(partOne) == 'function' && typeof(partTwo) == 'function'){
    console.log(partOne(), partTwo());
  }
}
doubleConsolelog(stringReturnTwo, stringReturnOne);

//the hard problem
function caller2(param){
  console.log('starting');
  //setting the time delay
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      param(stringReturnOne, stringReturnTwo);
    }
    //this is the time delay part
  }, 2000);
  console.log('ending');
  return "interesting";
}

caller2(doubleConsolelog);
