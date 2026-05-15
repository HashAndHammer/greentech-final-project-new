const searchBar = document.getElementById("searchBar");
const products = document.querySelectorAll(".product-card");

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