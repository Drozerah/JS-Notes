/**
* ES5 IIFE 
*/
(function(){

  if(true){
    var v = 10;
    let l = 20;    
  }
  console.log(`v is ${v}`) // v is 10 
  console.log(`l is ${l}`) // ReferenceError: l is not defined

})()

/**
* ES6 IIFE  
*/

// (() => {

//   if(true){
//     var v = 10;
//     let l = 20;    
//   }
//   console.log(`v is ${v}`) // v is 10 
//   console.log(`l is ${l}`) // ReferenceError: l is not defined
// })()
