window.addEventListener("load", (event)=>{
    const lu= document.querySelector("#date");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[today.getDay()];

    var month = new Array(12);
    month[0]= 'January';
    month[1]= 'February';
    month[2]= 'March';
    month[3]= 'April';
    month[4]= 'May';
    month[5]= 'June';
    month[6]= 'July';
    month[7]= 'August';
    month[8]= 'September';
    month[9]= 'October';
    month[10]= 'November';
    month[11]= 'December';
    var mm= month[today.getMonth()];
    var yyyy = today.getFullYear();
    today = n +', '+dd + ' '+ mm + ' ' + yyyy;
    lu.textContent = today;

    if (n !=='Friday') {
        document.getElementById('pancake').style.display= 'none';
    }
})