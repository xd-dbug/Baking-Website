// ── Mobile nav toggle ────────────────────────────────────
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Mark active nav link ─────────────────────────────────
document.querySelectorAll('.nav__links a').forEach(link => {
  const linkPath = new URL(link.href).pathname;
  const currentPath = window.location.pathname;
  if (linkPath === currentPath ||
      (currentPath.endsWith('/') && linkPath.endsWith('/index.html'))) {
    link.classList.add('active');
  }
});
