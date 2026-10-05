// Fade/rise anything with [data-reveal] as it scrolls into view.
const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];

if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  els.forEach((el) => el.classList.add('is-in'));
} else {
  // "polish" elements start fully clipped, which the browser treats as invisible,
  // so watch their parent and reveal the element itself.
  const targets = new Map<Element, HTMLElement[]>();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          targets.get(e.target)?.forEach((el) => el.classList.add('is-in'));
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => {
    const watch = el.dataset.reveal === 'polish' && el.parentElement ? el.parentElement : el;
    if (!targets.has(watch)) {
      targets.set(watch, []);
      io.observe(watch);
    }
    targets.get(watch)!.push(el);
  });
}
