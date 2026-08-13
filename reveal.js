(() => {
  if (window.__relaxReveal) return;
  window.__relaxReveal = true;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const EASE = 'cubic-bezier(0.2,0,0,1)';

  const FRAMES = {
    section: [{ opacity: 0, transform: 'translateY(30px)' }, { opacity: 1, transform: 'none' }],
    head: [{ clipPath: 'inset(0 0 105% 0)', transform: 'translateY(22px)' }, { clipPath: 'inset(0 0 -25% 0)', transform: 'none' }],
    fade: [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }]
  };
  const DUR = { section: 900, head: 1000, fade: 800 };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      if (e.target.__anim) e.target.__anim.play();
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

  function prep(el, kind, delay) {
    if (el.__rev) return;
    el.__rev = 1;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    const a = el.animate(FRAMES[kind], { duration: DUR[kind], delay: delay || 0, easing: EASE, fill: 'both' });
    a.pause();
    a.currentTime = 0;
    el.__anim = a;
    io.observe(el);
  }

  function scan() {
    const main = document.querySelector('main');
    if (!main) return;
    [...main.children].filter((n) => n.tagName === 'SECTION').forEach((s, i) => {
      if (i === 0) return;
      prep(s, 'section', 0);
      s.querySelectorAll('h2').forEach((n) => prep(n, 'head', 150));
      s.querySelectorAll('h3, figure, article, li, form, details').forEach((n, j) => prep(n, 'fade', 200 + Math.min(j, 6) * 80));
    });
  }

  const start = () => {
    scan();
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
