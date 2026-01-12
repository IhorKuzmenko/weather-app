let scrollInitialized = false; //A flag that prevents initScroll() from being run twice and the same event handlers from being attached to buttons.

/**
 * Initializes horizontal scrolling for the 5-day forecast list
 * with left and right buttons.
 *
 * Buttons will be disabled (opacity 0.3) when scrolling is at the start or end.
 */

export function initScroll() {
  const wrapper = document.querySelector('.forecast-5days-wrapper');
  const list = document.querySelector('.forecast-5days');
  const btnLeft = document.querySelector('.forecast-button-left');
  const btnRight = document.querySelector('.forecast-button-right');

  if (!wrapper || !list || !btnLeft || !btnRight) return;
  if (scrollInitialized) return;

  scrollInitialized = true;

  /** Calculate the element's width and scroll step */

  const itemWidth = list.querySelector('.forecast-item')?.offsetWidth || 0;
  const gap = parseInt(getComputedStyle(list).gap) || 0; //getComputedStyle(list) – Gets all the CSS styles of the list element as an object.
  const scrollAmount = itemWidth + gap; //Summarizes the width of an element + the space between elements.

  /**When the right arrow key is clicked, the wrapper container scrolls by scrollAmount pixels.
   * behavior: 'smooth' makes scrolling smooth. */

  btnRight.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  /**When the left arrow key is clicked, the wrapper container scrolls by scrollAmount pixels.
   * behavior: 'smooth' makes scrolling smooth. */

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

let scrollbarInitialized = false; //A flag that prevents initCustomScrollbar() from being run twice and the same event handlers from being attached to buttons.

/**
 * Initializes a custom horizontal scrollbar for the hourly forecast list.
 *
 * Updates the scrollbar thumb position and width based on scroll progress
 * and hides the scrollbar if the content fits the wrapper.
 */

export function initCustomScrollbar() {
  const wrapper = document.querySelector('.forecast-hours-wrapper');
  const list = document.querySelector('.forecast-hours');
  const scrollBar = document.querySelector('.scroll-bar');
  const thumb = document.querySelector('.scroll-thumb');

  if (!wrapper || !list || !scrollBar || !thumb) return;
  if (scrollbarInitialized) return;
  scrollbarInitialized = true;

  function updateScrollbar() {
    const scrollWidth = list.scrollWidth; //The full width of all list items, including the invisible part.
    const clientWidth = wrapper.clientWidth; //The width of the visible area (wrapper).
    const scrollLeft = wrapper.scrollLeft; //Current horizontal scroll offset.

    /**Hide the scrollbar if the list fits */

    if (scrollWidth <= clientWidth + 10) {
      scrollBar.style.opacity = '0';
      thumb.style.width = '0';
      return;
    }

    scrollBar.style.opacity = '1';

    /**Calculating the width and position of a slider */

    const barWidth = scrollBar.offsetWidth; //Scroll bar width (in pixels).
    const thumbWidth = Math.max((clientWidth / scrollWidth) * barWidth, 30); //The width of the slider. Calculated proportionally to the visible area
    const maxScroll = scrollWidth - clientWidth; //Maximum list offset (how far you can scroll to the right).
    const progress = maxScroll === 0 ? 0 : scrollLeft / maxScroll; //Scroll percentage (0 to 1).
    const maxThumbTravel = barWidth - thumbWidth; //The maximum distance the slider can move.
    const thumbLeft = progress * maxThumbTravel; //The position of the slider depending on the current scroll.

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.left = `${thumbLeft}px`;
  }

  wrapper.addEventListener('scroll', updateScrollbar); //When scrolling the list, we update the slider position.
  window.addEventListener('resize', updateScrollbar); //When changing the window size (resize), we recalculate the width of the slider so that everything remains proportional.

  updateScrollbar();
}
