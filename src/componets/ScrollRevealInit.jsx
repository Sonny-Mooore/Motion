import { useEffect } from 'react';

const SELECTOR =
  'main.main-wrap > .content > section, main.main-wrap > .footer';

/**
 * Включает плавное появление секций при прокрутке.
 * Стили: src/styles/partials/scroll-reveal.css
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = document.querySelectorAll(SELECTOR);
    const header = document.querySelector('main.main-wrap > .header');
    if (!header && sections.length === 0) return;

    let cancelled = false;
    let observer;
    let raf2;

    const run = () => {
      if (cancelled) return;

      document.documentElement.classList.add('scroll-reveal-js');

      // Даем браузеру один кадр применить "скрытое" состояние,
      // чтобы CSS-переходы гарантированно стартовали.
      raf2 = requestAnimationFrame(() => {
        if (cancelled) return;

        const elements = [];
        if (header) elements.push(header);

        sections.forEach((el) => elements.push(el));

        sections.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const inView =
            rect.top < window.innerHeight * 0.92 && rect.bottom > 48;
          if (inView) el.classList.add('scroll-reveal--visible');
        });

        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal--visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { root: null, rootMargin: '0px 0px -7% 0px', threshold: 0.07 }
        );

        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const inView =
            rect.top < window.innerHeight * 0.92 && rect.bottom > 48;
          if (inView) el.classList.add('scroll-reveal--visible');
          if (!el.classList.contains('scroll-reveal--visible')) observer.observe(el);
        });
      });

    };

    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      document.documentElement.classList.remove('scroll-reveal-js');
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
