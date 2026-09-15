document.addEventListener("DOMContentLoaded", () => {


    /* ================= NAVBAR ================= */

    const navbar =
        document.querySelector(".products-navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* ================= MOBILE MENU ================= */

    const menuButton =
        document.getElementById("productsMenuButton");

    const mobileMenu =
        document.getElementById("productsMobileMenu");

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


    /* ================= FILTERS ================= */

    const filters =
        document.querySelectorAll(".filter");

    const products =
        document.querySelectorAll(".product-card");


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            filters.forEach(item => {

                item.classList.remove("active");

            });

            filter.classList.add("active");


            const selected =
                filter.dataset.filter;


            products.forEach(product => {

                const category =
                    product.dataset.category;


                if (
                    selected === "all" ||
                    category === selected
                ) {

                    product.classList.remove("hidden");

                } else {

                    product.classList.add("hidden");

                }

            });

        });

    });


    /* ================= PRODUCT MODAL ================= */

    const modal =
        document.getElementById("productModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalImage =
        document.getElementById("modalImage");


    const viewButtons =
        document.querySelectorAll(".view-product");


    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const name =
                button.dataset.name;

            const description =
                button.dataset.description;

            const image =
                button.dataset.image;


            modalTitle.textContent =
                name;

            modalDescription.textContent =
                description;

            modalImage.style.backgroundImage =
                `url("${image}")`;


            modal.classList.add("open");

            document.body.style.overflow =
                "hidden";

        });

    });


    function closeModal() {

        modal.classList.remove("open");

        document.body.style.overflow =
            "";

    }


    modalClose.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener("click", event => {

        if (event.target === modal) {

            closeModal();

        }

    });


    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {

            closeModal();

        }

    });


    /* ================= YEAR ================= */

    const year =
        document.getElementById("productYear");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});