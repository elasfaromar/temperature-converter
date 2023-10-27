const kelvin = 273.15;
const fahrMult = 9/5;
const fahrConst = 32;

document.getElementById("calculate").onclick = function() {
    let decimalPlaces = document.getElementById("decimal").value;
    let celsiusFrom = document.getElementById("celsius-from").checked;
    let kelvinFrom = document.getElementById("kelvin-from").checked;
    let fahrFrom = document.getElementById("fahrenheit-from").checked;

    let celsiusTo = document.getElementById("celsius-to").checked;
    let kelvinTo = document.getElementById("kelvin-to").checked;
    let fahrTo = document.getElementById("fahrenheit-to").checked;

    let converted = (Number)(document.getElementById("temp-orig-number").value);
    
    switch(true) {
        case (celsiusFrom && kelvinTo): converted = (converted + kelvin).toFixed(decimalPlaces) + "K"; break;
        case (celsiusFrom && fahrTo): converted = ((converted * fahrMult) + fahrConst).toFixed(decimalPlaces) + "°F"; break;
        case (celsiusFrom && celsiusTo): converted = converted.toFixed(decimalPlaces) + "°C"; break;
        case (kelvinFrom && celsiusTo): converted = (converted - kelvin).toFixed(decimalPlaces) + "°C"; break;
        case (kelvinFrom && fahrTo): converted = ((converted - kelvin) * fahrMult + fahrConst).toFixed(decimalPlaces) + "°F"; break;
        case (kelvinFrom && kelvinTo):  converted = converted.toFixed(decimalPlaces) + "K"; break;
        case (fahrFrom && celsiusTo): converted = ((converted - fahrConst) / fahrMult).toFixed(decimalPlaces) + "°C"; break;
        case (fahrFrom && kelvinTo): converted = ((converted - fahrConst) / fahrMult + kelvin).toFixed(decimalPlaces) + "K"; break;
        case (fahrFrom && fahrTo): converted = converted.toFixed(decimalPlaces) + "°F"; break;
        default: console.log("Error");
    }
    
    document.getElementById("temp-converted-number").innerHTML = converted;
}

