const searchBar = document.getElementById("searchBar");
const products = document.querySelectorAll(".product-card");

if (searchBar) {

    searchBar.addEventListener("input", function () {

        const value = searchBar.value.toLowerCase().trim();

        products.forEach(product => {

            const text = product.textContent.toLowerCase();

            if (text.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

}

const cards = document.querySelectorAll(".product-card");

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = "0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {

            formMessage.textContent = "Please complete all fields.";
            formMessage.style.color = "red";

        } else {

            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";

            contactForm.reset();

        }

    });

}