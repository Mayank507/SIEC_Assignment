const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        navItems.forEach((items) => {
            items.classList.remove("active");
        })
        event.currentTarget.classList.add("active");
    })
})