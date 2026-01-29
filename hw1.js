//Array Functions


//
function sum(arr){
    let total=0;
    for (const n of arr){
        total+=n;
    }
    return total
}

function average(arr){
    return sum(arr)/arr.length;
}

function min(arr){
let m =arr[0];
for(const n of arr){
    if(n < m) m = n;
}
return m;
}


function max(arr){
let m =arr[0];
for(const n of arr){
    if(n > m) m = n;
}
return m;
}

//String Functions
function capitalize(str){
    let arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

function reverse(str){
    let reversedString = "";
    for (const char of str) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

function countVowels(str){
    let vowelCount = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            vowelCount++;
        }
    }
    return vowelCount;
}


//Object Practice

const student = {

name: "Henry",
age: 20,
grades: [85, 90, 78],

getAverage: function() {
   
},

isHonorRoll: function() {
    
}

}
