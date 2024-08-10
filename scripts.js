let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");


setInterval( () =>{
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours()<10? "0":"") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10? "0":"") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10? "0":"") + currentTime.getSeconds();

}, 1000);
