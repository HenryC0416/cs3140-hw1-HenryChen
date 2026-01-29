// Homework 1: JavaScript Fundamentals
// Name: YOUR NAME HERE
// Date: 1/29/2026



// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

// Returns the sum of all numbers in an array
function sum(arr){
    let total=0;
    for (const n of arr){
        total+=n;
    }
    return total
}

// Returns the average of numbers in an array
function average(arr){
    return sum(arr)/arr.length;
}

// Returns the smallest number in an array
function min(arr){
let m =arr[0];
for(const n of arr){
    if(n < m) m = n;
}
return m;
}

// Returns the largest number in an array
function max(arr){
let m =arr[0];
for(const n of arr){
    if(n > m) m = n;
}
return m;
}


// ============ PART 2: STRING FUNCTIONS ============
//Capitlizes first letter of string
function capitalize(str){
    let arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}
//reverses string
function reverse(str){
    let reversedString = "";
    for (const char of str) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

//Counts vowels in string
function countVowels(str){
    let vowelCount = 0;
    for(const char of str.toLowerCase()){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            vowelCount++;
        }
    }
    return vowelCount;
}


// ============ PART 3: OBJECT ============

const student = {

name: "Henry",
age: 20,
grades: [85, 92, 78, 90, 88],

// Calculates the student's average grade
getAverage: function() {
    let total =0;
    for(const grade of this.grades){
        total +=grade;
    }
    return total/this.grades.length;
},

// Checks if the student qualifies for honor roll
isHonorRoll: function() {
    return this.getAverage() >= 85;
}

}



// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());