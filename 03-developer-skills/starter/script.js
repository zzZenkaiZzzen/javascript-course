// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

const messyExample = function (name, age) {
  if (age >= 18) {
    return "Hello " + name + ", you are an adult";
  } else {
    return "Hello " + name + ", you are a minor";
  }
};

console.log("Current messy code example:", messyExample("John", 25));
console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// Extension installation test

function testExtensions() {
  const extensionTests = [
    { name: "Prettier", status: "installed", purpose: "code formatting" },
    { name: "Live Server", status: "installed", purpose: "auto refresh" },
    {
      name: "Auto Rename Tag",
      status: "installed",
      purpose: "HTML efficiency",
    },
  ];

  return extensionTests;
}

const extensionStatus = testExtensions();
console.log("Extension installation status:", extensionStatus);

// Prettier configuration test

const prettierTest = {
  firstName: "Sarah",
  lastName: "Johnson",
  skills: ["JavaScript", "React", "Node.js"],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = (items) => {
  return items.map((item) => {
    return item.toUpperCase();
  });
};

console.log(
  "Before Prettier formatting - this code works but looks unprofessional"
);

const studentTest = {
  firstName: "your-name", skills: ["HTML", "CSS", "JavaScript"],
 experience: "beginner",
goals: ["become-developer", "build-projects"],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) { console.log(data[i]);
  }
};

// Live server testing

// Test 1: Basic live reload
let liveServerTest = "Updated message - change #2";
console.log("Live Server test:", liveServerTest);

// Test 2: Time-based updates
const timeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// Test 3: Function testing
function demonstrateLiveReload() {
  const randomColor = ["red", "blue", "green", "purple", "orange"][
    Math.floor(Math.random() * 5)
  ];
  const message = `Live Server rocks! Random color: ${randomColor}`;

  console.log(message);
  return message;
}

demonstrateLiveReload();

function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log("Current time:", now);
  return now;
}

showCurrentTime();

// Code snippets testing

console.log("Testing snippet functionality - cl + Tab created this!");

function testSnippets() {
  console.log("Function created with snippet - func + Tab!");
  return "Snippets working perfectly!";
}

testSnippets();

const snippetTest = (message) => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};

snippetTest("Snippets save so much typing time!");

// Environment setup verification

console.log("Professional Development Environment Complete!");
console.log("Prettier: Automatic code formatting");
console.log("Live Server: Automatic browser refresh");
console.log("Snippets: Fast code generation");
console.log("Extensions: Enhanced productivity");
console.log("Ready for professional JavaScript development!");

// Calculate time savings
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11; 
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22; 

  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}

calculateTimeSavings();
  
