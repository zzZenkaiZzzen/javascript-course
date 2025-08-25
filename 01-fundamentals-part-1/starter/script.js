// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log(js);
 
// // console.log("=== VARIABLES ===");
 
// // let firstName = "Jonas";
// // console.log(firstName);
 
// // let age = 30;
// // console.log(age);
// // age = 50;
// // console.log(age);
 
// // const birthYear = 1991;
// // console.log(birthYear);

// // // birthYear = 2000;
 
 
// // const PI = 3.1415;
// // console.log(PI);

// // var job = "programmer";
// // job = "teacher";
// // console.log(job);
 
 
// // const country = "Philippines";
// // const language = "Filipino";
 
// // age = 25;
// // age = 26;
 
// // console.log("=== DATA TYPES ===");
 
// // let id = 12345;
// // console.log(id);
// // console.log(typeof id);
 
// // let lastName = "Doe";
// // console.log(lastName);
// // console.log(typeof lastName);
 
// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);
// // console.log(typeof javascriptIsFun);
 
// // let year;
// // console.log(year);
// // console.log(typeof year);
 
// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);
 
// // dynamicVariable = "Now I'm a string!";
// // console.log(dynamicVariable, typeof dynamicVariable);
 
// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);


// // Basic Operators - Math operators
// console.log("=== MATH OPERATORS ===");
 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
 
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// // Math with strings!
// const firstName ="Jonas";
// const lastName ="Doe";
// console.log(firstName + " " + lastName);
 
// console.log("Hello " + "World" + "!");


// // Assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");
 
// let x = 10 + 5;
// console.log("x starts as:", x);
 
// x += 10;
// console.log("After x += 10:", x);
 
// x *= 4;
// console.log("After x *= 4:", x);
 
// x /= 2;
// console.log("After x /= 2:", x);
 
// x++;
// console.log("After x++:", x);
 
// x--;
// console.log("After x-- twice:", x);

// // Comparison operators
// console.log("=== COMPARISON OPERATORS ===");
 
// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);
 
// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);
 
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is an adult:", isFullAge);
 
// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);

// // Operator Precedence
// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);
 
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator
 
// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// // Your code here:
// // 1. Calculate BMIs
// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / (heightJohn * heightJohn);
 
// // 2. Create markHigherBMI variable
// const markHigherBMI = markBMI > johnBMI;
// // 3. Log results to console
// // log marks bmi
// console.log(markBMI);
// // log johns bmi
// console.log(johnBMI);
// // log markHigherBMI
// console.log(markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
 
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);
 
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
 
console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
 
 
// if else statement
const age = 15;
 
if (age >= 18) {
    console.log("Sarah can start a driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
 
 
// Truthy and Falsy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
 
 
// Coding Challenge #2
 
// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
 
// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}).`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}).`);
}
