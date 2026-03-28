// Theme toggle — persists across pages via localStorage
(function() {
  const DARK = 'dark';
  const stored = localStorage.getItem('theme');
  if (stored === DARK) document.documentElement.classList.add(DARK);

  function setBtn(isDark) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = isDark ? '☀ LIGHT' : '☾ DARK';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  window.addEventListener('DOMContentLoaded', function() {
    setBtn(document.documentElement.classList.contains(DARK));

    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle(DARK);
        localStorage.setItem('theme', isDark ? DARK : 'light');
        setBtn(isDark);
      });
    }

    // Hamburger menu
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks  = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
      });
      // Close menu when a link is clicked
      navLinks.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', function() {
          hamburger.classList.remove('open');
          navLinks.classList.remove('open');
        });
      });
    }
  });
})();
