// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
   let faultyItems = document.getElementById("faultyItems");
   faultyItems.style.visibilty="hidden";
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotName = document.querySelector("input[name = pilotName]").value;
    let copilotName = document.querySelector("input[name = copilotName]").value;
    let fuelLevel = document.querySelector("input[name = fuelLevel]").value;
    let cargoMass = document.querySelector("input[name = cargoMass]").value;
    console.log(pilotName);
    console.log(copilotName);
    console.log(fuelLevel);
    console.log(cargoMass);
    formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);

});
    
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    function listedPlanetsResponse(arr){
//        let index = Math.floor(Math.random()*arr.length);
//        return arr[index];
//    }

//    let listedPlanetsResponse = ['Tatooine', 'Pern', 'Saturn/Titan', 'Mars', 'K2-18b', 'Jupiter/Europa'];
   
//    for (i = 0; i < 6; i++){
//        console.log(randomSelection(listedPlanetsResponse));
//    }

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       let planet = pickPlanet(listedPlanets);
       console.log(planet);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });

});