// Easy Problems::////////////////////////////////////////////
// Append an Element:
// const arr = [1,2,3,4,5]
// Given an array of numbers, add a new number to the end of the array .
////////////////////
/// answer ::
// console.log(arr)
// arr.push(6)
// console.log(arr)

// Remove the Last Element:
// Remove the last element from an array .
// const arr = [1,2,3,4,5]
// console.log(arr)
// arr.pop()
// console.log(arr)
//////////////

// Insert at the Beginning:
// Add an element at the start of an array .
////////////////////
// const arr = [1,2,3,4,5]
// console.log(arr)
// arr.unshift(0)
// console.log(arr)

// Remove the First Element:
// Remove the first element from an array .
/////////////////
// const arr = [1,2,3,4,5]
// console.log(arr)
// arr.shift()
// console.log(arr)

// Check if Element Exists:
// Write a function that checks if a given element exists .
// const numbers = [1, 2, 3, 4, 5];
// const x = [100,200,30]


// function check(ele, arr) {
//   let message = arr.includes(ele) ? "element exist" : "element does not exist";
//   console.log(message);
// }

//// invocation , run , call :
// check(10,numbers);
// check(100,x)

// Combine two arrays into one .

///////////////////

// const arr = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const arr3 = arr.concat(arr2)
// console.log(arr3)

// Reverse an Array:
// Reverse the elements in an array .
// const arr = [1,2,3,4,5]
// const reverse = arr.reverse()
// console.log(reverse)

//////////////////

// Slice a Subarray:  (matbadelch el origin array)
// Extract a subarray from a given array. Return elements between index 2 and 5.
////////////////////

// const arr = [1,2,3,4,5,10,20,30,80] ;   //// [3,4,5,10]

// const extract = arr.slice(2,6)
// console.log(extract)
// console.log(arr)

// Splice to Remove Elements (tbadel el origin array ..):
//  remove 3 elements from an array starting from index 2.
///////////////////////////
// const x = [1,2,3,4,5,10,20,30,80]   
// console.log(x)
// x.splice(2,3)
// console.log(x)

// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.
///////////////////////  
//  const numbers = [1,2,3,4,5,10]  //// 25 ;

//  const sum =  function (arr){
//   let sum = 0 ; 
//   arr.forEach((num)=> sum += num   ) 
//   return sum 
//  }
// console.log(sum(numbers))

// console.log(sum(arr))

// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
///////////////////////
// let names = ["jhonas" , "meachael" , "nicole" , "Peter"]
// let indexToRemove = 2 ; 
// console.log(names)
// names.splice(indexToRemove,1)
// console.log(names)

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
/////////////////////
// let names = ["jhonas" , "meachael" , "nicole" , "Peter"]
// console.log(names)
// // names.splice(2,3 ,"ahmed","rami")
// // names.splice(0,1 , "ali")
// console.log(names)

// Extract Last 3 Elements:
// Use slice to get the last 3 elements from an array.
////////////////////
// let names = ["jhonas" , "meachael" , "nicole" , "Peter"]
// const lastThree = names.slice(-3)

// console.log(lastThree)

// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////////////////////
// const arr1 = [10,200,30,60]
// const arr2 = [50,80,500,25]

// let arr3 = arr1.concat(arr2)
// console.log(arr3)


// arr3.sort((a,b)=>a-b)
// console.log(arr3)




// Find Maximum Number:
// Use forEach to find the largest number in an array.
// const arr1 = [10,200,30,60 , 1000]   //// 200 
// function max (arr){
// let max = arr[0] ;   /// 10 /// 200  // 1000
// arr.forEach((num , i)=>{
//   console.log(`index : ${i} ` , num) ; 
//   if (num > max) {
//     max = num 
//   }
// })
// return max

// }

// console.log(max(arr1))

////////////////

// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.
// const numbers = [1,10,2,10,5,6,10,100]
// const countElement = function (arr,value){
//  let count = 0 ; 
//  arr.forEach((ele)=>{
//   if (ele === value){   
//     count ++   
//   }
//  })
//  return count
// }
// console.log(countElement(numbers ,10))

// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.
// const numbers = [-1,-2,-3,-100,10,20,60]

// function removeNegative(arr){
//    let positiveNumber = [] ; 
//    arr.forEach((ele)=>{
//     if (ele > 0 ){
//       positiveNumber.push(ele)
//     }
//    })
//    return positiveNumber
// }

// console.log(removeNegative(numbers))

////////////////////

// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////
// const y = [[1,2,3],[10,20,30],[50,60,100]]
// // console.log(arr) /////====> [1,2,3,10,20,30,50,60,100]
// function flatten (arr){
// let flat = [] ;    //[1,2,3] /// [1,2,3,10,20,30] -// [1,2,3,10,20,30,50,60,100]
// arr.forEach((ele)=>{
//   flat = flat.concat(ele)
// } )
// return flat
// }

// console.log(flatten(y))





// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.
// const numbers = [1,2,3,10,20,30,50,60,100,10,100,10,60,30] ; 

// function removeDuplicates (array){
//   let withoutDouble = [] ; 
//   array.forEach((ele)=>{  
//     if (!withoutDouble.includes(ele)){
//       withoutDouble.push(ele)
//     }
//   })
//   return withoutDouble ; 
// }
// console.log(numbers)
// console.log(removeDuplicates(numbers))

//////////////////////////////////

// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.
// const numbers = [1,200,3,10,20,30] 
// function removeElement (arr,value){
//   arr.forEach((ele,i)=>{
//     console.log(i)  //0 ; 1 ; 2 ; 3 ; 4
//     if (ele === value){
//       arr.splice(i,1)
//     }
//   })
//   return arr
// } 

// console.log(removeElement(numbers , 20))

////////////////////////////////////////

// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method.
//////////////////////////////////////
// const numbers = [1,200,3,10,20,30] 

// function desendingOrder (arr){
// return arr.sort((a,b)=>b-a)
// }  

// console.log(desendingOrder(numbers))








