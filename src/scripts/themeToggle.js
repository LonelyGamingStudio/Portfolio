import lottie from 'lottie-web';

export function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');

  const animation = lottie.loadAnimation({
    container: themeToggle,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/theme-toggle.json',
  });

  // Motyw startowy: light (jasny)
  let isDark = localStorage.getItem('theme') === 'light';

  // Animacja gotowa
  animation.addEventListener('DOMLoaded', () => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      animation.goToAndStop(139, true); // Księżyc
    } else {
      document.documentElement.classList.remove('dark');
      animation.goToAndStop(55, true); // Słońce (ustawiona klatka startowa)
    }
  });

  themeToggle.addEventListener('click', () => {
    if (isDark) {
      // Ciemny ➝ Jasny (0–70)
      animation.playSegments([0, 70], true);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Jasny ➝ Ciemny (70–139)
      animation.playSegments([70, 139], true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }

    isDark = !isDark;
  });
}
