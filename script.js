document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", e => {
    if (e.target.closest("a")) return;
    card.classList.toggle("open");
  });
});

const navLinks = document.querySelectorAll(".nav nav a");
const sections = [...document.querySelectorAll("main section[id]")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle(
        "active", link.getAttribute("href") === "#" + entry.target.id
      ));
    }
  });
}, {rootMargin:"-40% 0px -50% 0px"});
sections.forEach(section => observer.observe(section));
