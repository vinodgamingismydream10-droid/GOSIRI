/* =====================================================
   PURE NATURE — HOME PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= LOADER ================= */

    const loader = document.getElementById("loader");

    function hideLoader() {

        if (!loader) return;

        loader.classList.add("hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 900);
    }

    window.addEventListener("load", () => {
        setTimeout(hideLoader, 500);
    });

    // Safety fallback so the page never gets stuck
    setTimeout(hideLoader, 3000);


    /* ================= NAVBAR ================= */

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* ================= MOBILE MENU ================= */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");
            document.body.classList.toggle("menu-open");

        });


        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");
                document.body.classList.remove("menu-open");

            });

        });

    }


    /* ================= REVEAL ================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* ================= IMAGE PARALLAX ================= */

    const parallaxImages =
        document.querySelectorAll(
            ".cinematic-bg, .middle-cta-bg, .final-bg"
        );


    function parallax() {

        if (window.innerWidth <= 650) return;

        const viewport = window.innerHeight;

        parallaxImages.forEach(image => {

            const parent = image.parentElement;

            if (!parent) return;

            const rect =
                parent.getBoundingClientRect();

            if (
                rect.top < viewport &&
                rect.bottom > 0
            ) {

                const center =
                    rect.top + rect.height / 2;

                const movement =
                    (viewport / 2 - center) * 0.035;

                image.style.transform =
                    `translateY(${movement}px) scale(1.04)`;

            }

        });

    }

    window.addEventListener(
        "scroll",
        parallax,
        { passive: true }
    );

    parallax();


    /* ================= PRODUCT HOVER ================= */

    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(card => {

        const image =
            card.querySelector(".product-image img");

        if (!image) return;


        card.addEventListener("mousemove", event => {

            if (window.innerWidth <= 800) return;

            const rect =
                card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            image.style.transform =
                `scale(1.06) translate(${x * 8}px, ${y * 8}px)`;

        });


        card.addEventListener("mouseleave", () => {

            image.style.transform =
                "scale(1) translate(0,0)";

        });

    });


    /* ================= PAGE TRANSITIONS ================= */

    const internalLinks =
        document.querySelectorAll(
            'a[href$=".html"], a[href="index.html"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const href =
                link.getAttribute("href");

            if (!href) return;

            if (
                href.startsWith("#") ||
                link.target === "_blank"
            ) {
                return;
            }

            const currentPage =
                window.location.pathname
                    .split("/")
                    .pop() || "index.html";

            if (href === currentPage) {
                return;
            }

            event.preventDefault();

            document.body.classList.add(
                "page-leaving"
            );

            setTimeout(() => {

                window.location.href = href;

            }, 300);

        });

    });


    /* ================= ESCAPE KEY ================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (mobileMenu) {
                mobileMenu.classList.remove("open");
            }

            document.body.classList.remove(
                "menu-open"
            );

        }

    });


    /* ================= YEAR ================= */

    const year =
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* ================= PAGE READY ================= */

    requestAnimationFrame(() => {
        document.body.classList.add("page-ready");
    });

});