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

//Increasing and decreasing the blog post

let more = document.querySelector('.more'),
    decrease = document.querySelector('.decrease');

more.addEventListener("click", function (){
    if (more.classList.contains('more')){
        decrease.classList.toggle('increase')
    }
})