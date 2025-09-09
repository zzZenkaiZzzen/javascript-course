// // // // Remember, we're gonna use strict mode in all scripts now!
// // // 'use strict';

// // // console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// // // const messyExample = function (name, age) {
// // //   if (age >= 18) {
// // //     return "Hello " + name + ", you are an adult";
// // //   } else {
// // //     return "Hello " + name + ", you are a minor";
// // //   }
// // // };

// // // console.log("Current messy code example:", messyExample("John", 25));
// // // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // // // Extension installation test

// // // function testExtensions() {
// // //   const extensionTests = [
// // //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// // //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// // //     {
// // //       name: "Auto Rename Tag",
// // //       status: "installed",
// // //       purpose: "HTML efficiency",
// // //     },
// // //   ];

// // //   return extensionTests;
// // // }

// // // const extensionStatus = testExtensions();
// // // console.log("Extension installation status:", extensionStatus);

// // // // Prettier configuration test

// // // const prettierTest = {
// // //   firstName: "Sarah",
// // //   lastName: "Johnson",
// // //   skills: ["JavaScript", "React", "Node.js"],
// // //   isActive: true,
// // // };

// // // const messyFunction = function (x, y, z) {
// // //   if (x > 0 && y > 0) {
// // //     return x + y + z;
// // //   } else {
// // //     return 0;
// // //   }
// // // };

// // // const messyArrow = (items) => {
// // //   return items.map((item) => {
// // //     return item.toUpperCase();
// // //   });
// // // };

// // // console.log(
// // //   "Before Prettier formatting - this code works but looks unprofessional"
// // // );

// // // const studentTest = {
// // //   firstName: "your-name", skills: ["HTML", "CSS", "JavaScript"],
// // //  experience: "beginner",
// // // goals: ["become-developer", "build-projects"],
// // // };

// // // const testFunc = function (data) {
// // //   for (let i = 0; i < data.length; i++) { console.log(data[i]);
// // //   }
// // // };

// // // // Live server testing

// // // // Test 1: Basic live reload
// // // let liveServerTest = "Updated message - change #2";
// // // console.log("Live Server test:", liveServerTest);

// // // // Test 2: Time-based updates
// // // const timeStamp = new Date().toLocaleTimeString();
// // // const updateCount = 1;

// // // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // // // Test 3: Function testing
// // // function demonstrateLiveReload() {
// // //   const randomColor = ["red", "blue", "green", "purple", "orange"][
// // //     Math.floor(Math.random() * 5)
// // //   ];
// // //   const message = `Live Server rocks! Random color: ${randomColor}`;

// // //   console.log(message);
// // //   return message;
// // // }

// // // demonstrateLiveReload();

// // // function showCurrentTime() {
// // //   const now = new Date().toLocaleTimeString();
// // //   console.log("Current time:", now);
// // //   return now;
// // // }

// // // showCurrentTime();

// // // // Code snippets testing

// // // console.log("Testing snippet functionality - cl + Tab created this!");

// // // function testSnippets() {
// // //   console.log("Function created with snippet - func + Tab!");
// // //   return "Snippets working perfectly!";
// // // }

// // // testSnippets();

// // // const snippetTest = (message) => {
// // //   console.log(`Arrow function from snippet: ${message}`);
// // //   return message;
// // // };

// // // snippetTest("Snippets save so much typing time!");

// // // // Environment setup verification

// // // console.log("Professional Development Environment Complete!");
// // // console.log("Prettier: Automatic code formatting");
// // // console.log("Live Server: Automatic browser refresh");
// // // console.log("Snippets: Fast code generation");
// // // console.log("Extensions: Enhanced productivity");
// // // console.log("Ready for professional JavaScript development!");

// // // // Calculate time savings
// // // function calculateTimeSavings() {
// // //   const dailyConsoleLogs = 50;
// // //   const keystrokesSavedPerLog = 11; 
// // //   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
// // //   const monthlySavings = dailySavings * 22; 

// // //   console.log(`Daily keystrokes saved: ${dailySavings}`);
// // //   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

// // //   return { daily: dailySavings, monthly: monthlySavings };
// // // }

// // // calculateTimeSavings();
  

// // // Developer Skills Hour 2

// // 'use strict'; - forgot to use strict in Developer Skills Hour 2

// // console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

// // console.log(
// //   "Key insight: Professional developers think systematically, not just code");

// //   console.log("Goal: Transform from beginner to professional problem-solver");

// //   // The 4-Step Problem-Solving Framework

// //   console.log("4-Step Framework: Understand → Divide → Research → Implement");

// // // PRACTICAL PROBLEM-SOLVING: Smart home thermometer

// //   const calcTempAmplitude = function (temps) {
// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }

