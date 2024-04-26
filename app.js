// Defines all the variables used
const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector("#navbar__logo")
const body = document.querySelector('body')
var bassAudio = document.getElementById("bassAudio");
var bassBtn = document.getElementById("bassBtn");
var guitarAudio = document.getElementById("guitarAudio");
var guitarBtn = document.getElementById("guitarBtn");
var drumAudio = document.getElementById("drumAudio");
var drumBtn = document.getElementById("drumBtn");
let clockTime = 0;
let timerInterval;
var countBass = 0;
var countGuitar = 0;
var countDrums = 0;


//Display Menu
// Calls the 3 bars on the top right of the navbar
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}
//When clicked the 3 bars on the navbar call back to the "mobileMenu" which changes their appearance from the css file
menu.addEventListener('click', mobileMenu)


//Animations
//Uses the API from Green Socks to animate the text from the "hero_section" using a "Scroll Trigger"
//https://gsap.com/docs/v3/
gsap.registerPlugin(ScrollTrigger);

//As the bottom section is scrolled to the hero section is moved up off the screen
gsap.to(".hero__content", {
    y: -450,
    ease: "none",
    scrollTrigger: {
        trigger: ".bottom_container",
        scrub: true
    }
})


//Audio
//Creates an internal clock to count when music is played in order to delay when other audio files begin playing
//This is to ensure they all play in time
function incrementTimer(){
    if (countBass === 1 || countGuitar === 1 || countDrums === 1) { //If any one of the audio files are already playing then start the count
        clockTime++;
        if (clockTime === 12){ //Once the internal clock reaches "12" then reset the timer back to "0"
            clockTime = 0;
        }
    }
    else{ //When all audio files have stopped playing then call the function "stopTimer"
        stopTimer();
    }
}

//Function to start the timer and ensure the internal clock increments each seconds in real time
function startTimer(){
    if(!timerInterval){
        timerInterval = setInterval(incrementTimer, 1000);
           }
}
//Stops the timer and resets the internal clock back to "0"
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = undefined;
        clockTime = 0;
    }
}

function playBass(){
    if(countBass == 0){ //If the audio is not already playing
        if (clockTime == 0){ //And if the timer is at 0
            countBass = 1; //Set the count to 1 to indicate that the audio is playing
            startTimer(); //Call the function "startTimer"
            //When the audio file ends restart and play it automatically
            bassAudio.play();
            bassAudio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }
        else{ //If the internal clock is already couting the delay when the audio begins playing by how many seconds are left before it restarts
            setTimeout(playBass, (12 - clockTime) * 1000);
        }
    }
    else{ //If the audio is already playing then stop it and reset the runtime to 0 seconds
        countBass = 0;
        bassAudio.pause();
        bassAudio.currentTime = 0;
        }
}

function playGuitar(){
    if (countGuitar == 0){ //If the audio is not already playing
        if(clockTime == 0){ //And if the timer is at 0
            countGuitar = 1; //Set the count to 1 to indicate that the audio is playing
            startTimer(); //Call the function "startTimer"
            //When the audio file ends restart and play it automatically
            guitarAudio.play();
            guitarAudio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }
        else{ //If the internal clock is already couting the delay when the audio begins playing by how many seconds are left before it restarts
            setTimeout(playGuitar, (12 - clockTime) * 1000);
        }
    }
    else{ //If the audio is already playing then stop it and reset the runtime to 0 seconds
        countGuitar = 0;
        guitarAudio.pause();
        guitarAudio.currentTime=0;
    }
}

function playDrums(){
    if (countDrums == 0){ //If the audio is not already playing
        if(clockTime == 0){ //And if the timer is at 0
            countDrums = 1; //Set the count to 1 to indicate that the audio is playing
            startTimer(); //Call the function "startTimer"
            //When the audio file ends restart and play it automatically
            drumAudio.play();
            drumAudio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }
        else{//If the internal clock is already couting the delay when the audio begins playing by how many seconds are left before it restarts
            setTimeout(playDrums, (12 - clockTime) * 1000);
        }
    }
    else{ //If the audio is already playing then stop it and reset the runtime to 0 seconds
        countDrums = 0;
        drumAudio.pause();
        dru
        mAudio.currentTime=0;
    } 
}