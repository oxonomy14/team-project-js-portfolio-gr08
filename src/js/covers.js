document.addEventListener('DOMContentLoaded', function () {
  const coverSection = document.querySelector('.cover-wrapper');
  const coverImages = document.querySelectorAll('.cover-img');

  if (!coverSection) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting > 0.4) {
          coverImages.forEach(image => image.classList.add('in-view'));
        } else {
          coverImages.forEach(image => image.classList.remove('in-view'));
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(coverSection);
});
