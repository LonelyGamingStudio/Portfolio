document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('custom-cursor');
  let cursorActivated = false;

  document.addEventListener('mousemove', (e) => {
    // 🔓 Pierwszy ruch myszy – pokaż kursor
    if (!cursorActivated) {
      cursor.style.display = 'block';      // ← pokazuje
      cursor.style.opacity = '1';          // ← płynnie
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
