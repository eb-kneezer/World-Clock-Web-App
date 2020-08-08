// https://eb-kneezer.github.io/World-Clock-Web-App/

// Declaration of Variables
let today, 
newLocation, 
newTime, 
displayTime, 
newCity;

let counter = -1;
let availableCity = [];
newCity = [];


time_zones.forEach(zone => {
  availableCity.push(zone.city);
})
// Recieve Location From User, push to newCity array, and match with
// objects in time_zones array in time-zones.js
document.querySelector('#send').addEventListener('click', () => {
    newLocation = document.querySelector('#newTimeZone').value;

    time_zones.forEach(zone => {
        if (similar(zone.city, newLocation) >= 60) {
            newCity.push(zone);
            counter += 1;
            // getTime();
            displayContent();
        }
    });
});


// add new myTimeZone section
function displayContent() {
    
    document.querySelector('.my-time-zone .container').innerHTML += '<div class="city-section"><h4 class="text-uppercase font-weight-bold"></h4><div class="date-time"><div class="time"></div><div class="location"></div></div><i class="delete-time far fa-times-circle" id="counter"></i></div>';
    getTime();
}

// Generate current time.
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

// remove timeZone section
//not yet working

let el = document.querySelector('i');
if (el) {
  el.addEventListener('click', () => {
  let remov = document.querySelector('.location');
  remov.remove();
});
}
       




//for single digit time, add '0' in front
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
}

//Word compare function
function similar(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    var lengthA = a.length;
    var lengthB = b.length;
    var equivalency = 0;
    var minLength = (a.length > b.length) ? b.length : a.length;    
    var maxLength = (a.length < b.length) ? b.length : a.length;    
    for(var i = 0; i < minLength; i++) {
        if(a[i] == b[i]) {
            equivalency++;
        }
    }
  
    var weight = equivalency / maxLength;
    return (weight * 100);
}

//Auto Suggest
$(function () {
  $("#newTimeZone").autocomplete({
    source: availableCity,
  });
});