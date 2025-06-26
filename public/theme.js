document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const button = document.getElementById("toggle-theme");
  const stored = localStorage.getItem("theme");
  if (stored === "dark") html.dataset.theme = "dark";

  button.addEventListener("click", () => {
    const current = html.dataset.theme;
    const next = current === "light" ? "dark" : "light";
    html.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
});
