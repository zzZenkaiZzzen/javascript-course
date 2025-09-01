// // console.log("Part 2: Functions ready.");

// // // Functions - Declarations and Expressions
// //  function logger() {
// //     console.log("My name is Quokka");
// // }
 
// // logger();
// // logger();
// // logger();
 
// // function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// //   return juice;
// // }
 
// // console.log(fruitProcessor(5, 3));
 
// // const juice1 = fruitProcessor(5, 0);
// // const juice2 = fruitProcessor(2, 4);
// // const juice3 = fruitProcessor(3, 2);
 
// // // Function Expressions
// // const calcAge = function (birthYear) {
// //   return 2025 - birthYear;
// // };
 
// // const age1 = calcAge(2000);
// // console.log(age1);
 
// // console.log(calcAge(1991));
 
// // function introduce(firstName, lastName, age) {
// //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
// //   return introduction;
// // }
 
// // console.log(introduce("Quokka", "Doe", 25));
// // console.log(introduce("John"));
 
// // function yearsUntilRetirement(birthYear, firstName) {
// //   const age = calcAge(birthYear);
// //   const retirement = 65 - age;
 
// //   if (retirement > 0) {
// //     return `${firstName} retires in ${retirement} years`;
// //   } else {
// //     return `${firstName} has already retired`;
// //   }
// // }
 
// // console.log(yearsUntilRetirement(2000, "Quokka"));
 
 
// // // Function Scope
// // const globalVar = "I am global";
 
// // function testScope() {
// //     const localVar = "I am local";
// //     console.log(globalVar);
// //     console.log(localVar);
 
// // }
 
// // testScope();
// // console.log(globalVar);
 
// // ////////////////////////////////////
// // // Coding Challenge #1
 
// // // Function to calculate average of 3 scores
// // function calcAverage(score1, score2, score3) {
// //   return (score1 + score2 + score3) /3;
// // }
 
// // // Function to check winner
// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
// //     } else if (avgKoalas >= 2 * avgDolphins) {
// //     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
// //     } else {
// //         return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// //     }
// // }
// //   // Remember: team needs DOUBLE the score to win
// //   // Use template literals for nice output
 
 
// // // Test Data 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // Test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);
 
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
 
// const mixed = ["Jonas", 40, false, friends];
// console.log(mixed);
 
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
 
// // Accessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[4]);
 
// //access the length
// console.log(friends.length);
 
// friends[0] = "Jay";
// console.log(friends);
 
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };
 
// const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// console.log(ages);
 
// const newLength = friends.push("John");
// console.log(friends);
// console.log(newLength);
 
// friends.unshift("Mark");
// console.log(friends);
 
// //removing elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
 
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);
 
// // finding an element
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Mark"));
 
// //include
// console.log(friends.includes("Peter"));
// console.log(friends.includes("John"));
 
// // Array Iterations
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }
 
// // one way to create for each
// friends.forEach(
//     function (friend, index) {
//         console.log(`${index + 1}: ${friend}`);
// });
 
// friends.forEach(
//     (friend, index) => {
//         console.log(`Friend ${index + 1}: ${friend}`);
// });
 
// // practical example
// const grades2 = [85, 92, 50, 96, 50, 74];
// let total = 0;
 
// for (let i = 0; i < grades2.length; i++) {
//   total += grades2[i];
// }
 
// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);
 
// let passedCount = 0;
// grades2.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
 
// console.log(`${passedCount} out of ${grades2.length} students have passed`);


////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager
 
const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
// Function to calculate average
function calculateAverage(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        const element = grades[i];
        total += grades[i];
    }
    return total / grades.length;
}
 
// Function to find highest grade
function findHighestGrade(grades) {
    let highest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    return highest;
}
 
// Function to find lowest grade
function findLowestGrade(grades) {
    let lowest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }
    return lowest;
}
 
// Function to count passing students
function countPassing(grades, passingGrade) {
     let count = 0;
     for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= passingGrade) {
            count++;
   }
 }
 return count;
}
 
// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);
 
console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);

