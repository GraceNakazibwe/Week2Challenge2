function fizzBuzz(arr1, arr2) {
    // Your code here
    let  addNumLength = arr1.length+arr2.length;
    let f;
     if (addNumLength%3==0 && addNumLength%5==0 ) {//true
        f = ("Fizzbuzz");
     }else if (addNumLength%3==0) {//false
         f = ("Fizz");
     } else if (addNumLength%5==0) {//false
         f = ("Buzz");
     } else{
        f=addNumLength;
     }
    
    return  f ;
    }



module.exports = fizzBuzz;