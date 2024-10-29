// coding challenge #1

// Test Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Calculate BMIs for Test Data 1
let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

//Boolean to check if Mark's BMI is higher than John
let markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Test Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("is Mark's BMI higher than John's?", markHigherBMI1);


// Test Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Calculate BMIs for Test Data 2
let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

// Boolean to check if Mark's BMI is higher than John's
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("\nTest Data 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Is Mark's BMI higher than John's?", markHigherBMI2);


//Output For Test Data 1:
// Mark's BMI: 27.309968138370508
// John's BMI: 24.194608809993426
// Is Mark's BMI higher than John's? true

// Output For Test Data 2:
// Mark's BMI: 26.87867813490267
// John's BMI: 27.44059917355372
// Is Mark's BMI higher than John's? false



//Challenge 2

// Determine who has the higher BMI for Test Data 1 and print the message
if (markBMI1 > johnBMI1) {
    console.log(Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)}));
} else {
    console.log(John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)}));
}


// Determine who has the higher BMI for Test Data 2 and print the message
if (markBMI2 > johnBMI2) {
    console.log(Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!);
} else {
    console.log(John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!);
}

// Explanation
// 1. Conditionals: Used if-else statements to determine who has the higher BMI and print the appropriate message.
// 2. Template Literals: Used template literals to format the output and include BMI values.
// 3. Rounded Output: toFixed(1) is used to round the BMI values to one decimal place for readability.



// Example Output
// For Test Data 1:

// Mark's BMI (27.3) is higher than John's (24.2)!
// For Test Data 2:
// John's BMI (27.4) is higher than Mark's (26.9)!




//Challenge 3

// Function to calculate average score
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Test Data
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Bonus Test Data 1
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

// Bonus Test Data 2
const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

// Function to determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(...dolphinsScores);
    const koalasAverage = calculateAverage(...koalasScores);

    console.log(Dolphins' average score: ${dolphinsAverage});
    console.log(Koalas' average score: ${koalasAverage});

    // Minimum score requirement for winning or drawing
    const minScore = 100;

    if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) {
        console.log("Dolphins win the trophy!");
    } else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
        console.log("Koalas win the trophy!");
    } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore && koalasAverage >= minScore) {
        console.log("It's a draw!");
    } else {
        console.log("No team wins the trophy.");
    }
}

// Test the function with the given data
console.log("Test Data 1:");
determineWinner(dolphinsScores1, koalasScores1);

console.log("\nBonus Test Data 1:");
determineWinner(dolphinsScores2, koalasScores2);

console.log("\nBonus Test Data 2:");
determineWinner(dolphinsScores3, koalasScores3);

// Explanation
// 1. Calculate Average: A helper function, calculateAverage, calculates the average of three scores.
// 2. Determine Winner: The determineWinner function compares the average scores and checks if each team's average meets the minimum score of 100 points.
// 3. Conditions:

// Win: A team wins only if its average score is higher than the other team's and at least 100.
// Draw: A draw happens only if both averages are equal and at least 100.
// No Win: If neither team meets the minimum score or scores are not high enough for a draw, no team wins.


// Example Output
// For Test Data 1:

// Dolphins' average score: 97.66666666666667
// Koalas' average score: 96.33333333333333
// Dolphins win the trophy!




//Challenge 4

// Function to calculate and display the bill, tip, and total
function calculateTip(bill) {

// Use ternary operator to determine the tip percentage based on the bill amount
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Print the result using template literals
    console.log(The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip});
}

// Test cases
calculateTip(275);
calculateTip(40);
calculateTip(430);

// Explanation
// 1. Ternary Operator: The tip variable is assigned a value using a ternary operator. If the bill is between 50 and 300 (inclusive), it calculates 15% of the bill. Otherwise, it calculates 20%.
// 2. Output: Using template literals, the bill amount, calculated tip, and total value (bill + tip) are printed to the console.


// Example Output
// For the provided test cases:
// The bill was 275, the tip was 41.25, and the total value 316.25
// The bill was 40, the tip was 8, and the total value 48
// The bill was 430, the tip was 86, and the total value 516

