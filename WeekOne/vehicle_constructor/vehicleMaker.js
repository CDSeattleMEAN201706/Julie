//each vehicle needs a noise method
//using the constructor create a bike
//bike should have a "ring ring" method
//create a sedan
//sedan noise "honk honk"
//create a bus
//method to count number of passengers that get on and off

//sound maker category
//number of wheels
//number of people each car holds
//number of total people on all vehicles and how many get off

// function vehicleMaker(passengers, noise, wheels) {
// //this will create the car at the end
//   var car ={};
//   car.passengers = passengers;
//   car.noise = noise;
//   car.wheels = wheels;
//
//
// }

function VehicleConstructor (car_type, wheel, passengerTotal) {
  var vehicle = {
    car_type: car_type,
    wheel: wheel,
    passengerTotal: passengerTotal,
    makeNoise: makeNoise
  }

  function makeNoise (sound) {
    console.log(sound)
  }

  return vehicle
}

var Bike = VehicleConstructor('Bike', 2, 1)
Bike.makeNoise = function () {
  console.log('Ring, ring!')
}
Bike.pickup = function (numOfPassengers){
  Bike.passengerTotal += numOfPassengers
}

var Sedan = VehicleConstructor('Sedan', 4, 5)
Sedan.makeNoise = function () {
  console.log('Honk, honk!')
}

var Bus = VehicleConstructor('Bus', 4, 10)
Bus.pickUp = function (numOfPassengers) {
  Bus.passengerTotal += numOfPassengers
}

Bike.makeNoise()
Sedan.makeNoise()
Bus.pickUp(10)
Bike.pickup(2)
console.log(Bus.passengerTotal)
console.log(Bike.passengerTotal)
