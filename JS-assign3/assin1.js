const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    console.log(`Original: ${value}, Number: ${numberValue}, Boolean: ${booleanValue}, String: "${stringValue}"`);

    // Check valid numeric conversion
    if (!isNaN(numberValue) && value !== " " && typeof value !== "object") {
        validNumbers.push(numberValue);
    } else {
        invalidNumbers.push(value);
    }
}

console.log("\nVALID NUMERIC VALUES:", validNumbers);
console.log("INVALID NUMERIC VALUES:", invalidNumbers);