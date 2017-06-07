//take in prototypes

//speed
//private variable called distance_travelled that starts at 0
//updateDistanceTravelled that increments distance traveled
//move that updates distance travveled and then make noise when travelled
//checkmiles that console.logs the distance_travelled

//have each vehicle generat a random VIN number.
// function createVin(){
//   var chars = "0123"
//   var vin = "";
//   for( var idx = 0; idx < 4; idx+1){
//     vin += chars[Math.floor(Math.random()*35)];
//   }
//   return vin;
// }

//this one works//
function VehicleConstructor (name, wheels, passengers, speed) {
  if (!(this instanceof VehicleConstructor)) {
    return new VehicleConstructor(name, wheels, passengers);
  }

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distanceTravelled = 0;
  this.VIN = Math.floor(1e17 * Math.random());
}

VehicleConstructor.prototype.makeNoise = function (noise) {
  noise = noise;
  console.log(noise);
}

VehicleConstructor.prototype.move = function (time) {
  this.distanceTravelled += this.speed * time;
}

VehicleConstructor.prototype.checkMiles = function () {
  console.log(this.distanceTravelled);
}

//var Tesla = new VehicleConstructor('Tesla', 4, 4, 65)
var Tesla = new VehicleConstructor("Tesla", 4, 0, 70);
var Bus = new VehicleConstructor("Grey Hound", 8, 20, 31);

// Tesla.makeNoise()
// Tesla.makeNoise('It makes no noise its a tesla')
// Tesla.move(2.5)
// Tesla.checkMiles()
// console.log(Tesla.VIN)
Bus.move(400)
Bus.checkMiles()
console.log(Bus.VIN)
