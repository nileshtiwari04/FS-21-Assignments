let hour = document.querySelector('.hours');
let min = document.querySelector('.mins');
let sec = document.querySelector('.secs');
let format = document.querySelector('.format');
let p = document.querySelector('p');

function updateTimeIn24HourFormat(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if(h < 10){
        h = '0' + h; 
    }
    
    if(m < 10){
        m = '0' + m;
    }
    
    if(s < 10){
        s = '0' + s;
    }

    hour.textContent = h;
    min.textContent = m;
    sec.textContent = s;
}

function updateTime12HourFormat(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if(h > 12)
    {
        console.log(h);
        
        p.innerText = 'PM';
    }

    if(h > 12){
        h -= 12;
    }


    if(h < 10){
        h = '0' + h; 
    }
    
    if(m < 10){
        m = '0' + m;
    }
    
    if(s < 10){
        s = '0' + s;
    }
    hour.textContent = h;
    min.textContent = m;
    sec.textContent = s;
}

let intervalId = null;

format.addEventListener('change', (e) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
});

intervalId = setInterval(updateTimeIn24HourFormat, 1000);

format.addEventListener('change', (e) => {
    if(e.target.value == '12'){
        intervalId = setInterval(updateTime12HourFormat, 1000);
        p.style.visibility = "visible";
    }
    else if(e.target.value == '24'){
            intervalId = setInterval(updateTimeIn24HourFormat, 1000);
            p.style.visibility = "hidden";
        }
    });