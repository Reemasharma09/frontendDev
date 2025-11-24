let bonus = 5000;


function calculateSalary(isPermanent) {
let salary = 40000; // local salary


// Add bonus only if employee is permanent
if (isPermanent) {
salary += bonus;
}


console.log(`Employee Permanent: ${isPermanent}`);
console.log(`Total Salary: ${salary}`);
}


// Test cases
calculateSalary(true);
calculateSalary(false);

