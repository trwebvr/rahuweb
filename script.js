// 10 Minute Live Countdown Timer

let totalSeconds = 10 * 60;

const countdown = document.getElementById("countdown");

function startTimer() {

let minutes = Math.floor(totalSeconds / 60);

let seconds = totalSeconds % 60;

minutes = minutes < 10 ? "0" + minutes : minutes;

seconds = seconds < 10 ? "0" + seconds : seconds;

countdown.innerHTML = minutes + ":" + seconds;

if (totalSeconds > 0) {

totalSeconds--;

} else {

countdown.innerHTML = "⏰ OFFER EXPIRED";

clearInterval(timer);

}

}

startTimer();

let timer = setInterval(startTimer, 1000);


// Fade In Animation

window.onload = function(){

document.body.style.opacity = "0";

document.body.style.transition = "opacity 1s";

setTimeout(function(){

document.body.style.opacity = "1";

},100);

};


// Browser Title Animation

const titles=[

"🏠 WORK FROM HOME",

"🔥 APPLY NOW",

"💰 EARN ₹25K-₹35K",

"🟢 JOIN ON WHATSAPP"

];

let i=0;

setInterval(function(){

document.title=titles[i];

i++;

if(i>=titles.length){

i=0;

}

},2000);


// Scroll Animation

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",function(){

cards.forEach(function(card){

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

cards.forEach(function(card){

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.8s";

});

// Demo Live Popup

const messages = [

"🎉 Rahul from Jaipur started registration.",

"🎉 Pooja from Delhi completed registration.",

"🎉 Aman from Lucknow clicked Apply Now.",

"🎉 Neha from Jaipur joined today.",

"🎉 Rohit from Indore completed verification."

];

let popup = document.getElementById("popup");

let index = 0;

setInterval(function(){

index++;

if(index >= messages.length){

index = 0;

}

popup.innerHTML = messages[index];

},8000);


// Demo Viewer Counter

let viewers = 387;

let joined = 1278;

setInterval(function(){

viewers += Math.floor(Math.random()*3);

joined += Math.floor(Math.random()*2);

document.getElementById("viewer").innerHTML =
"👀 " + viewers + " People Are Viewing This Page";

document.getElementById("joined").innerHTML =
"✅ " + joined + " People Joined Today";

},6000);

// Scroll To Top Button

let mybutton=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

mybutton.style.display="block";

}else{

mybutton.style.display="none";

}

};

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
