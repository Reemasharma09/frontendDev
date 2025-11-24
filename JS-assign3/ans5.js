console.log(score); // undefined (var hoisted)
announce();         // works (function hoisted)

var score = 50;

function announce() { console.log("Game started"); }

let status = "ready";
startGame();        // ❌ ERROR: startGame is hoisted but in TDZ

function startGame() {
    console.log(status); // reference error (TDZ for status)
}