function myFunction() {
    temperatureConverter(document.getElementById('inputFahrenheit').value);
}

function myFunction1() {
    temperatureConverter1(document.getElementById('inputCelsius').value);
}

function temperatureConverter(valNum) {
    valNum = parseInt(valNum);
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}

function temperatureConverter1(valNum) {
    valNum = parseInt(valNum);
    document.getElementById("outputFarenheit").innerHTML = (valNum * 1.8) + 32;
}

