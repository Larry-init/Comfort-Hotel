//Inserting map for hotel location
function initMap(){
    var options = {
        zoom: 14,
        center: {lat: 6.5261, lng: 3.3921}
    };

    var map = new google.maps.Map(document.getElementsByClassName('map')[0], options);

    //Putting a marker on the map
    const marker = new google.maps.Marker({
        position: {lat: 6.5157, lng: 3.3899},
        map: map
    })
}

//For hamburger menu
let times = document.querySelector('.times'),
    bar = document.querySelector('.bar'),
    timesBtn = document.querySelector('.timesBtn'),
    barBtn = document.querySelector('.barBtn');
    
barBtn.addEventListener('click', function(){
    if(timesBtn.classList.contains('timesBtn')){
        times.classList.toggle('timesOut');
    }
})
timesBtn.addEventListener('click', function(){
    if(timesBtn.classList.contains('timesBtn')){
        times.classList.toggle('timesOut');
    }
})