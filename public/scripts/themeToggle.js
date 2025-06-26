export function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');

  const animation = lottie.loadAnimation({
    container: themeToggle,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/theme-toggle.json',
  });

  let isDark = localStorage.getItem('theme') === 'light';

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
