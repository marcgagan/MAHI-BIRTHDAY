
 // =====================================
 // BIRTHDAY COUNTDOWN - SIMPLE TIMER
 // =====================================

const birthdayDate = new Date("2026-11-16T00:00:00+05:30").getTime();

function updateCountdown() {

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error("Countdown HTML elements not found!");
        return;
    }

    const distance = birthdayDate - Date.now();

    if (distance <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        const descriptions = document.querySelectorAll(".countdown-description");

        descriptions.forEach(element => {
            element.textContent = "Today is your special day! Happy Birthday! ❤️";
        });

        return;
    }

    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

// Start countdown automatically
updateCountdown();
setInterval(updateCountdown, 1000);


// =====================================
// START BUTTON
// =====================================

document.getElementById("startBtn")?.addEventListener("click", function () {

    document.getElementById("message")?.scrollIntoView({
        behavior: "smooth"
    });

});


// =====================================
// LETTER BUTTON
// =====================================

document.getElementById("letterBtn")?.addEventListener("click", function () {

    const letter = document.getElementById("letterContent");

    if (letter) {

        letter.style.display = "block";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        this.textContent = "Letter Opened ❤️";
        this.disabled = true;
    }

});


// =====================================
// FINAL SURPRISE
// =====================================

document.getElementById("wishBtn")?.addEventListener("click", function () {

    const message = document.getElementById("finalMessage");

    if (message) {

        message.textContent =
            "May all your dreams come true. Happy Birthday! ❤️✨";

        this.textContent = "A Wish Just For You ❤️";
    }

});


// =====================================
// MUSIC BUTTON
// =====================================

document.getElementById("musicBtn")?.addEventListener("click", function () {

    alert("Birthday music will be added soon! 🎵");

});
