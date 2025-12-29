export function initScroll() {
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

export function initCustomScrollbar() {
  const wrapper = document.querySelector('.forecast-hours-wrapper');
  const list = document.querySelector('.forecast-hours');
  const scrollBar = document.querySelector('.scroll-bar');
  const thumb = document.querySelector('.scroll-thumb');

  if (!wrapper || !list || !scrollBar || !thumb) return;

  function updateScrollbar() {
    const scrollWidth = list.scrollWidth;
    const clientWidth = wrapper.clientWidth;
    const scrollLeft = wrapper.scrollLeft;

    if (scrollWidth <= clientWidth + 10) {
      scrollBar.style.opacity = '0';
      thumb.style.width = '0';
      return;
    }

    scrollBar.style.opacity = '1';

    const barWidth = scrollBar.offsetWidth;
    const thumbWidth = Math.max((clientWidth / scrollWidth) * barWidth, 30);
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll === 0 ? 0 : scrollLeft / maxScroll;
    const maxThumbTravel = barWidth - thumbWidth;
    const thumbLeft = progress * maxThumbTravel;

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.left = `${thumbLeft}px`;
  }

  wrapper.addEventListener('scroll', updateScrollbar);
  window.addEventListener('resize', updateScrollbar);

  updateScrollbar();
}
