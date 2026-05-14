const searchBar = document.getElementById("searchBar");
const products = document.querySelectorAll(".product-card");

searchBar.addEventListener("keyup", function () {
    let value = searchBar.value.toLowerCase();

    products.forEach(function (product) {
        let text = product.textContent.toLowerCase();

        if (text.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});