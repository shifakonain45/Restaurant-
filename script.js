// Smooth search simulation
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#product");
    const button = document.querySelector("#searchBtn");

    button.addEventListener("click", () => {
        const searchValue = input.value.trim();

        if (searchValue === "") {
            alert("Please enter a product name to search!");
        } else {
            alert(`Searching for "${searchValue}" in our menu...`);
            // Scroll to the menu section
            document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
        }
    });
});