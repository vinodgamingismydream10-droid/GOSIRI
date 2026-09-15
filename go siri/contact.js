document.addEventListener("DOMContentLoaded", function () {

    /* NAVBAR */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* MOBILE MENU */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("open");

    });


    mobileMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

        });

    });


    /* CONTACT FORM */

    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        message.textContent =
            "Thank you! Your message has been received.";

        form.reset();

    });


    /* YEAR */

    document.getElementById("year").textContent =
        new Date().getFullYear();

});