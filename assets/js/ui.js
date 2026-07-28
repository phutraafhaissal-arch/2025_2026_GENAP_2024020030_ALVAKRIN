/*
==========================================================
UI.JS
Universitas Handayani Makassar
Premium Version
==========================================================
*/

// ======================================================
// REVEAL ANIMATION
// ======================================================

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    revealItems.forEach(item => observer.observe(item));

}

// ======================================================
// COUNTER
// ======================================================

const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let value = 0;

            const update = () => {

                value += Math.ceil((target - value) / 12);

                counter.innerText = value.toLocaleString();

                if (value < target) {

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target.toLocaleString();

                }

            };

            update();

            counterObserver.unobserve(counter);

        });

    });

    counters.forEach(counter => counterObserver.observe(counter));

}

// ======================================================
// LOADER
// ======================================================

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 700);

    }

});

// ======================================================
// BACK TO TOP
// ======================================================

const backTop = document.querySelector(".back-top");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ======================================================
// CURSOR GLOW
// ======================================================

const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";

        cursorGlow.style.top = e.clientY + "px";

    });

}

// ======================================================
// 3D CARD EFFECT
// ======================================================

const cards = document.querySelectorAll(

".program-card,.leader-card,.news-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -12;

        const rotateY = ((x / rect.width) - 0.5) * 12;

        card.style.transform =

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ======================================================
// RIPPLE BUTTON
// ======================================================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";

        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ======================================================
// TOAST
// ======================================================

window.showToast = function(message = "Berhasil") {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

// ======================================================
// PMB FORM
// ======================================================

const pmbForm = document.querySelector("#pmbForm");

if (pmbForm) {

    pmbForm.addEventListener("submit", (e) => {

        e.preventDefault();

        showToast("Pendaftaran berhasil (Simulasi)");

        pmbForm.reset();

    });

}

// ======================================================
// CONTACT FORM
// ======================================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        showToast("Pesan berhasil dikirim (Simulasi)");

        contactForm.reset();

    });

}

// ======================================================
// FLOATING WHATSAPP
// ======================================================

const wa = document.querySelector(".whatsapp");

if (wa) {

    wa.addEventListener("click", () => {

        window.open(

            "https://wa.me/6281234567890",

            "_blank"

        );

    });

}

// ======================================================
// PARALLAX DECORATION
// ======================================================

document.addEventListener("mousemove", (e) => {

    document.querySelectorAll(".blur-circle").forEach((circle, index) => {

        const speed = (index + 1) * 12;

        const x = (window.innerWidth / 2 - e.clientX) / speed;

        const y = (window.innerHeight / 2 - e.clientY) / speed;

        circle.style.transform = `translate(${x}px,${y}px)`;

    });

});