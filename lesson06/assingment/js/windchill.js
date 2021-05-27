window.addEventListener("load", (event)=>{
    function doInputOutput(){
        let temp= parseFloat(document.getElementById("temp").value);
        let wind_speed= parseFloat(document.getElementById("wind").value);
        let wind_chill= windChill(temp, wind_speed);
        
        document.getElementById("wind_chill").innerHTML= wind_chill;
    }
    function windChill(tempF, speed){
        let f= 35.74+ (0.6215* tempF)- (35.75* (speed**0.16)) + (0.4275 * tempF *(speed ** 0.16));
        return Math.round(f);
    }
})