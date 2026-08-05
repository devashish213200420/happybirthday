/* ======================================================
   HAPPY BIRTHDAY WEBSITE
   PREMIUM JAVASCRIPT
   PART 3A-1
======================================================*/

/*=========================
        ELEMENTS
=========================*/

const passwordPage = document.getElementById("passwordPage");
const mainWebsite = document.getElementById("mainWebsite");

const passwordInput = document.getElementById("password");
const wrong = document.getElementById("wrong");

const hero = document.querySelector(".hero");
const letter = document.querySelector(".letter");
const gallery = document.querySelector(".gallery");
const cakePage = document.querySelector(".cakePage");
const videoPage = document.querySelector(".videoPage");
const ending = document.querySelector(".ending");

const startBtn = document.getElementById("startBtn");

const typing = document.getElementById("typing");

const music = document.getElementById("music");

/*=========================
      PASSWORD
=========================*/

const SECRET_PASSWORD = "151025"; // Change to your secret date

function checkPassword() {

    const value = passwordInput.value.trim();

    if (value === SECRET_PASSWORD) {

        wrong.innerHTML = "";

        passwordPage.style.display = "none";

        mainWebsite.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        wrong.innerHTML = "❌ Wrong Secret Date ❤️";

        passwordInput.value = "";

        passwordInput.focus();
    }

}

window.checkPassword = checkPassword;

/* Press Enter */

passwordInput.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        checkPassword();

    }

});

/*=========================
     BACKGROUND MUSIC
=========================*/

function playMusic(){

    if(!music) return;

    music.volume = 0.4;

    music.play().catch(function(){

        console.log("Autoplay blocked until user interaction.");

    });

}

/*=========================
       LOVE LETTER
=========================*/

const message = `My Dearest Babygirl Avantika ❤️

Happy Birthday My Princess 🎂❤️

Today is not just your birthday...

Today the universe celebrates
the most beautiful soul
I have ever met.

Thank you for every smile,
every hug,
every laugh,
and every memory.

You are my peace.

My happiness.

My safe place.

My biggest blessing.

I never imagined that one person
could make my world so beautiful.

I promise to stand beside you,
support you,
and love you
through every chapter of life.

May your smile
always shine brighter
than the stars above us.
I wishes best for you are achieving what you want in life and 
I will always be there to support you
Never give up on your dreams 
no matter what i always proud of you I love you so much 
Happy Birthday future Dr.Avantika Sanap❤️

Yours,

Deva (gendu) ❤️`;

/*=========================
      TYPEWRITER
=========================*/

let typingIndex = 0;

let typingTimer = null;

function startTyping(){

    typing.innerHTML = "";

    typingIndex = 0;

    clearInterval(typingTimer);

    typingTimer = setInterval(function(){

        typing.innerHTML += message.charAt(typingIndex);

        typingIndex++;

        if(typingIndex >= message.length){

            clearInterval(typingTimer);

            setTimeout(showGallery,3000);

        }

    },40);

}

/*=========================
     OPEN MY HEART
=========================*/

startBtn.addEventListener("click",function(){

    startBtn.disabled = true;

    playMusic();

    hero.classList.add("hidden");

    letter.classList.remove("hidden");

    letter.scrollIntoView({

        behavior:"smooth"

    });

    startTyping();

});

/*=========================
        SHOW GALLERY
=========================*/

function showGallery() {

    // Hide Letter
    letter.classList.add("hidden");

    // Show Gallery
    gallery.classList.remove("hidden");

    gallery.scrollIntoView({
        behavior: "smooth"
    });

    // Show Gallery for 15 seconds
    setTimeout(showCake, 15000);

}

/*=========================
        SHOW CAKE
=========================*/

function showCake() {

    gallery.classList.add("hidden");

    cakePage.classList.remove("hidden");

    cakePage.scrollIntoView({
        behavior: "smooth"
    });

}

/*=========================
      CAKE BUTTON
=========================*/

cakeBtn.addEventListener("click", function () {

    // Disable button
    cakeBtn.disabled = true;

    // Blow candle
    const flame = document.querySelector(".flame");

    if (flame) {

        flame.classList.add("off");

    }

    // Small delay
    setTimeout(function () {

        cakePage.classList.add("hidden");

        videoPage.classList.remove("hidden");

        videoPage.scrollIntoView({
            behavior: "smooth"
        });

        // Pause Music
        if (music) {

            music.pause();

        }

        // Play Video
        if (loveVideo) {

            loveVideo.currentTime = 0;

            loveVideo.play().catch(() => {});

        }

    }, 2000);

});

/*=========================
        VIDEO END
=========================*/

if (loveVideo) {

    loveVideo.addEventListener("ended", function () {

        videoPage.classList.add("hidden");

        ending.classList.remove("hidden");

        ending.scrollIntoView({
            behavior: "smooth"
        });

    });

}

