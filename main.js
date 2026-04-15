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

// ── FAQ accordion ────────────────────────────────────────
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq__item');
    const isOpen = item.classList.contains('open');

    // Close all open items
    document.querySelectorAll('.faq__item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
    });

    // Open clicked item if it was closed
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
