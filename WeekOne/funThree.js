//person constructor object function
function PersonMaker(name){
  var person = {};

  person.name = name;
  var distance_traveled = 0;

  person.sayName = function(){
    console.log("Yooooo my name is " + this.name);
  }
  person.saySomething = function(str){
    console.log(person.name + " says " + str);
  }
  person.walk = function(){
    console.log(person.name + " is walking");
    distance_traveled += 3;
  }
  return person
}
var me = PersonMaker("Julie");
me.sayName();
me.saySomething("WHAZZUUUUP");
me.walk();
console.log(me.distance_traveled);

//this is the ninja one
function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    else{
      console.log("You can get a job now.")
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}
var me = ninjaConstructor("Julie", "Blueberry")
console.log(me);