// //   console.log(max, min);
// //   return max - min;
// // };

// // const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// // const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);

// // // EXTENDED PROBLEM: Two arrays
// // const calcTempAmplitudeNew = function (t1, t2) {
// //   const temps = t1.concat(t2);
// //   console.log(temps);

// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }

// //   console.log(max, min);
// //   return max - min;
// // };

// // const array1 = [3, 5, 1];
// // const array2 = [9, 0, 5];
// // const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// // console.log(amplitudeNew);

// // console.log(
// //   "Problem-solving framework applied successfully to extended challenge!"
// // );

// // // PROBLEM-SOLVING FRAMEWORK MASTERY

// // console.log("Framework mastered - ready for independent problem solving!");


// // Developer Skills Hour 3

// 'use strict';

// console.log("=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===");

// console.log(
//   "Goal: Master research and debugging like a professional developer"
// );
// console.log(
//   "Strategic research builds lasting knowledge, not just quick fixes"
// );

// function demonstrateArrayMax(numbers) {
//   const method1 = Math.max(...numbers);
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }

//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }

// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log("Multiple approaches from research:", maxResults);

// // STACK OVERFLOW RESEARCH RESULTS

// function reverseStringMethods(str) {
//   const method1 = str.split("").reverse().join("");
//   let method2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   const method3 = [...str].reverse().join("");

//   return { method1, method2, method3 };
// }

// const reverseResults = reverseStringMethods("hello");
// console.log("Stack Overflow research results:", reverseResults);

// // MDN DOCUMENTATION MASTERY

// function demonstrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   const simple = array1.concat(array2);
//   const multiple = array1.concat(array2, array3);

//   console.log("Original array1 unchanged:", array1);

//   return { simple, multiple };
// }

// const concatResults = demonstrateConcat();
// console.log("MDN documentation applied:", concatResults);

// // SYSTEMATIC DEBUGGING METHODOLOGY

// function calculateAverageScore(scores) {
//   let total;
//   for (let i = 0; i <= scores.length; i++) {
//     total += scores[i];
//   }

//   return total / (scores.length + 1);
// }

// const testScores = [85, 92, 78, 96, 88];
// const buggyResult = calculateAverageScore(testScores);
// console.log("Buggy result:", buggyResult);

// // BROWSER DEVELOPER TOOLS MASTERY

// function demonstrateConsoleDebugging(data) {
//   console.group("Debugging Session");

//   console.log("Input data:", data);

//   if (typeof data !== "object") {
//     console.warn("Warning: Expected object, got", typeof data);
//   }

//   console.table(data);
//   console.groupEnd();

//   return Array.isArray(data) ? data.length : Object.keys(data).length;
// }

// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: "John", age: 30, city: "New York" };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);


// // DEBUGGER STATEMENT AND BREAKPOINTS

// function stepThroughDebugging(numbers) {
//   debugger;
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];

//     console.log(`Processing index ${i}: value = ${currentNumber}`);

//     if (typeof currentNumber === "number") {
//       sum += currentNumber;
//       count++;
//     } else {
//       console.error(`Invalid number at index ${i}:`, currentNumber);
//     }
//   }

//   const average = count > 0 ? sum / count : 0;
//   console.log("Final results:", { sum, count, average });

//   return average;
// }

// const mixedNumbers = [10, 20, "error", 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log("Debug session result:", debugResult);

// // SYSTEMATIC BUG FIXING APPLICATION

// function calculateAverageScoreFixed(scores) {
//   if (!Array.isArray(scores) || scores.length === 0) {
//     console.error("Invalid input: scores must be a non-empty array");
//     return 0;
//   }

//   let total = 0;

//   for (let i = 0; i < scores.length; i++) {
//     if (typeof scores[i] === "number") {
//       total += scores[i];
//     } else {
//       console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
//     }
//   }

//   return total / scores.length;
// }

// const fixedResult = calculateAverageScoreFixed(testScores);
// console.log("Fixed result:", fixedResult); 


// // Comprehensive debugging verification
// console.group("Debugging Verification Tests");

// // Test 1 - Normal case
// const normalScores = [85, 92, 78, 96, 88];
// const normalResult = calculateAverageScoreFixed(normalScores);
// console.log("Normal case result:", normalResult);

// // Test 2 - Edge case with invalid data
// const mixedScores = [85, "invalid", 92, null, 78];
// const mixedResult = calculateAverageScoreFixed(mixedScores);
// console.log("Mixed data result:", mixedResult);

// // Test 3 - Error case with invalid input
// const errorResult = calculateAverageScoreFixed("not an array");
// console.log("Error case result:", errorResult);

// // Test 4 - Edge case with empty array
// const emptyResult = calculateAverageScoreFixed([]);
// console.log("Empty array result:", emptyResult);

