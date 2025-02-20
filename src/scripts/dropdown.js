document.querySelectorAll("[data-dropdown]").forEach(dropdown => {
    const button = dropdown.querySelector("[data-dropdown-button]");

    button.addEventListener("mouseover", () => {
        dropdown.classList.add("active");
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.remove("active");
    });

    button.addEventListener("click", (event) => {
        window.location.href = "/blogs/";
    });
});