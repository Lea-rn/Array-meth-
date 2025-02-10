////////////// slice //////////////// (copie)
/// matbadelech l origin array ..
/// matehssebech el end number ...

// let arr = ["a","b","c","d","e"]

// syntaxe :::  Array.slice(Start number,end number)
// console.log(arr.slice(1,4))
// console.log(arr)
// console.log(arr.slice(1))

// console.log(arr[arr.length-1])
// console.log(arr.slice(-1))
//********************************* */

//// spread operator :
// console.log(...arr)

////////////// splice //////////////////
//// tbadel el origin array
/// ==> taamel delete lel partie ...

// let arr = ["a","b","c","d","e"]
// console.log("before:" , arr)

// arr.splice(1,3)
// arr.splice(2,2)
/// syntaxe : splice("mnin bech tabda tfasakh" , "kadeh bech tfasakh")

// console.log("after:" , arr)

//////// reverse ///   ( tbadel el origin array)

// let arr = ["a","b","c","d","e"] ;
// console.log(arr)
// arr.reverse() ;
// console.log(arr)

///// concat //////
// let arr = ["a","b","c","d","e"]
// const arr2 = ["f" ,"j" , "h"]

// const arr3 = arr.concat(arr2)
// console.log(arr3)
// const arr3 = [...arr , ...arr2]
// console.log(arr3)

//// join  (copie) :::

// let arr = ["a","b","c","d","e"]
// console.log(arr)
// console.log(arr.join("!!"))
// console.log(arr)

//// push() ; pop () ; shift() ; unshif() ; includes() ; indexOf ; length ;slice ;
//  splice ; reverse () ; concat () ; join ()

///////////////// at /////////////////////////////  arr.at(index)
// const arr = [23, 11, 64, 200];

/// ==> 0,1,2,3     ||| <== -1,-2,-3...
//  console.log(arr[arr.length-1])
// console.log(arr.at(0));
///////////// for ///////////////////////
// const numbers = [1,2,3,4,5,6,7,10] ; 
// console.log(numbers.length) // 8

// for (let i = 0 ; i < numbers.length ; i++ ){
//  console.log(numbers[i])  
// }

// for (let i = numbers.length-1 ; i>=0 ; i-- ){
//     console.log(numbers[i])
// }

///// automatic for ;  /// ==> incriment ++ 
// const numbers = [1,2,3,4,5,6,7,10] ; 
// for (const element of numbers){
//     console.log(element)
// }

// const names = ["khouloud","nader", "maha" , "jalila" , "donia"] ;

// for (const ele of names) {
//     console.log(ele)
// }

///// automatic for /////// 

// const movements = [200,450,-400,1000,-800,100] ;

// for (const mov of movements){
//     if (mov > 0 ) {
//         console.log(`you deposit ${mov} $`)
//     }
//     else {
//         console.log(`you withdraw ${Math.abs(mov)} $`)
//     }
// }

/////// forEach ///// (higher order function == tekhidh function fel parametre )

///// essem-array.forEach(())

// const movements = [200,450,-400,1000,-800,100] ;

// movements.forEach(function(ele,index){  
//   if (ele > 0 ){
//     console.log(`movement ${index+1} : you deposit ${ele} $`)
//   }
//   else {
//     console.log(`movement ${index+1} : you withdraw ${Math.abs(ele)} $`)
//   }
// })


///////// fhemna beha ///////////////////////
// function welcome (name,age){
//     console.log(`hello  my name is ${name} i'm ${age} years old `)
// }


// welcome("jhonas" , 35)
//////////////////////////////////////////////////////

// const names = ["khouloud","nader", "maha" , "jalila" , "donia"] ;
// for (const name of names){
//     if (name === "jalila") break ;
//     console.log(name)
// }

//// braem matemchich maa forEach ... 

// names.forEach((ele)=>{
//     if (ele === "jalila") break ; 
//     console.log(ele)
// }  )


// let array1 = [5,3,8] ;  
// let array2 = [7,2,4] ; 
////// concatenate the two arrays ; 
// const array3 = array1.concat(array2)
// console.log(array3)


/////// sort //// 
// const result = array3.sort((a,b)=> b-a)
// console.log(result)

// const names = ["khouloud","nader", "maha" , "jalila" , "donia" , "zohaier"] ;

// const result = names.sort((a,b)=>b.localeCompare(a))
// console.log(result)

