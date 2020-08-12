// https://eb-kneezer.github.io/World-Clock-Web-App/

// Declaration of Variables

let today, 
newLocation, 
newTime, 
displayTime, 
counter;

let availableCity = [];
let newCity = [];

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
            counter = 'no' + newCity.indexOf(zone);
            displayContent();
        }
    });
});




// add new myTimeZone section
function displayContent() {
    document.querySelector('.my-time-zone .container').innerHTML += `<div class="city-section" id="${counter}"><h4 class="text-uppercase font-weight-bold"></h4><div class="date-time"><div class="time"></div><div class="location"></div></div><i class="delete-time fa fa-times-circle" id="${counter}"></i></div>`;
    
    getTime();

    document.querySelectorAll('.delete-time').forEach(button => {
        button.addEventListener('click', ()=>{
            let attr = Number(button.getAttribute('id').split('')[2]);
            newCity.splice(attr, 1);
            deleteCity(attr);
            console.log(newCity);
            getTime();
        });
    });

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
//(strangen bugs still exist)
function deleteCity(btnId) {
    if(document.querySelectorAll('.city-section')[btnId]){
        document.querySelectorAll('.city-section')[btnId].remove();
    } else {
        document.querySelector('.city-section').remove();
    }
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
    var minLength = (lengthA > lengthB) ? lengthB : lengthA;    
    var maxLength = (lengthA < lengthB) ? lengthB : lengthA;    
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
