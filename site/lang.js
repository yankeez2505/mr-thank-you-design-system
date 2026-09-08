/* Language switcher. A listbox rather than a <select>, so the menu can carry
   endonyms at the shop's own type scale. Picking one marks the choice and
   nothing more: the store is written in one language, so this must not
   pretend to translate the page. */
(() => {
  document.querySelectorAll('.lang').forEach(setup);

  function setup(root) {
    const btn = root.querySelector('.lang__btn');
    const list = root.querySelector('.lang__menu');
    const code = btn.querySelector('.lang__code');
    const opts = [...list.querySelectorAll('[role="option"]')];

    function open(on) {
      btn.setAttribute('aria-expanded', String(on));
      list.hidden = !on;
      if (on) focus(opts.findIndex(o => o.getAttribute('aria-selected') === 'true'));
    }

    function focus(i) {
      opts[(i + opts.length) % opts.length].focus();
    }

    function pick(opt) {
      opts.forEach(o => o.setAttribute('aria-selected', String(o === opt)));
      code.textContent = opt.dataset.code;
      btn.setAttribute('aria-label', `Language: ${opt.querySelector('span').textContent}`);
      open(false);
      btn.focus();
    }

    btn.addEventListener('click', () => open(btn.getAttribute('aria-expanded') !== 'true'));
    opts.forEach(o => o.addEventListener('click', () => pick(o)));

    list.addEventListener('keydown', e => {
      const i = opts.indexOf(document.activeElement);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        focus(i + (e.key === 'ArrowDown' ? 1 : -1));
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        pick(opts[i]);
      } else if (e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        focus(e.key === 'Home' ? 0 : opts.length - 1);
      }
    });

    root.addEventListener('keydown', e => {
      if (e.key !== 'Escape' || list.hidden) return;
      open(false);
      btn.focus();
    });

    document.addEventListener('pointerdown', e => {
      if (!root.contains(e.target)) open(false);
    });
  }
})();
