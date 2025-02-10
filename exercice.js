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
const numbers = [1, 2, 3, 4, 5];
const x = [100,200,30]


function check(ele, arr) {
  let message = arr.includes(ele) ? "element exist" : "element does not exist";
  console.log(message);
}

//// invocation , run , call :
// check(10,numbers);
// check(100,x)

// Combine two arrays into one .

///////////////////

// const arr = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// Reverse an Array:
// Reverse the elements in an array .

//////////////////

// Slice a Subarray:
// Extract a subarray from a given array. Return elements between index 2 and 5.
////////////////////

// Splice to Remove Elements:
//  remove 3 elements from an array starting from index 2.
///////////////////////////

// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.
///////////////////////

// console.log(sum(arr))

// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
///////////////////////

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
/////////////////////

// Extract Last 3 Elements:
// Use slice to get the last 3 elements from an array.
////////////////////

// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////////////////////

// Find Maximum Number:
// Use forEach to find the largest number in an array.

////////////////

// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.
// const arr = [1,10,2,10,5,6,10,100]

// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////////////////////

// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////
// const arr = [[1,2,3],[10,20,30],[50,60,100]]
// console.log(arr) /////====> [1,2,3,10,20,30,50,60,100]

// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.

//////////////////////////////////

// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.

////////////////////////////////////////

// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method.
//////////////////////////////////////


