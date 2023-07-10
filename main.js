// input parameter

let hour = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let set = document.getElementById('set');
let start = document.getElementById('start');        let show = document.querySelector('.output');
let setterBox = document.querySelector('.inputs');

// output parameter

const hr = document.querySelector('.hrs');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');
const thisDay = document.getElementById('now');



set.addEventListener('click', function () {

    hr.innerHTML = hour.value.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    mins.innerHTML = min.value.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    secs.innerHTML = sec.value.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

  
 

 const hours = hour.value * 3600000;
const minutes = min.value * 60000;
const seconds = sec.value * 1000;

const setTime = hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;


    let interval;
    start.addEventListener('click', function () {



    
        interval = setInterval(function () {

            hr.value = hours;
            mins.value = minutes;
            secs.value = seconds;

            const currentTime = Date.now();
            const remainginTime = futureTime - currentTime;



            const h = Math.floor((remainginTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            const m = Math.floor((remainginTime / (1000 * 60)) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            const s = Math.floor((remainginTime / 1000) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            hr.innerHTML = h;
            mins.innerHTML = m;
            secs.innerHTML = s;


            if (remainginTime <= 0) {
                // Clear the interval

                clearInterval(interval);
                hr.innerHTML = '00';
                mins.innerHTML = '00';
                secs.innerHTML = '00';


            }

            if (remainginTime <= 6000) {

                show.style.color = 'red';
            }



        }, 1000);


    });


});







