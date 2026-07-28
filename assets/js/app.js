/*
==========================================================
APP.JS
Universitas Handayani Makassar
Premium Version
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("========================================");

    console.log("Universitas Handayani Makassar");

    console.log("Premium Frontend Version");

    console.log("========================================");

});

/*
==========================================================
LAZY LOADING IMAGE
==========================================================
*/

const lazyImages = document.querySelectorAll("img[data-src]");

if (lazyImages.length) {

    const imageObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const image = entry.target;

            image.src = image.dataset.src;

            image.removeAttribute("data-src");

            observer.unobserve(image);

        });

    });

    lazyImages.forEach(img => {

        imageObserver.observe(img);

    });

}

/*
==========================================================
PREVENT EMPTY LINK
==========================================================
*/

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

    });

});

/*
==========================================================
SMOOTH PAGE LOAD
==========================================================
*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*
==========================================================
AUTO YEAR FOOTER
==========================================================
*/

const year = document.querySelector("#currentYear");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*
==========================================================
CONSOLE MESSAGE
==========================================================
*/

console.log("%cUniversitas Handayani Makassar", "color:#38BDF8;font-size:18px;font-weight:bold;");

console.log("%cPremium Frontend Website", "color:white;font-size:14px;");