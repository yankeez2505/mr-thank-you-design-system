/* Drop 01 lookbook. The progress bar is the clock: when its CSS animation ends,
   the next look comes up. No timers, so hover and the pause button work for free. */
(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const looks = [...hero.querySelectorAll('.look')];
  const frames = [...hero.querySelectorAll('.frame')];
  const tabs = [...hero.querySelectorAll('.thumb')];
  const count = hero.querySelector('.hero__count b');
  const toggle = hero.querySelector('.hero__toggle');
  let current = 0;

  function show(next) {
    if (next === current) return;
    looks[current].classList.remove('is-active');
    looks[current].setAttribute('aria-hidden', 'true');
    frames[current].classList.remove('is-active');
    tabs[current].classList.remove('is-active');
    tabs[current].setAttribute('aria-selected', 'false');
    tabs[current].tabIndex = -1;

    current = (next + looks.length) % looks.length;

    looks[current].classList.add('is-active');
    looks[current].removeAttribute('aria-hidden');
    frames[current].classList.add('is-active');
    tabs[current].classList.add('is-active');
    tabs[current].setAttribute('aria-selected', 'true');
    tabs[current].tabIndex = 0;
    count.textContent = String(current + 1).padStart(2, '0');
  }

  hero.addEventListener('animationend', e => {
    if (e.animationName === 'fill') show(current + 1);
  });

  tabs.forEach((tab, i) => tab.addEventListener('click', () => show(i)));

  hero.querySelector('.thumbs').addEventListener('keydown', e => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    show(current + step);
    tabs[current].focus();
  });

  hero.addEventListener('pointerenter', () => hero.classList.add('is-paused'));
  hero.addEventListener('pointerleave', () => { if (toggle.getAttribute('aria-pressed') === 'false') hero.classList.remove('is-paused'); });
  hero.addEventListener('focusin', () => hero.classList.add('is-paused'));

  toggle.addEventListener('click', () => {
    const paused = toggle.getAttribute('aria-pressed') === 'true';
    toggle.setAttribute('aria-pressed', String(!paused));
    toggle.setAttribute('aria-label', paused ? 'Pause the lookbook' : 'Play the lookbook');
    hero.classList.toggle('is-paused', !paused);
  });

  let startX = 0;
  const stage = hero.querySelector('.hero__frames');
  stage.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 45) show(current + (dx < 0 ? 1 : -1));
  }, { passive: true });
})();
