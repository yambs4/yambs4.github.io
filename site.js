document.querySelectorAll('[data-menu]').forEach((button) => {
  button.addEventListener('click', () => {
    const links = document.querySelector('[data-nav]');
    links.classList.toggle('open');
    button.setAttribute('aria-expanded', links.classList.contains('open'));
  });
});
