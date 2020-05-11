//bonus mission
let astronautCount;
const input = require('readline-sync');
astronautCount = input.question("How many astronauts are there?: ");

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";

let lines = "-------------------------------------";


console.log(lines);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(lines);
console.log("Date: " + date);
console.log("Time: " + time);
console.log("");
console.log(lines);
console.log("> ASTRONAUT INFO");
console.log(lines);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log("");
console.log(lines);
console.log("> FUEL DATA");
console.log(lines);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel);
console.log("");
console.log(lines);
console.log("> MASS DATA");
console.log(lines);
console.log("* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");
console.log("");
console.log(lines);
console.log("> FLIGHT PLAN");
console.log(lines);
console.log("* weather: " + weatherStatus);
console.log("");
console.log(lines);
console.log("> OVERALL STATUS");
console.log(lines);
console.log("* Clear for takeoff: YES");