// console.groupEnd();

// console.log("Systematic debugging process successfully applied!");
// console.log(
//   "All bugs identified, isolated, investigated, fixed, and prevented"
// );


// Developer Skills Hour 4

"use strict";

console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

console.log("Ready to tackle complex problems using systematic approaches");
console.log("Challenge: Build solutions that work under pressure");


////////////////////////////////////
// MAIN CHALLENGE: Weather Forecast String Builder

/*
WEATHER FORECAST CHALLENGE:
Apply 4-step framework systematically:
1. UNDERSTAND: Transform array to formatted string with day numbering
2. DIVIDE: String building + formatting + day calculation + separators
3. RESEARCH: String concatenation and template literals
4. IMPLEMENT: Step-by-step solution building
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  // Start with empty string accumulator - same pattern as sum calculations
  let str = "";

  // Loop through array to build the formatted string
  for (let i = 0; i < arr.length; i++) {
    // Build each piece using template literals for clean formatting
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  // Add starting dots and log the final result
  console.log("..." + str);
}

// Test with provided data
printForecast(data1);
printForecast(data2);

console.log("Weather forecast formatter working correctly!");

////////////////////////////////////
// ALTERNATIVE IMPLEMENTATIONS

// Alternative 1 - Using array methods instead of loops
function printForecastMap(arr) {
  const formatted = arr.map((temp, index) => `${temp}°C in ${index + 1} days`);
  console.log("..." + formatted.join(" ... ") + " ...");
}

// Alternative 2 - Single line approach using reduce
function printForecastReduce(arr) {
  const result = arr.reduce(
    (acc, temp, index) => acc + `${temp}°C in ${index + 1} days ... `,
    "..."
  );
  console.log(result);
}

// Test alternative approaches
console.log("Testing alternative implementations:");
printForecastMap(data1);
printForecastReduce(data1);


////////////////////////////////////
// TIME-PRESSURED CHALLENGE: Work Hours Analyzer

/*
JOB INTERVIEW SIMULATION:
10-minute challenge to analyze freelancer work week
Stay systematic even under pressure!
*/

function analyzeWorkWeek(dailyHours) {
  // Calculate total hours using reduce
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average with proper rounding
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // Find maximum hours and corresponding day
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const maxDay = days[maxDayIndex];

  // Count days worked using filter
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  // Check if full-time week
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

// Test the solution
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log("Work week analysis:", analysis);

console.log("Challenge completed under time pressure!");

// Optimized version with error handling
function analyzeWorkWeekOptimized(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.error("Invalid input: Expected array of 7 daily hours");
    return null;
  }

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / 7) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return {
    totalHours,
    averageHours,
    maxDay: dayNames[maxDayIndex],
    daysWorked,
    isFullTime: totalHours >= 35,
    workingDays: dailyHours
      .map((hours, index) => (hours > 0 ? dayNames[index] : null))
      .filter((day) => day !== null),
  };
}

const optimizedAnalysis = analyzeWorkWeekOptimized(weeklyHours);
console.log("Optimized analysis:", optimizedAnalysis);


////////////////////////////////////
// FINAL INTEGRATION: Debug and Enhance Legacy Code

// Here's the buggy legacy code you need to fix
function legacyForecastFunction(temperatures) {
  // Multiple bugs hidden in this code!
  var result = "";
  for (var i = 1; i <= temperatures.length; i++) {
    result = result + temperatures[i] + " degrees in day " + i + ", ";
  }
  return result;
}

// Test the buggy function to see what goes wrong
const testData = [15, 18, 22, 19];
console.log("Buggy function output:", legacyForecastFunction(testData));


////////////////////////////////////
// SYSTEMATIC DEBUGGING AND ENHANCEMENT

// Completely fixed and enhanced version
function enhancedForecastFunction(temperatures, options = {}) {
  // Step 5 - PREVENT: Add comprehensive input validation
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error("Invalid input: temperatures must be a non-empty array");
    return "";
  }

  // Step 4 - FIX: Use modern JavaScript with proper declarations
  const { unit = "°C", separator = "...", includeIndex = true } = options;

  // Step 4 - FIX: Correct loop bounds and string building
  let result = "";

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  // Step 5 - PREVENT: Return clean result without trailing separator
  return separator + result.slice(0, -separator.length);
}

// Test the enhanced function with multiple configurations
console.log("Enhanced function (default):", enhancedForecastFunction(testData));
console.log(
  "Enhanced function (custom):",
  enhancedForecastFunction(testData, {
    unit: "°F",
    separator: " | ",
    includeIndex: true,
  })
);

console.log("Complete developer skills successfully applied!");
console.log("Legacy code debugged, fixed, and enhanced systematically");

