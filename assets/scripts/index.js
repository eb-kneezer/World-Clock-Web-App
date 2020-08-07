// https://eb-kneezer.github.io/World-Clock-Web-App/

// Declaration of Variables
let today, 
newLocation, 
newTime, 
displayTime, 
newCity;


newCity = [];

// Recieve Location From User and match with
// objects in time_zones array
document.querySelector('#send').addEventListener('click', () => {
    newLocation = document.querySelector('#newTimeZone').value;

    time_zones.forEach(zone => {
        if (newLocation.toLowerCase() === zone.city.toLowerCase()) {
            newCity.push(zone);
            
            // getTime();
            displayContent();
        }
    });
});

// Get Time Function...dynamically

function getTime() {
    let currentTime = new Date();
    let hour = currentTime.getUTCHours();
    let minute = currentTime.getUTCMinutes();
    let second = currentTime.getUTCSeconds();

    minute = checkTime(minute);
    second = checkTime(second);

    for (let i = 0; i < document.querySelectorAll('.city-section').length; i++) {
        document.querySelectorAll('.time')[i].textContent = hour + newCity[i].utc + ':' + minute + ':' + second;
        document.querySelectorAll('.city-section h4')[i].textContent = newCity[i].city;
        document.querySelectorAll('.location')[i].textContent = newCity[i].country;   
    }
    setTimeout(getTime,1000);

    
}

// add new myTimeZone section
function displayContent() {
    
    document.querySelector('.my-time-zone .container').innerHTML += '<div class="city-section"><h4 class="text-uppercase font-weight-bold"></h4><div class="date-time"><div class="time"></div><div class="location"></div></div><i class="delete-time far fa-times-circle"></i></div>';
    getTime();
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
}

// function dynamicTime() {
//     document.querySelector('.city-section h4').textContent = newCity.city;
//     document.querySelector('.time').textContent = hour + newCity.utc + ':' + minute + ':' + second;
//     document.querySelector('.location').textContent = newCity.country;
// }
