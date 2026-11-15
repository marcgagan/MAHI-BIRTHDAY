
// =================================
// MAAHI BIRTHDAY COUNTDOWN + UNLOCK
// =================================

// TESTING MODE: Unlock immediately
const birthdayDate = Date.now() - 1000;                                                                               

// LIVE MODE ke liye upar wali line hata kar ye use karna:
// const birthdayDate = new Date("2026-11-16T00:00:00+05:30").getTime();

const countdownPage = document.getElementById("countdown-page");
const unlockScreen = document.getElementById("unlock-screen");
const birthdayHome = document.getElementById("birthday-home");
const enterButton = document.getElementById("enter-button");

function unlockBirthday() {
    countdownPage.style.display = "none";
    unlockScreen.classList.add("active");
}

function updateCountdown() {

    const now = Date.now();
    const distance = birthdayDate - now;

    if (distance <= 0) {
        unlockBirthday();
        return;
    }

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24))
        .toString().padStart(2, "0");

    document.getElementById("hours").textContent =
        Math.floor((distance / (1000 * 60 * 60)) % 24)
        .toString().padStart(2, "0");

    document.getElementById("minutes").textContent =
        Math.floor((distance / (1000 * 60)) % 60)
        .toString().padStart(2, "0");

    document.getElementById("seconds").textContent =
        Math.floor((distance / 1000) % 60)
        .toString().padStart(2, "0");
}

enterButton.addEventListener("click", function () {
    unlockScreen.classList.remove("active");
    birthdayHome.classList.add("active");
});

updateCountdown();
setInterval(updateCountdown, 1000);
