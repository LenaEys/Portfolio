// Projects page accordion: click a project title to reveal/hide its description.
document.querySelectorAll('[data-project]').forEach((card) => {
  const btn = card.querySelector('.project-title-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isOpen = card.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
});
