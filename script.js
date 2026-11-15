
/* ==========================================
   MAAHI HOMEPAGE - FINAL WORKING JAVASCRIPT
   DIRECT UNLOCK + HOME + CELEBRATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const unlockScreen = document.getElementById("unlock-screen");
    const enterButton = document.getElementById("enter-button");

    const birthdayHome = document.getElementById("birthday-home");
    const openSurprise = document.getElementById("open-surprise");

    const starsLayer = document.getElementById("stars-layer");
    const particleLayer = document.getElementById("particle-layer");
    const petalLayer = document.getElementById("petal-layer");
    const confettiLayer = document.getElementById("confetti-layer");
    const flashOverlay = document.getElementById("flash-overlay");

    // DIRECT UNLOCK

    unlockScreen.classList.add("active");
    birthdayHome.classList.remove("active");

    // ENTER BUTTON

    let entered = false;

    enterButton.addEventListener("click", () => {

        if (entered) return;
        entered = true;

        enterButton.disabled = true;

        createConfetti(120);

        flashOverlay.classList.add("active");

        setTimeout(() => {

            unlockScreen.classList.remove("active");
            birthdayHome.classList.add("active");

            flashOverlay.classList.remove("active");

            enterButton.disabled = false;

            birthdayHome.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 500);

    });

    // OPEN LETTER

    openSurprise.addEventListener("click", () => {
        window.location.href = "page1.html";
    });

    // CREATE STARS

    function createStar() {

        if (document.hidden) return;

        const star = document.createElement("span");

        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        starsLayer.appendChild(star);

        setTimeout(() => star.remove(), 7000);
    }

    // GOLD PARTICLES

    function createParticle() {

        if (document.hidden) return;

        const particle = document.createElement("span");

        particle.className = "gold-particle";

        const size = Math.random() * 4 + 2;

        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (5 + Math.random() * 6) + "s";

        particleLayer.appendChild(particle);

        setTimeout(() => particle.remove(), 12000);
    }

    // ROSE PETALS

    function createPetal() {

        if (document.hidden) return;

        const petal = document.createElement("span");

        petal.className = "rose-petal";
        petal.style.left = Math.random() * 100 + "vw";

        petal.style.setProperty(
            "--drift",
            (Math.random() * 180 - 90) + "px"
        );

        petal.style.animationDuration = (7 + Math.random() * 7) + "s";

        petalLayer.appendChild(petal);

        setTimeout(() => petal.remove(), 15000);
    }

    // CONFETTI

    function createConfetti(amount) {

        for (let i = 0; i < amount; i++) {

            const piece = document.createElement("span");

            piece.className = "confetti-piece";
            piece.style.left = Math.random() * 100 + "%";

            piece.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            piece.style.animationDelay =
                Math.random() * 1.5 + "s";

            confettiLayer.appendChild(piece);

            setTimeout(() => piece.remove(), 6000);
        }
    }

    // BACKGROUND ANIMATIONS

    setInterval(createStar, 350);
    setInterval(createParticle, 450);
    setInterval(createPetal, 1700);

});
