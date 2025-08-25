// // // // // JavaScript Fundamentals - Part 1
// // // // // We'll write our code here!

// // // // let js = "amazing";
// // // // console.log(40 + 8 + 23 - 10);
// // // // console.log(js);
 
// // // // console.log("=== VARIABLES ===");
 
// // // // let firstName = "Jonas";
// // // // console.log(firstName);
 
// // // // let age = 30;
// // // // console.log(age);
// // // // age = 50;
// // // // console.log(age);
 
// // // // const birthYear = 1991;
// // // // console.log(birthYear);

// // // // // birthYear = 2000;
 
 
// // // // const PI = 3.1415;
// // // // console.log(PI);

// // // // var job = "programmer";
// // // // job = "teacher";
// // // // console.log(job);
 
 
// // // // const country = "Philippines";
// // // // const language = "Filipino";
 
// // // // age = 25;
// // // // age = 26;
 
// // // // console.log("=== DATA TYPES ===");
 
// // // // let id = 12345;
// // // // console.log(id);
// // // // console.log(typeof id);
 
// // // // let lastName = "Doe";
// // // // console.log(lastName);
// // // // console.log(typeof lastName);
 
// // // // let javascriptIsFun = true;
// // // // console.log(javascriptIsFun);
// // // // console.log(typeof javascriptIsFun);
 
// // // // let year;
// // // // console.log(year);
// // // // console.log(typeof year);
 
// // // // let dynamicVariable = 23;
// // // // console.log(dynamicVariable, typeof dynamicVariable);
 
// // // // dynamicVariable = "Now I'm a string!";
// // // // console.log(dynamicVariable, typeof dynamicVariable);
 
// // // // dynamicVariable = true;
// // // // console.log(dynamicVariable, typeof dynamicVariable);


// // // // Basic Operators - Math operators
// // // console.log("=== MATH OPERATORS ===");
 
// // // const now = 2037;
// // // const ageJonas = now - 1991;
// // // const ageSarah = now - 2018;
// // // console.log(ageJonas, ageSarah);
 
// // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // // console.log("Math operations:");
// // // console.log("Addition:", 10 + 5);
// // // console.log("Subtraction:", 20 - 8);
// // // console.log("Multiplication:", 4 * 7);
// // // console.log("Division:", 15 / 3);
// // // console.log("Exponentiation:", 2 ** 3);

// // // // Math with strings!
// // // const firstName ="Jonas";
// // // const lastName ="Doe";
// // // console.log(firstName + " " + lastName);
 
// // // console.log("Hello " + "World" + "!");


// // // // Assignment operators
// // // console.log("=== ASSIGNMENT OPERATORS ===");
 
// // // let x = 10 + 5;
// // // console.log("x starts as:", x);
 
// // // x += 10;
// // // console.log("After x += 10:", x);
 
// // // x *= 4;
// // // console.log("After x *= 4:", x);
 
// // // x /= 2;
// // // console.log("After x /= 2:", x);
 
// // // x++;
// // // console.log("After x++:", x);
 
// // // x--;
// // // console.log("After x-- twice:", x);

// // // // Comparison operators
// // // console.log("=== COMPARISON OPERATORS ===");
 
// // // console.log("Age comparison:");
// // // console.log(ageJonas > ageSarah);
// // // console.log(ageSarah >= 18);
// // // console.log(ageJonas < 30);
 
// // // console.log("Number comparisons:");
// // // console.log(25 > 20);
// // // console.log(15 < 10);
// // // console.log(18 >= 18);
// // // console.log(16 <= 15);
 
// // // const isFullAge = ageSarah >= 18;
// // // console.log("Sarah is an adult:", isFullAge);
 
// // // console.log("Complex comparison:");
// // // console.log(now - 1991 > now - 2018);

// // // // Operator Precedence
// // // let z, y;
// // // z = y = 25 - 10 - 5;
// // // console.log(z, y);
 
// // // const averageAge = (ageJonas + ageSarah) / 2;
// // // console.log(ageJonas, ageSarah, averageAge);

// // // ////////////////////////////////////
// // // // Coding Challenge #1 - BMI Calculator
 
// // // // Test Data 1
// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;
 
