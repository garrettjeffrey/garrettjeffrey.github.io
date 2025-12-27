const toggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleBtn.textContent = theme === 'dark' ? '☾' : '☼';
}

function getPreferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

(function initTheme() {
  setTheme(getPreferredTheme());

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (event) => {
    const stored = localStorage.getItem('theme');
    if (!stored) {
      setTheme(event.matches ? 'dark' : 'light');
    }
  });
})();

toggleBtn.addEventListener('click', () => {
  setTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

document.getElementById('year').textContent = new Date().getFullYear();
