document.querySelectorAll("[data-dropdown]").forEach(dropdown => {
    const button = dropdown.querySelector("[data-dropdown-button]");
    let dropdownOpened = false;

    button.addEventListener("mouseover", () => {
        if (window.innerWidth >= 636) {
            dropdown.classList.add("active");
        }
    });

    dropdown.addEventListener("mouseleave", () => {
        if (window.innerWidth >= 636) {
            dropdown.classList.remove("active");
        }
    });

    button.addEventListener("click", (event) => {
        if (window.innerWidth < 636) {
            event.preventDefault();

            if (!dropdownOpened) {
                dropdown.classList.add("active");
                dropdownOpened = true;
            } else {
                window.location.href = "/blogs/";
            }
        } else {
            window.location.href = "/blogs/";
        }
    });

    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target) && window.innerWidth < 636) {
            dropdown.classList.remove("active");
            dropdownOpened = false;
        }
    });
});
