
/* =========================================
   MAAHI - PAGE 3
   MEMORY GALLERY JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTS
    const slides = document.querySelectorAll(".memory-slide");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const dotsContainer = document.getElementById("slide-dots");
    const currentNumber = document.getElementById("current-number");
    const totalNumber = document.getElementById("total-number");
    const slideshow = document.getElementById("slideshow");
    const heartsContainer = document.getElementById("floating-hearts");

    if (!slides.length) {
        console.error("No memory slides found!");
        return;
    }

    let currentIndex = 0;
    let autoplayInterval = null;

    const totalSlides = slides.length;

    // TOTAL SLIDES
    if (totalNumber) {
        totalNumber.textContent = String(totalSlides).padStart(2, "0");
    }


    // CREATE DOTS
    if (dotsContainer) {

        dotsContainer.innerHTML = "";

        slides.forEach((slide, index) => {

            const dot = document.createElement("button");

            dot.type = "button";
            dot.setAttribute("aria-label", `Show photo ${index + 1}`);

            if (index === 0) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {
                showSlide(index);
                restartAutoplay();
            });

            dotsContainer.appendChild(dot);

        });

    }


    // SHOW SLIDE
    function showSlide(index) {

        currentIndex = (index + totalSlides) % totalSlides;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentIndex);
        });

        if (dotsContainer) {

            const dots = dotsContainer.querySelectorAll("button");

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentIndex);
            });

        }

        if (currentNumber) {
            currentNumber.textContent =
                String(currentIndex + 1).padStart(2, "0");
        }

    }


    // NEXT SLIDE
    function nextSlide() {
        showSlide(currentIndex + 1);
    }


    // PREVIOUS SLIDE
    function previousSlide() {
        showSlide(currentIndex - 1);
    }


    // AUTOPLAY
    function startAutoplay() {

        stopAutoplay();

        autoplayInterval = setInterval(() => {
            nextSlide();
        }, 5000);

    }


    function stopAutoplay() {

        if (autoplayInterval !== null) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }

    }


    function restartAutoplay() {
        startAutoplay();
    }


    // BUTTON EVENTS
    if (nextBtn) {

        nextBtn.addEventListener("click", () => {
            nextSlide();
            restartAutoplay();
        });

    }


    if (prevBtn) {

        prevBtn.addEventListener("click", () => {
            previousSlide();
            restartAutoplay();
        });

    }


    // PAUSE ON HOVER
    if (slideshow) {

        slideshow.addEventListener("mouseenter", stopAutoplay);

        slideshow.addEventListener("mouseleave", startAutoplay);

    }


    // MOBILE SWIPE
    let touchStartX = 0;
    let touchEndX = 0;

    if (slideshow) {

        slideshow.addEventListener("touchstart", (event) => {

            touchStartX = event.changedTouches[0].screenX;

        }, { passive: true });


        slideshow.addEventListener("touchend", (event) => {

            touchEndX = event.changedTouches[0].screenX;

            const difference = touchStartX - touchEndX;

            if (Math.abs(difference) > 50) {

                if (difference > 0) {
                    nextSlide();
                } else {
                    previousSlide();
                }

                restartAutoplay();

            }

        }, { passive: true });

    }


    // IMAGE FALLBACK
    document.querySelectorAll(".photo-frame img").forEach((img) => {

        const fallback = img.parentElement.querySelector(".photo-fallback");

        function imageLoaded() {

            img.style.display = "block";

            if (fallback) {
                fallback.style.display = "none";
            }

        }


        function imageFailed() {

            img.style.display = "none";

            if (fallback) {
                fallback.style.display = "flex";
            }

            console.error("Image not found:", img.src);

        }


        img.addEventListener("load", imageLoaded);
        img.addEventListener("error", imageFailed);

        if (img.complete) {

            if (img.naturalWidth > 0) {
                imageLoaded();
            } else {
                imageFailed();
            }

        }

    });


    // FLOATING HEARTS
    function createFloatingHeart() {

        if (!heartsContainer) return;

        const heart = document.createElement("span");

        heart.className = "heart";
        heart.textContent = "♥";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (12 + Math.random() * 15) + "px";
        heart.style.animationDuration = (7 + Math.random() * 5) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 13000);

    }


    // HEART INTERVAL
    setInterval(createFloatingHeart, 700);


    // INITIALIZE
    showSlide(0);
    startAutoplay();


    console.log("Maahi Memory Gallery Loaded Successfully ❤️");

});