// // // // Your code here:
// // // // 1. Calculate BMIs
// // // const markBMI = massMark / heightMark ** 2;
// // // const johnBMI = massJohn / (heightJohn * heightJohn);
 
// // // // 2. Create markHigherBMI variable
// // // const markHigherBMI = markBMI > johnBMI;
// // // // 3. Log results to console
// // // // log marks bmi
// // // console.log(markBMI);
// // // // log johns bmi
// // // console.log(johnBMI);
// // // // log markHigherBMI
// // // console.log(markHigherBMI);

// // const firstName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1991;
// // const year = 2037;
 
// // const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // console.log(jonas);
 
// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);
 
// // console.log(`I'm ${2037 - 1991} years old`);
// // console.log(`Math works: ${2 + 3} equals five`);
 
 
// // // if else statement
// // const age = 15;
 
// // if (age >= 18) {
// //     console.log("Sarah can start a driving license");
// // } else {
// //     const yearsLeft = 18 - age;
// //     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // }
 
 
// // // Truthy and Falsy
// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean("Jonas"));
// // console.log(Boolean({}));
// // console.log(Boolean(""));
 
 
// // // Coding Challenge #2
 
// // // Reuse your BMI calculation from Challenge #1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;
 
// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);
 
// // // Your if/else statement here:
// // // Compare BMIs and create intelligent messages
// // // Use template literals for beautiful output
// // if (BMIMark > BMIJohn) {
// //     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}).`);
// // } else {
// //     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}).`);
// // }


// // Type Conversion and Coercion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// // Automatic Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// let n = "1" + 1;
// console.log(n);

// n = n - 1;
// console.log(n);


// // // Equality - Strict

// // const age = "18";
// // if (age === 18) console.log("You just became an adult (strict)");
// // if (age == 18) console.log("You just became an adult (loose)");

// // console.log("18" === 18);
// // console.log("18" == 18);
// // console.log(18 === 18);

// // // Why == can be dangerous
// // console.log("0" == 0);
// // console.log(0 == false);
// // console.log("0" == false);
// // console.log(null == undefined);

// // console.log("" == 0);
// // console.log("   " == 0);

// // // best practice
// // const favourite = Number(prompt("What's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// // if (favourite === 23) {
// //   console.log("Cool! 23 is an amazing number");
// // } else if (favourite == 23) {
// //   console.log("23 string is also a cool number");
// // } else if (favourite === 9) {
// //   console.log("9 is also a cool number");
// // } else {
// //   console.log("Number is not 23 or 7 or 9");
// // }

// // if (favourite !== 23) console.log("Why not 23?");


// // Logical Operators

// const hasDriversLicense = true; 
// const hasGoodVision = true;

// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Aiken is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }


// // More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// // Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// // Test with different values
// console.log ( 'Age 20, permission true, experience false:',
//             (age >= 18 || hasPermission) && hasExperience);
    


// // Create a club entry system:
// // 1. Create variables: age(number), hasID (boolean), isVIP (boolean)
// // 2. Entry rules: (age >= 21 AND hasID) OR isVIP
// // 3. Test with different combinations
// //    - age 25, hasID true, isVIP false (should enter)
// //    - age 19, hasID true, isVIP true (should enter)
// //    - age 19, hasID false, isVIP false (should not enter)
// // 4. Use if/else to log appropriate messages

// const ageClub = 25;
// const hasID = true;
// const isVIP = false;

// if ((ageClub >= 21 && hasID) || isVIP) {
//   console.log("Welcome to the club!");
// } else {
//   console.log("Sorry, you can't enter.");
// }

// console.log('Age 19, hasID true, isVIP true:', 
//             (ageClub >= 21 && hasID) || isVIP);

// console.log('Age 19, hasID false, isVIP false:', 
//             (ageClub >= 21 && hasID) || isVIP);

// ////////////////////////////////////
// // The Conditional (Ternary) Operator

// const ageDrink = 17;

// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = ageDrink >= 18 ? "wine" : "water";
// console.log(drink);

// // if else statement
// let drink2;
// if (ageDrink >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);


// console.log(`I like to drink ${ageDrink >= 18 ? "wine" : "water"}`);


////////////////////////////////////
// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"