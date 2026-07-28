/*
==========================================================
NAVIGATION.JS
Universitas Handayani Makassar
Premium Version
==========================================================
*/

// ======================================
// ELEMENT
// ======================================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// ======================================
// STICKY NAVBAR
// ======================================

function navbarScroll() {

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

}

window.addEventListener("scroll", navbarScroll);

// ======================================
// ACTIVE MENU
// ======================================

const sections = document.querySelectorAll("section[id]");

function activeMenu() {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (

            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeMenu);

// ======================================
// SMOOTH SCROLL
// ======================================

navLinks.forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const id = this.getAttribute("href");

        const target = document.querySelector(id);

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 90,

            behavior: "smooth"

        });

        if (navMenu) {

            navMenu.classList.remove("show");

        }

    });

});

// ======================================
// MOBILE MENU
// ======================================

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        menuButton.classList.toggle("active");

    });

}

// ======================================
// CLOSE MENU WHEN CLICK OUTSIDE
// ======================================

document.addEventListener("click", (e) => {

    if (!navMenu || !menuButton) return;

    if (

        !navMenu.contains(e.target) &&
        !menuButton.contains(e.target)

    ) {

        navMenu.classList.remove("show");

        menuButton.classList.remove("active");

    }

});

// ======================================
// CHANGE NAVBAR HEIGHT
// ======================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 120) {

        navbar.style.padding = "12px 0";

    } else {

        navbar.style.padding = "22px 0";

    }

});

// ======================================
// SCROLL PROGRESS
// ======================================

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scroll =

        document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});

// ======================================
// HIDE NAVBAR WHEN SCROLL DOWN
// ======================================

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const current = window.pageYOffset;

    if (current > lastScroll && current > 250) {

        navbar.style.transform = "translateY(-100%)";

    } else {

        navbar.style.transform = "translateY(0)";

    }

    lastScroll = current;

});

// ======================================
// INIT
// ======================================

navbarScroll();

activeMenu();