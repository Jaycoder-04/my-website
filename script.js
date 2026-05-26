function showLove(){
alert("Amanda ❤️ You are genuinely the best thing that has ever happened to me.");
}

function playMusic(){
let song = document.getElementById('song');
song.play();
}

let startDate = new Date("2025-01-01");
let today = new Date();
let difference = today - startDate;
let days = Math.floor(difference / (1000 * 60 * 60 * 24));

let daysElement = document.getElementById('days');

if(daysElement){
daysElement.innerHTML = days + " Days ❤️";
}