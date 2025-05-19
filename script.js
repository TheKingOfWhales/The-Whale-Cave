window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;

  // Increase darkness as you scroll down
  const darkness = Math.min(scrollFraction * 2, 1); // 0 to 1

  document.querySelector('.darken-overlay').style.opacity = darkness;
});