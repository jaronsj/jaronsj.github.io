async function getWeather(){
    const url='https://api.openweathermap.org/data/2.5/forecast?zip=83440,us&appid=bc0f5b4b03b1172429a1ac3fd29e6dcc&units=imperial';

    const response= await fetch(url);
    if (response.status==200){
        return response.json();
    }
    else{
        throw new Error('No Weather Found '+ response.status);
    }
}

function weather(){
    const current_temp= document.querySelector('#current-temp');
    current_temp.innerHTML='';
    
    const w= getWeather()
    .then(function(weath){
        console.log(weath);
    })
}

window.addEventListener('load', (event)=>{
    weather();
});