//THIS IS LOGGING
    function logValues(){
      var x = [3, 5, "dojo", "michael", "Sensei"];
      for(var i = 0; i < x.length; i++){
        console.log(x[i]);
      }
    }
    logValues();

//THIS IS PUSHING 100 INTO ARRAY
  var x = [3, 5, "dojo", "michael", "Sensei"];
  x.push(100);
  console.log(x);

//ADD A NEW ARRAY TO EXISTING ARRAY
  var x = [3, 5, "dojo", "michael", "Sensei"];
  var b = ["hello", "world", "JavaScript is Fun"];
  var c = x.concat(b);
  console.log(c);

//GET THE SUM OF NUMBERS FROM 1-500
  function getSum(){
    var sum = 0;
    for (var i = 1; i < 501; i++){
      sum += i;
    }
  }
  getSum();

//GET THE MIN VALUE OF ARRAY
  function getMinValue(){
    var x = [1,5,90,25,-3,0];
    var min = 0;
    for (var i = 0; i <x.length; i++){
      if(x[i]<min){
        min = x[i];
      }
    }
    console.log(min);
  }
  getMinValue();

//GET THE AVERAGE OF ARRAY
function getAverage(){
  var x = [1,5,90,25,-3,0];
  var sum = 0;
  for (var i = 0; i <x.length; i++){
    sum = sum+x[i];
  }
  console.log(sum/x.length);
}
getAverage();

//NAVIGATE THROUGH THE OBJECT GIVEN
  function goThroughObject(){
    var newDigimon = {
      name: "Allegro",
      type: "Virus",
      digiEvolution: "Ultimate Form",
      trainer: "Julie",
    };
    //this is ending the object not actualy ending the function
    for(var key in newDigimon){
      console.log(key + ":" + newDigimon[key]);
    }
  }
  goThroughObject();
