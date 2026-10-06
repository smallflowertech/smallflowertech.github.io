(() => {
  const menu = document.querySelector('.mobile-menu');
  const btn = document.querySelector('.menu-btn');
  if (btn && menu) btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  const obs = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();
