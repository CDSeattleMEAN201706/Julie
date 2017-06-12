//creating an object
//vehicle constructor:
//name
//number of wheels
//number of passengers
//speed
//methods:
//make nosie
//pick up passengers
//distance traveled

//add method called MOVE that calls updateDistanceTravelld and makeNoise
//method that called CHECKEDMILES that console.logs distance_traveled

// function VehicleConstructor(car_type, wheels, passengerTotal, speed){
//   this.car_type = car_type;
//   this.wheels = wheels;
//   this.passengerTotal = passengerTotal;
//   this.speed = speed;
//
//   var self = this;
//   var distance_traveled = 0;
//
//   var checkedMiles = function(){
//     console.log(distance_traveled);
//   }
//   this.move = function(){
//     updateDistanceTraveled();
//     this.makeNoise();
//   }
//   var bike = new VehicleConstructor("Bike Turbo", 2, 1, 5);
//   bike.makeNoise = function(){
//     console.log("Ring Ring MOTHAFUCK----")
//   }
//   var sedan = new VehicleConstructor("Tesla", 4, 0, 6000);
//   sedan.makeNoise = function(){
//     console.log("Teslas don't make noise.")
//   }
//   var bus = new VehicleConstructor("Greyhound", 8, 20, 50);
//   bus.makeNoise = function(){
//     console.log("Last call to califoria.")
//   }
//   // console.log("I am driving a " + this.car_type + " it has " + this.wheels + " wheels." + " It carries " + this.passengerTotal + " total."+ " We are currently going " +  this.speed + "mph.");
// }
// bike.makeNoise

function VehicleConstructor(name, wheels, passengerNumber,speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
  /* Privates */
  var distanceTraveled = 0;
  var self = this;
  function updateDistanceTraveled(){
    distanceTraveled += self.speed;
    console.log(distanceTraveled);
  }
  /* public */
  this.speed = speed;
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;

  this.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  };
  this.move = function(){
    this.makeNoise();
    updateDistanceTraveled();
  };
  this.checkMiles = function(){
    console.log(distanceTraveled);
  };

}

var car = new VehicleConstructor('car', 4, 2, 40);
car.move();
car.checkMiles();
console.log(car.speed);

var tesla = new VehicleConstructor("Tesla", 4, 0, 6600);
tesla.move();
console.log(tesla.speed);
