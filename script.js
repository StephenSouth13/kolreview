document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");
    const header = document.querySelector(".header");
    const title = document.querySelector(".title");
    const slides = document.querySelectorAll(".slide");

    // Xử lý mở/đóng menu khi nhấp
    menuToggle.addEventListener("click", function (e) {
        menu.classList.toggle("active");
        header.classList.toggle("compact");
        title.classList.toggle("hidden");
        slides.forEach(slide => slide.classList.remove("active"));
        slides[0].classList.add("active");
        e.stopPropagation();
    });

    // Đóng menu khi nhấp ra ngoài
    document.addEventListener("click", function (event) {
        if (menu.classList.contains("active") && !menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.remove("active");
            header.classList.remove("compact");
            title.classList.remove("hidden");
        }
    });

    // Cuộn mượt mà khi nhấp vào các liên kết trong menu
    document.body.addEventListener("click", function (e) {
        const link = e.target.closest(".nav-menu a");
        if (link) {
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
                menu.classList.remove("active");
                header.classList.remove("compact");
                title.classList.remove("hidden");
                slides.forEach(slide => slide.classList.remove("active"));
                targetElement.closest(".slide").classList.add("active");
            }
        }
    });
});
