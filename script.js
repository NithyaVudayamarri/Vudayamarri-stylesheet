console.log('retrieve previous result')
document.getElementById('retrieve').addEventListener('click', function () {
    localStorage.setItem("outputFarenheit",f1);     
    document.getElementById('retrieving').innerHTML = localStorage.getItem("outputFarenheit")
     //retrieving local storage
   

})
document.getElementById('retrieve2').addEventListener('click', function () {
    localStorage.setItem("outputCelcius",f2);
    document.getElementById('retrieving2').innerHTML = localStorage.getItem("outputCelcius")
})
console.log('clear local storage')
document.getElementById('clearall').addEventListener('click', function () {
    localStorage.clear() //clear local storage
    document.getElementById('outputCelcius').innerHTML = ""
    document.getElementById('outputFarenheit').innerHTML = ""
})
function myFunction() {
    temperatureConverter(document.getElementById('inputFahrenheit').value);
}

function myFunction1() {
    temperatureConverter1(document.getElementById('inputCelsius').value);
}
let f1 ;
function temperatureConverter(valNum) {
    valNum = parseInt(valNum);
     document.getElementById("outputCelcius").innerHTML = (valNum - 32 ) / 1.8 
   f1 = (valNum -32 ) /  1.8 
   
}
let f2;
function temperatureConverter1(valNum) {
    valNum = parseInt(valNum);
    document.getElementById("outputFarenheit").innerHTML = (valNum * 1.8) + 32;
    f2 = (valNum * 1.8  ) + 32  
}


console.log('get random quotes: AJAX fetch')

const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
document.getElementById('simpbutt').addEventListener('mouseover', function() {
    fetch(url) //fetch is the simplifed version of xmlhttprequest
    .then((res) => { return res.json() }) //receiving returning response as JSON application
    .then((data) => {            // selecting which data retrieved from returned response to be displayed on html
        data.forEach((item) => {
            const { quote, character } = item
            const result = `Quote : "${quote}"  By : ${character}`
            document.getElementById('simpsons').innerHTML = result;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); //logs in console whenever HTTP response error occurs (failed HTTP response handling)
    })
})
console.log('Script End')