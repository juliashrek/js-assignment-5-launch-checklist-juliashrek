// Write your helper functions here!
//require('isomorphic-fetch');
try {
    require('isomorphic-fetch');
} catch (e) {
    // do nothing
}


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
   
}

function validateInput(testInput) {
   if(testInput === "") {
       return "Empty";
   } else if (isNaN(Number(testInput))) {
       return "Not a Number";
   } else {
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let input=[pilot, copilot, fuelLevel, cargoLevel];
   for (let i = 0; i < input.length; i++) {
       if (validateInput(input[i]) === "Empty") {
           alert("All fields are required.");
           return;
       }

   }
   if (validateInput(fuelLevel) === "Not a Number" || (validateInput(cargoLevel) === "Not a Number")) {
       alert("Please enter a valid number.");
       return;
   }

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch.`;
   copilotStatus.innerHTML=`Copilot ${copilot} is ready for launch.`;
   fuelLevel = Number(fuelLevel);
   cargoLevel = Number(cargoLevel);
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let ready = true; 

   if (fuelLevel < 10000) {
       fuelStatus.innerHTML="Fuel level is too low for launch.";
       ready = false;
   } else {
       fuelStatus.innerHTML="Fuel level is ready for launch.";
   }
   if (cargoLevel > 10000) {
       cargoStatus.innerHTML="Cargo is too heavy for launch.";
       ready = false;
   } else {
       cargoStatus.innerHTML="Cargo is ready for launch.";
   }
   if (!ready) {
       launchStatus.innerHTML="Shuttle not ready for launch.";
       launchStatus.style.color="rgb(199, 37, 78)";
   } else {
       launchStatus.innerHTML="Shuttle ready for launch.";
       launchStatus.style.color="rgb(65, 159, 106)";
   }
list.style.visibility="visible";


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
    });
    return planetsReturned;
}
    
function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
    
}

try {
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
} catch (e) {
    // do nothing
}

