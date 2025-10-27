document.addEventListener('DOMContentLoaded', () => {
  const hamburger_btn = document.getElementById('hamburger_btn');
  const nav_items = document.querySelectorAll('.nav-item');

  hamburger_btn.addEventListener('click', () => {
    nav_items.forEach(item => {
      const isHidden = getComputedStyle(item).display === 'none';
      item.style.display = isHidden ? 'block' : 'none';
    });
  });
});
