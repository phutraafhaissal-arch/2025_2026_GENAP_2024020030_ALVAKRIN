/*
==========================================================
HERO.JS
Universitas Handayani Makassar
Premium Version
==========================================================
*/

// ======================================================
// ELEMENT
// ======================================================

const heroSlider = document.querySelector(".hero-slider");

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".hero-dot");

const prevBtn = document.querySelector(".hero-prev");

const nextBtn = document.querySelector(".hero-next");

const progress = document.querySelector(".hero-progress-bar");

// ======================================================
// CHECK
// ======================================================

if (heroSlider && slides.length > 0) {

    let current = 0;

    let interval;

    const delay = 5000;

    // ==========================================
    // SHOW SLIDE
    // ==========================================

    function showSlide(index) {

        slides.forEach(slide => {

            slide.classList.remove("active");

        });

        dots.forEach(dot => {

            dot.classList.remove("active");

        });

        slides[index].classList.add("active");

        if (dots[index]) {

            dots[index].classList.add("active");

        }

        resetProgress();

    }

    // ==========================================
    // NEXT
    // ==========================================

    function nextSlide() {

        current++;

        if (current >= slides.length) {

            current = 0;

        }

        showSlide(current);

    }

    // ==========================================
    // PREVIOUS
    // ==========================================

    function prevSlide() {

        current--;

        if (current < 0) {

            current = slides.length - 1;

        }

        showSlide(current);

    }

    // ==========================================
    // AUTO SLIDE
    // ==========================================

    function startSlider() {

        interval = setInterval(nextSlide, delay);

    }

    function stopSlider() {

        clearInterval(interval);

    }

    // ==========================================
    // PROGRESS BAR
    // ==========================================

    function resetProgress() {

        if (!progress) return;

        progress.style.animation = "none";

        progress.offsetHeight;

        progress.style.animation = `heroProgress ${delay / 1000}s linear`;

    }

    // ==========================================
    // BUTTON
    // ==========================================

    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();

            stopSlider();

            startSlider();

        });

    }

    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            prevSlide();

            stopSlider();

            startSlider();

        });

    }

    // ==========================================
    // DOTS
    // ==========================================

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            current = index;

            showSlide(current);

            stopSlider();

            startSlider();

        });

    });

    // ==========================================
    // PAUSE HOVER
    // ==========================================

    heroSlider.addEventListener("mouseenter", stopSlider);

    heroSlider.addEventListener("mouseleave", startSlider);

    // ==========================================
    // PARALLAX
    // ==========================================

    heroSlider.addEventListener("mousemove", (e) => {

        const rect = heroSlider.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;

        const y = (e.clientY - rect.top) / rect.height;

        heroSlider.style.transform = `
            perspective(1000px)
            rotateY(${(x - 0.5) * 4}deg)
            rotateX(${(0.5 - y) * 4}deg)
        `;

    });

    heroSlider.addEventListener("mouseleave", () => {

        heroSlider.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

    // ==========================================
    // INIT
    // ==========================================

    showSlide(current);

    startSlider();

}