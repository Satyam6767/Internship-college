// var student_name = "xyz"
// var student_name2 = "abc";
// var student_name3 = "qwwe";

// console.log(student_name2)

// imdex number      0       1       2    3    4     
// let student_name = ["xyz", "abc", "qwe", 12, true]
// console.log(student_name)
// console.log(student_name[1])
// console.log(student_name[4])









// METHODS
//*********** * length 

// var arr = [12, 45,12,12, 45, "xyz",12, 45, 12, 45, "xyz",
//      56,12, 8,"xyz", 56,12, 8, 56,12, 8,45,12, 45, "xyz",
//       56,12, 8, "xyz", 56,12, 8, "xyz", 56,12, 89]

// total number of element = 5,      6
// index number of last element = 4,    5

// let result = arr.length-1
// console.log(arr[result])



//*********** */ push 

// let to_do = ["first work", "second", "third"]
// console.log(to_do)
// to_do.push("four")
// console.log(to_do45,)



//*********** */ pop 

// let to_do = ["first work", "second", "third"]
// console.log(to_do)
// to_do.pop("third")
// to_do.pop()
// console.log(to_do)




//*********** */ shift 

// let to_do = ["first work", "second", "third"]
// console.log(to_do)
// to_do.shift()
// console.log(to_do)


//*********** */ unshift 

// let to_do = ["first work", "second", "third"]
// console.log(to_do)
// to_do.unshift("xyz")
// console.log(to_do)


// slice 

// var arr = [12, 45, "xyz",12, 45, 12, 45, "xyz",
//      56,12, 8,"xyz", 56,12, 8, 56,12, 8,45,12, 45, "xyz",
//       56,12, 8, "xyz", 56,12, 8, "xyz", 56,12, 89]


//     //   console.log(arr)
//     console.log(arr.slice(0, 6))
//     console.log(arr.slice(6, 12))



// splice => crud opertaion-> 
            // create/add/insert
            // read 
            // update 
            // delete


// var  age = [10, 20, 30, 40, 50]
// console.log(age)
// age.splice(2, 2, 90, 78, 87, 93)
// console.log(age)




var age = [11, 22, 33, 44, 55]



// output => 11,22,8,18,33, 44,55
age.splice(2,0 , 8, 18)
console.log(age)
