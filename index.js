//   Temperature     ->     Description
//   < 32              ->      "very cold"
//   < 64              ->          "cold"        
//   < 86              ->         "warm"     
//  < 100             ->           "hot"       
// >= 100            ->        "very hot"  


const convertToCelsius = (fahrenheitTemp) => {
  return (fahrenheitTemp - 32) * (5 / 9);
};

const describeTemperature = (fahrenheitTemp) => {
  if (fahrenheitTemp < 32) {
      return "very cold";
  } else if (fahrenheitTemp < 64) {
      return "cold";
  } else if (fahrenheitTemp < 86) {
      return "warm";
  } else if (fahrenheitTemp < 100) {
      return "hot";
  } else {
      return "very hot";
  }
};

// Prompt the user for input
const fahrenheitInput = prompt("Please enter the Fahrenheit temperature:");

// Perform the conversion and description
const celsiusTemp = convertToCelsius(fahrenheitInput);
const temperatureDescription = describeTemperature(fahrenheitInput);

// Send an alert with the results
alert(`You entered ${fahrenheitInput}°F, which is ${celsiusTemp.toFixed(2)}°C and feels ${temperatureDescription}.`);