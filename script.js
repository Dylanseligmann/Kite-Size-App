// Weight and WindSpeed from Prompts

let riderWeight = parseInt(prompt("Ingresa tu peso (Kilogramos):"),10);


while (isNaN(riderWeight)) {
    riderWeight = prompt ("Valor invalido, por favor ingrese un peso (Kg).");
    
}


let windSpeedKnots = parseInt(prompt("Ingresa velocidad del viento donde navegas (Nudos):"),10);


while (isNaN(windSpeedKnots)) {
    windSpeedKnots = prompt ("Valor invalido, por favor ingrese la velocidad del viento en nudos (Kts)");
    
}

//End of Prompts

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

let chartReferenceWeight = 75 


for (let i of kiteSizeTable) {
    let minWind = i.windRange[0];
    let maxWind = i.windRange[1];

    if (wind >= minWind && wind <= maxWind) {
    // Ratio from 75 kg to entered weight in Prompt 
    let weightRatio = (weight / chartReferenceWeight); 

    // KiteSize Calculation 
    let kiteSize = (weightRatio * i.kiteSize);

    return Math.ceil(kiteSize); // no decimal points
    }

}

//If wind is over 50 kts 

return 'tooMuchWindYouGonDie'

}


let kiteSize = calculateKiteSize(windSpeedKnots,riderWeight);


//Final Alert


if(kiteSize == 'tooMuchWindYouGonDie' ){

    alert('Si vas a entrar con mas de 50 nudos, que la fuerza te acompanie')
}
else{alert(`El tamanio de Kite recomendado para tu peso y condicion es: `+ '\n' + kiteSize + ' Metros Cuadrados');}


