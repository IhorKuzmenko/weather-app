export default function initScroll() {
  const wrapper = document.querySelector('.forecast-5days-wrapper');
  const list = document.querySelector('.forecast-5days');
  const btnLeft = document.querySelector('.forecast-button-left');
  const btnRight = document.querySelector('.forecast-button-right');

  if (!wrapper || !list || !btnLeft || !btnRight) return;

  const itemWidth = list.querySelector('.forecast-item')?.offsetWidth || 0;
  const gap = parseInt(getComputedStyle(list).gap) || 0;
  const scrollAmount = itemWidth + gap;

  btnRight.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  btnLeft.addEventListener('click', () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  function toggleButtons() {
    btnLeft.style.opacity = wrapper.scrollLeft > 0 ? '1' : '0.3';
    btnRight.style.opacity =
      wrapper.scrollLeft + wrapper.clientWidth >= list.scrollWidth
        ? '0.3'
        : '1';
  }

  wrapper.addEventListener('scroll', toggleButtons);
  toggleButtons();

  wrapper.scrollLeft = 0;
}
