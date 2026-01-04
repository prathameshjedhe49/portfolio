document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  // Toggle menu (mobile)
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Smooth scroll + close menu
  navItems.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }

        // Close menu after click (mobile)
        navLinks.classList.remove("active");
      }
    });
  });
});
