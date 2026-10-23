let scrollInitialized = false;
let scrollbarInitialized = false;

let updateForecastButtons = null;
let updateHourlyScrollbar = null;

/**
 * Schedules a visual update once per animation frame.
 */
function createFrameUpdater(callback) {
  let frameId = null;

  return () => {
    if (frameId !== null) return;

    frameId = requestAnimationFrame(() => {
      frameId = null;
      callback();
    });
  };
}

/**
 * Initializes horizontal scrolling for the 5-day forecast.
 */
export function initScroll() {
  const wrapper = document.querySelector('.forecast-5days-wrapper');
  const list = document.querySelector('.forecast-5days');
  const btnLeft = document.querySelector('.forecast-button-left');
  const btnRight = document.querySelector('.forecast-button-right');

  if (!wrapper || !list || !btnLeft || !btnRight) return;

  if (scrollInitialized) {
    wrapper.scrollLeft = 0;
    updateForecastButtons?.();
    return;
  }

  scrollInitialized = true;

  function getScrollAmount() {
    const firstItem = list.querySelector('.forecast-item');

    if (!firstItem) return 0;

    const styles = getComputedStyle(list);
    const gap = parseFloat(styles.columnGap) || 0;

    return firstItem.getBoundingClientRect().width + gap;
  }

  function updateButtons() {
    const maxScroll = Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);

    const atStart = wrapper.scrollLeft <= 1;
    const atEnd = wrapper.scrollLeft >= maxScroll - 1;

    btnLeft.disabled = atStart;
    btnRight.disabled = atEnd;

    btnLeft.setAttribute('aria-disabled', String(atStart));
    btnRight.setAttribute('aria-disabled', String(atEnd));

    btnLeft.style.opacity = atStart ? '0.3' : '1';
    btnRight.style.opacity = atEnd ? '0.3' : '1';
  }

  updateForecastButtons = createFrameUpdater(updateButtons);

  btnRight.addEventListener('click', () => {
    const amount = getScrollAmount();

    if (!amount) return;

    wrapper.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  });

  btnLeft.addEventListener('click', () => {
    const amount = getScrollAmount();

    if (!amount) return;

    wrapper.scrollBy({
      left: -amount,
      behavior: 'smooth',
    });
  });

  wrapper.addEventListener('scroll', updateForecastButtons, {
    passive: true,
  });

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(updateForecastButtons);

    observer.observe(wrapper);
    observer.observe(list);
  } else {
    window.addEventListener('resize', updateForecastButtons);
  }

  wrapper.scrollLeft = 0;
  updateForecastButtons();
}

/**
 * Initializes the custom scrollbar for hourly forecasts.
 */
export function initCustomScrollbar() {
  const wrapper = document.querySelector('.forecast-hours-wrapper');
  const list = document.querySelector('.forecast-hours');
  const scrollBar = document.querySelector('.scroll-bar');
  const thumb = document.querySelector('.scroll-thumb');

  if (!wrapper || !list || !scrollBar || !thumb) return;

  if (scrollbarInitialized) {
    updateHourlyScrollbar?.();
    return;
  }

  scrollbarInitialized = true;

  function updateScrollbar() {
    const scrollWidth = wrapper.scrollWidth;
    const clientWidth = wrapper.clientWidth;
    const scrollLeft = wrapper.scrollLeft;

    if (!clientWidth || scrollWidth <= clientWidth + 1) {
      scrollBar.style.opacity = '0';
      thumb.style.width = '0px';
      thumb.style.left = '0px';
      return;
    }

    const barWidth = scrollBar.clientWidth;

    if (!barWidth) return;

    const maxScroll = scrollWidth - clientWidth;

    const thumbWidth = Math.min(
      barWidth,
      Math.max((clientWidth / scrollWidth) * barWidth, 30)
    );

    const progress = Math.min(1, Math.max(0, scrollLeft / maxScroll));

    const maxThumbTravel = barWidth - thumbWidth;
    const thumbLeft = progress * maxThumbTravel;

    scrollBar.style.opacity = '1';
    thumb.style.width = `${thumbWidth}px`;
    thumb.style.left = `${thumbLeft}px`;
  }

  updateHourlyScrollbar = createFrameUpdater(updateScrollbar);

  wrapper.addEventListener('scroll', updateHourlyScrollbar, {
    passive: true,
  });

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(updateHourlyScrollbar);

    observer.observe(wrapper);
    observer.observe(list);
    observer.observe(scrollBar);
  } else {
    window.addEventListener('resize', updateHourlyScrollbar);
  }

  updateHourlyScrollbar();
}

/**
 * Resets the hourly forecast scroll position.
 */
export function resetHourlyScroll() {
  const wrapper = document.querySelector('.forecast-hours-wrapper');

  if (!wrapper) return;

  wrapper.scrollLeft = 0;
  updateHourlyScrollbar?.();
}
