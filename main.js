// ── Mobile nav toggle ────────────────────────────────────
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── Mark active nav link ─────────────────────────────────
document.querySelectorAll('.nav__links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
