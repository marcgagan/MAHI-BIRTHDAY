
// =================================
// BIRTHDAY LETTER - ENVELOPE
// =================================

const envelope = document.getElementById("envelope");
const birthdayLetter = document.getElementById("birthday-letter");
const letterHint = document.getElementById("letter-hint");

envelope.addEventListener("click", function () {

    envelope.classList.add("opened");

    setTimeout(function () {
        birthdayLetter.classList.add("show");
        letterHint.textContent = "A message from the heart ❤️";
    }, 500);

});
