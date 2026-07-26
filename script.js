// ==========================
// Loading Progress
// ==========================

const loadingScreen = document.getElementById("loading-screen");
const intro = document.getElementById("intro");
const progress = document.querySelector(".progress");
const typewriter = document.getElementById("typewriter");
const startBtn = document.getElementById("startBtn");

let width = 0;

const loading = setInterval(() => {

    width++;

    progress.style.width = width + "%";

    if (width >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            loadingScreen.style.opacity = "0";
            loadingScreen.style.transition = "1.5s";

            setTimeout(() => {

                loadingScreen.style.display = "none";

                intro.style.display = "flex";

                startTyping();

            }, 1500);

        }, 600);

    }

}, 45);

// ==========================
// Typewriter Text
// ==========================

const messages = [

    "Every beautiful story begins with a single moment...",

    "Ours began with You. ❤️",

    "Kuch yaadein sirf tasveer nahi hoti...",

    "Woh poori zindagi ban jaati hain.",

    "Aur meri sabse khoobsurat zindagi...",

    "Aap Hain. ❤️"

];

let messageIndex = 0;
let charIndex = 0;

function startTyping() {

    if (messageIndex >= messages.length) {

        startBtn.style.opacity = "1";
        startBtn.style.pointerEvents = "auto";

        return;
    }

    typewriter.innerHTML = "";

    charIndex = 0;

    const typing = setInterval(() => {

        typewriter.innerHTML += messages[messageIndex][charIndex];

        charIndex++;

        if (charIndex >= messages[messageIndex].length) {

            clearInterval(typing);

            setTimeout(() => {

                messageIndex++;

                startTyping();

            }, 2200);

        }

    }, 45);

}

// ==========================
// Button
// ==========================

startBtn.style.opacity = "0";
startBtn.style.pointerEvents = "none";

startBtn.addEventListener("click", () => {

    startBtn.innerHTML = "❤️ Loading Memories...";

    startBtn.style.transform = "scale(.96)";

    setTimeout(() => {

        // Next Part
        alert("✨ Part 2 (Memories) Coming Next...");

    }, 1200);

});

// ==========================
// Stars Animation
// ==========================

const stars = document.getElementById("stars");

let pos = 0;

setInterval(() => {

    pos++;

    stars.style.backgroundPositionY = pos + "px";

}, 80);
