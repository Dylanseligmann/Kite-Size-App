function calculateKiteSize() {
// Kite size table for 75 kg
const kiteSizeTable = [
    { windRange: [0, 9], kiteSize: 18 },
    { windRange: [10, 12], kiteSize: 16 },
    { windRange: [13, 15], kiteSize: 12 },
    { windRange: [16, 20], kiteSize: 9 },
    { windRange: [21, 25], kiteSize: 7 },
    { windRange: [26, 35], kiteSize: 5 },
];


//75 kg Reference from chart

let chartReferenceWeight = 75 

// Weight and WindSpeed from Prompts

let weight = parseInt(prompt("Ingresa tu peso (en kilogramos):"),10);
let windSpeedKnots = parseInt(prompt("Ingresa velocidad del viento donde navegas (en Nudos):"),10);


for (let i of kiteSizeTable) {
    let minWind = i.windRange[0];
    let maxWind = i.windRange[1];

    if (windSpeedKnots >= minWind && windSpeedKnots <= maxWind) {
    // Ratio from 75 kg to entered weight in Prompt
    let weightRatio = (weight / chartReferenceWeight); 

    // KiteSize Calculation 
    let kiteSize = (weightRatio * i.kiteSize);

    return kiteSize.toFixed(0); // no decimal points
    }
}


// If the wind speed is outside the specified range, return an error
return "Error: Los datos ingresados estan fuera de los rangos de viento.";
}


let kiteSize = calculateKiteSize();
alert(`El tamanio de Kite recomendado para tu peso y condicion es: `+ '\n' + kiteSize + ' Metros Cuadrados');
