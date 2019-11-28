let selectedVowels = "" ;
let dupe = 0;

let w = ("nakazibwe");
w = w.split('');
const vowels = ['a','e','i','o','u']
function pickVowels(w) {
    for(i=0; i < w.length; i++){
      if (vowels.includes(w[i])) {
        
        if(selectedVowels.includes(w[i])){
           dupe = dupe + 1;
         
        } else {
         selectedVowels =  selectedVowels + w[i];
         
        }
        
          
        }
       
         
        } 
        return selectedVowels + " , " + dupe;  
      }
             


 console.log(pickVowels(w));

let arr1=[1,2,3];
let arr2=[1,4];


 function fizzBuzz(arr1,arr2) {
 let  addNumLength = arr1.length+arr2.length;
 let f;

  if (addNumLength%3==0) {
      f = ("Fizz");
  } else if (addNumLength%5==0) {
      f = ("Buzz");
  } else if (addNumLength%5==0 && addNumLength%3==0 ) {
     f = ("Fizzbuzz");
  } else{
     f=addNumLength;
  }
 


 
 return  f ;
 
 }

 console.log(fizzBuzz(arr1,arr2));
    
 let theNumber = Number(prompt("Pick a number"));
  if (!Number.isNaN(theNumber)) { console.log("Your number is the square root of " + theNumber * theNumber); 
} else { console.log("Hey. Why didn't you give me a number?"); }
