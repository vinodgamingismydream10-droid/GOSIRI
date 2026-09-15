document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAVBAR ================= */

    const navbar = document.querySelector(".organic-navbar");

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* ================= MOBILE MENU ================= */

    const menuButton = document.getElementById("organicMenuButton");
    const mobileMenu = document.getElementById("organicMobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
        });

        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
            });

        });
    }


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ================= YEAR ================= */

    const year = document.getElementById("organicYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});