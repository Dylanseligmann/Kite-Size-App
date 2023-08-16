// Weight and WindSpeed from Sliders

let weightRange = document.getElementById("weightRange");
let windRange = document.getElementById("windRange");
let weightDisplay = document.getElementById("weightDisplay");
let windDisplay = document.getElementById("windDisplay");


//Show Sliders Latest Config

addEventListener('DOMContentLoaded', event => {
	const storedValue = localStorage.getItem('config');
	if (!storedValue) return;

	const { wind, weight } = JSON.parse(storedValue);
	weightRange.value = weight
	windRange.value = wind
	processKiteSize()

})



// Display Slider Values
weightRange.addEventListener("input", () => {

	processKiteSize()
});

windRange.addEventListener("input", () => {

	processKiteSize()
});


//Calculate Kite Size RAW

function calculateKiteSize(wind, weight) {
	// Kite size table for 75 kg
	const kiteSizeTable = [
		{ windRange: [0, 9], kiteSize: 18 },
		{ windRange: [10, 12], kiteSize: 16 },
		{ windRange: [13, 15], kiteSize: 12 },
		{ windRange: [16, 20], kiteSize: 9 },
		{ windRange: [21, 25], kiteSize: 7 },
		{ windRange: [26, 35], kiteSize: 5 },
		{ windRange: [36, 50], kiteSize: 3 },
	];

	//75 kg Reference from chart

	let chartReferenceWeight = 75;

	for (let i of kiteSizeTable) {
		let minWind = i.windRange[0];
		let maxWind = i.windRange[1];

		if (wind >= minWind && wind <= maxWind) {
			// Ratio from 75 kg to entered weight in Prompt
			let weightRatio = weight / chartReferenceWeight;

			// KiteSize Calculation
			let kiteSize = weightRatio * i.kiteSize;

			return Math.ceil(kiteSize); // no decimal points
		}
	}

}

//Calculate Kite Size With User Data

function processKiteSize() {
	weightDisplay.textContent = weightRange.value;
	windDisplay.textContent = windRange.value;

	const kiteSize = calculateKiteSize(windRange.value, weightRange.value)

	document.getElementById('kiteSizeDisplay').innerHTML = kiteSize

	// localStorage.setItem('ridersWeight', weightRange.value )
	// localStorage.setItem('windSpeed', windRange.value)
	localStorage.setItem('config', JSON.stringify({
		wind: windRange.value,
		weight: weightRange.value
	}))

	changeWindColorBasedOnValue()
	changeWeightColorBasedOnValue()
}





//Slider Value Colors


function changeWindColorBasedOnValue(){

	const wind = windRange.value

	if (wind <= 15) {

		windDisplay.style.color = 'darkgreen'

	}
	else if(wind > 15 && wind <= 25  ){

		windDisplay.style.color = 'green'
	}

	else if(wind > 25 && wind <= 35){

		windDisplay.style.color = 'orange'
	}
	else{
		windDisplay.style.color = 'red'
	}


}


function changeWeightColorBasedOnValue() {

	const weight = weightRange.value

	if (weight <= 65) {

		weightDisplay.style.color = 'darkgreen'

	}
	else if (weight > 65 && weight <= 75) {

		weightDisplay.style.color = 'green'
	}

	else if (weight > 75 && weight <= 100) {

		weightDisplay.style.color = '#FFD580'
	}
	else {
		weightDisplay.style.color = '#FF8C00'
	}


}