var exampleUnit= "it's 1 floor"; 
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
   
    if (regex.test(unitArray[0]) == false && regex.test(unitArray[n-1]) == false) {
        for(var i =0; i < n; i++) {

                if (regex.test(unitArray[i]) == true)
                justTheUnit = unitArray[i];
                console.log(justTheUnit);
        }
    }

    else {
        justTheUnit = unitArray[n-1];
        console.log(justTheUnit);

    }

}
// examples of strings 103, #103, unit 103, apt 103,
// what if its on the first floor?
 // should only return the numbers

   //var unitExtraction = exampleUnit.replace(/^\D+/g, ''); // only returns the number 


     //var unitExtraction = exampleUnit.replace(/^\D+/g, ''); // only returns the number 


