document.addEventListener('DOMContentLoaded', () => {
  // Sprawdź, czy urządzenie obsługuje hover (czyli myszy)
  if (window.matchMedia('(hover: none)').matches) {
    // Urządzenie dotykowe - nie uruchamiaj niestandardowego kursora
    return;
  }

  const cursor = document.getElementById('custom-cursor');
  let cursorActivated = false;

  document.addEventListener('mousemove', (e) => {
    if (!cursorActivated) {
      cursor.style.display = 'block';
      cursor.style.opacity = '1';
      cursorActivated = true;
    }

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mousedown', () => {
    cursor.classList.add('shoot');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('shoot');
  });

  document.querySelectorAll('a, button, input, textarea, .clickable').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
});
