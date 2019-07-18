var exampleUnit= "103A unit"; 
var unitArray = exampleUnit.split(" "); 
var justTheUnit = "";
var regex = /\d/g;
var n = unitArray.length;


if (exampleUnit.includes('no')){ 
    //execute function that would return no
        justTheUnit = "no";
        console.log(justTheUnit);

}
else {
    if (regex.test(unitArray[0]) == true) {
        justTheUnit =unitArray[0];
        console.log(justTheUnit);
    }
    else {
        justTheUnit = unitArray[n-1];
        console.log(justTheUnit);

    }
  //var unitExtraction = exampleUnit.replace(/^\D+/g, ''); // only returns the number 

}
// examples of strings 103, #103, unit 103, apt 103,
// what if its on the first floor?
 // should only return the numbers

