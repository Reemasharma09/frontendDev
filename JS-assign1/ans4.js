let marks = [85, 92, 74, 63, 55];

let sum = 0;
let fails = 0;

for (let m of marks) {
    sum += m;
    if (m < 40) fails++;
}

let average = sum / marks.length;
let percentage = average;

let grade = "";

if (percentage >= 90) grade = "A+";
else if (percentage >= 75) grade = "A";
else if (percentage >= 60) grade = "B";
else if (percentage >= 40) grade = "C";
else grade = "Fail";

console.log("Average:", average);
console.log("Percentage:", percentage);
console.log("Grade:", grade);

if (fails >= 2) {
    console.log("Repeat Year");
}