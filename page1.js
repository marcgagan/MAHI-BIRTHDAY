
/* ==========================================
   MAAHI PAGE 2 - COMPLETE WORKING JAVASCRIPT
   ENVELOPE + LETTER + CUPID + HEARTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTS
    const envelope = document.getElementById("envelope");
    const birthdayLetter = document.getElementById("birthday-letter");
    const envelopeHint = document.getElementById("envelope-hint");

    const cupidStage = document.getElementById("cupid-stage");
    const cupidCaption = document.getElementById("cupid-caption");

    const grandEnding = document.getElementById("grand-ending");

    const particleLayer = document.getElementById("particle-layer");
    const petalLayer = document.getElementById("petal-layer");

    const nextButtons = document.querySelectorAll(".next-button");

    // ======================================
    // ENVELOPE OPEN
    // ======================================

    let envelopeOpened = false;

    function openEnvelope() {
        if (!envelope || envelopeOpened) return;

        envelopeOpened = true;
        envelope.classList.add("opened");

        if (envelopeHint) {
            envelopeHint.textContent = "Your letter is opening... ❤️";
        }

        setTimeout(() => {

            if (birthdayLetter) {
                birthdayLetter.classList.add("show");

                birthdayLetter.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            if (envelopeHint) {
                envelopeHint.textContent =
                    "A little message, written with love ❤️";
            }

            revealEnding();

        }, 1100);
    }

    if (envelope) {
        envelope.addEventListener("click", openEnvelope);

        envelope.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openEnvelope();
            }
        });
    }

    // ======================================
    // GRAND ENDING
    // ======================================

    function revealEnding() {
        if (!grandEnding) return;

        const paragraphs = birthdayLetter
            ? birthdayLetter.querySelectorAll(".letter-content p")
            : [];

        const delay = Math.max(6500, paragraphs.length * 600 + 1000);

        setTimeout(() => {
            grandEnding.classList.add("show");

            grandEnding.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, delay);
    }

/* ======================================
   CUPID ARROW - FIXED ANIMATION
====================================== */

let cupidStarted = false;

function startCupid() {

    const cupidStage = document.getElementById("cupid-stage");
    const arrow = document.getElementById("flying-arrow");
    const targetHeart = document.getElementById("target-heart");
    const cupidCaption = document.getElementById("cupid-caption");

    if (!cupidStage || !arrow || cupidStarted) return;

    cupidStarted = true;

    // Reset animation
    cupidStage.classList.remove("shooting", "hit");
    arrow.classList.remove("arrow-shoot");
    arrow.style.opacity = "1";

    if (cupidCaption) {
        cupidCaption.textContent =
            "Cupid has a little surprise for you...";
    }

    // Arrow preparation
    setTimeout(() => {

        arrow.classList.add("arrow-shoot");

        cupidStage.classList.add("shooting");

        if (cupidCaption) {
            cupidCaption.textContent =
                "Sending a little love your way...";
        }

    }, 1000);

    // Arrow hits heart
    setTimeout(() => {

        cupidStage.classList.remove("shooting");
        cupidStage.classList.add("hit");

        arrow.style.opacity = "0";

        if (targetHeart) {
            targetHeart.classList.add("heart-hit");
        }

        if (cupidCaption) {
            cupidCaption.textContent =
                "Cupid found your heart! ❤️";
        }

        createHeartBurst(25);

    }, 2400);

}

// Start Cupid
setTimeout(startCupid, 1500);


    // ======================================
    // HEART BURST EFFECT
    // ======================================

    function createHeartBurst(amount) {
        if (!cupidStage) return;

        const rect = cupidStage.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < amount; i++) {

            const heart = document.createElement("span");

            heart.className = "burst-heart";
            heart.textContent = Math.random() > 0.5 ? "❤️" : "💗";

            heart.style.left = centerX + "px";
            heart.style.top = centerY + "px";

            heart.style.setProperty(
                "--dx",
                (Math.random() * 300 - 150) + "px"
            );

            heart.style.setProperty(
                "--dy",
                (Math.random() * 260 - 130) + "px"
            );

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 1800);
        }
    }

    // ======================================
    // GOLD PARTICLES
    // ======================================

    function createGoldParticle() {
        if (document.hidden || !particleLayer) return;

        const particle = document.createElement("span");

        particle.className = "gold-particle";

        const size = Math.random() * 4 + 2;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.left = Math.random() * 100 + "vw";

        particle.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        particleLayer.appendChild(particle);

        setTimeout(() => particle.remove(), 12000);
    }

    // ======================================
    // FALLING ROSE PETALS
    // ======================================

    function createRosePetal() {
        if (document.hidden || !petalLayer) return;

        const petal = document.createElement("span");

        petal.className = "rose-petal";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.setProperty(
            "--drift",
            (Math.random() * 180 - 90) + "px"
        );

        petal.style.animationDuration =
            (7 + Math.random() * 7) + "s";

        petalLayer.appendChild(petal);

        setTimeout(() => petal.remove(), 15000);
    }

    // ======================================
    // NEXT PAGE BUTTONS
    // ======================================

    nextButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.disabled = true;
            button.textContent = "OPENING YOUR NEXT SURPRISE ❤️";

            window.location.href = "page2.html";

        });

    });

    // ======================================
    // START BACKGROUND ANIMATIONS
    // ======================================

    setInterval(createGoldParticle, 450);
    setInterval(createRosePetal, 1700);

});
