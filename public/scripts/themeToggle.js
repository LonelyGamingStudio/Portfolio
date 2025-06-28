function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');

  // Zapobiegaj wielokrotnemu bindowaniu
  if (themeToggle.dataset.bound) return;
  themeToggle.dataset.bound = 'true';

  const animation = window.lottie.loadAnimation({
    container: themeToggle,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/theme-toggle.json',
  });

  let isDark = localStorage.getItem('theme') === 'dark';

  animation.addEventListener('DOMLoaded', () => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      animation.goToAndStop(139, true); // Księżyc
    } else {
      document.documentElement.classList.remove('dark');
      animation.goToAndStop(55, true); // Słońce
    }
  });

  themeToggle.addEventListener('click', () => {
    if (isDark) {
      animation.playSegments([0, 70], true);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      animation.playSegments([70, 139], true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }

    isDark = !isDark;
  });
}

// Automatycznie uruchom, jeśli istnieje przycisk lub go utwórz
window.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('theme-toggle')) {
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.className = 'fixed top-4 right-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 z-50 cursor-pointer bg-transparent rounded-full';
    document.body.appendChild(button);
  }

  setupThemeToggle();
});
