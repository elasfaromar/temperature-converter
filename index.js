const kelvin = 273.15;
const fahrMult = 9/5;
const fahrConst = 32;

document.getElementById("calculate").onclick = function() {
    let celsiusFrom = document.getElementById("celsius-from").checked;
    let kelvinFrom = document.getElementById("kelvin-from").checked;
    let fahrFrom = document.getElementById("fahrenheit-from").checked;

    let celsiusTo = document.getElementById("celsius-to").checked;
    let kelvinTo = document.getElementById("kelvin-to").checked;
    let fahrTo = document.getElementById("fahrenheit-to").checked;

    let converted = (Number)(document.getElementById("temp-orig-number").value);
    
    switch(true) {
        case (celsiusFrom && kelvinTo): converted = (converted + kelvin) + "K"; break;
        case (celsiusFrom && fahrTo): converted = Math.round(((converted * fahrMult) + fahrConst) * 100) / 100 + "°F"; break;
        case (celsiusFrom && celsiusTo): converted += "°C"; break;
        case (kelvinFrom && celsiusTo): converted = Math.round((converted - kelvin) * 100) / 100 + "°C"; break;
        case (kelvinFrom && fahrTo): converted = Math.round(((converted - kelvin) * fahrMult + fahrConst) * 100) / 100 + "°F"; break;
        case (kelvinFrom && kelvinTo): converted += "K"; break;
        case (fahrFrom && celsiusTo): converted = Math.round(((converted-fahrConst) / fahrMult) * 100) / 100 + "°C"; break;
        case (fahrFrom && kelvinTo): converted = Math.round(((converted-fahrConst) / fahrMult + kelvin) * 100) / 100 + "K"; break;
        case (fahrFrom && fahrTo): converted += "°F"; break;
        default: console.log("Error");
    }
    
    document.getElementById("temp-converted-number").innerHTML = converted;
}

