document.addEventListener("DOMContentLoaded", () => {

    console.log("JS ACTIVE");

    // =========================
    // PRODUCT SEARCH
    // =========================
    const searchBar = document.getElementById("searchBar");
    const products = document.querySelectorAll(".product-card");

    if (searchBar && products.length > 0) {

        searchBar.addEventListener("input", () => {

            const value = searchBar.value.toLowerCase().trim();

            products.forEach(product => {

                const text = product.textContent.toLowerCase();

                product.style.display = text.includes(value) ? "block" : "none";

            });

        });

    }

    // =========================
    // PRODUCT ANIMATION
    // =========================
    const cards = document.querySelectorAll(".product-card");

    if (cards.length > 0) {

        cards.forEach((card, index) => {

            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";

            setTimeout(() => {

                card.style.transition = "0.5s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }, index * 150);

        });

    }

    // =========================
    // CONTACT FORM
    // =========================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");
            const formMessage = document.getElementById("formMessage");

            // safety check (IMPORTANT)
            if (!name || !email || !message || !formMessage) {
                console.log("Missing form elements");
                return;
            }

            if (!name.value || !email.value || !message.value) {

                formMessage.textContent = "Please complete all fields.";
                formMessage.style.backgroundColor = "red";
                formMessage.style.color = "white";

            } else {

                formMessage.textContent = "Message sent successfully!";
                formMessage.style.backgroundColor = "green";
                formMessage.style.color = "white";

                contactForm.reset();
            }

        });

    }

});