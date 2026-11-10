document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  const filters = document.querySelectorAll(".filter");
  const groups = document.querySelectorAll("[data-group]");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filters.forEach((f) => f.classList.toggle("active", f === button));
      groups.forEach((group) => {
        group.hidden = selected !== "all" && group.dataset.group !== selected;
      });
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
