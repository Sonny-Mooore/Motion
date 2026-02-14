"use client";
import { useEffect, useRef } from "react";

export default function LiquidBackground() {
  const COUNT = 2;       // еще меньше слоёв
  const TARGET_FPS = 24; // еще меньше кадров (для blur это почти незаметно)

  const elsRef = useRef([]);

  useEffect(() => {
    const BASE_SPEED = 140;
    const FADE = 0.2;
    const PAD = 340;

    const FRAME_MS = 1000 / TARGET_FPS;
    let last = performance.now();

    const smooth = (a, b, x) => {
      const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };

    // reduced motion: вообще не запускаем анимацию
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    // кэш размеров + путь пересчитываем только на resize
    const path = { sx: 0, sy: 0, dx: 0, dy: 0, dur: 1 };

    const recompute = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const sx = w * 0.55 + PAD,
        sy = -h * 0.35 - PAD;
      const ex = -w * 0.55 - PAD,
        ey = h * 0.65 + PAD;

      const dx = ex - sx,
        dy = ey - sy;
      const dist = Math.hypot(dx, dy);

      path.sx = sx;
      path.sy = sy;
      path.dx = dx;
      path.dy = dy;
      path.dur = (dist / BASE_SPEED) * 1000;
    };

    recompute();
    window.addEventListener("resize", recompute, { passive: true });

    // берём только COUNT элементов
    const items = elsRef.current.slice(0, COUNT).map((el, i) => ({
      el,
      offset: i * 0.18,
      amp: 14 + Math.random() * 16,
      ph: Math.random() * Math.PI * 2,
      // кэш значений, чтобы меньше писать в DOM
      pdx: NaN,
      pdy: NaN,
      psc: NaN,
      pop: NaN,
    }));

    let raf = 0;
    const start = performance.now();

    const tick = (now) => {
      // пауза на скрытой вкладке
      if (document.hidden) {
        last = now;
        raf = requestAnimationFrame(tick);
        return;
      }

      // ограничение FPS
      if (now - last < FRAME_MS) {
        raf = requestAnimationFrame(tick);
        return;
      }
      last = now;

      const { sx, sy, dx, dy, dur } = path;

      for (const it of items) {
        const el = it.el;
        if (!el) continue;

        let p = ((now - start) / dur + it.offset) % 1;

        const fi = smooth(0, FADE, p);
        const fo = 1 - smooth(1 - FADE, 1, p);
        const op = fi * fo;

        let x = sx + dx * p;
        let y = sy + dy * p;

        const drift = Math.sin(now * 0.00025 + it.ph) * it.amp;
        x += drift;
        y += drift * 0.4;

        const sc = 1.03 + Math.sin(now * 0.0002 + it.ph) * 0.01;

        // округление = меньше апдейтов, меньше дрожи
        const rx = Math.round(x * 2) / 2;         // шаг 0.5px
        const ry = Math.round(y * 2) / 2;
        const rsc = Math.round(sc * 1000) / 1000;
        const rop = Math.round(op * 1000) / 1000;

        if (rx !== it.pdx) { el.style.setProperty("--dx", `${rx}px`); it.pdx = rx; }
        if (ry !== it.pdy) { el.style.setProperty("--dy", `${ry}px`); it.pdy = ry; }
        if (rsc !== it.psc) { el.style.setProperty("--sc", rsc); it.psc = rsc; }
        if (rop !== it.pop) { el.style.setProperty("--op", rop); it.pop = rop; }
      }

      raf = requestAnimationFrame(tick);
    };

    // “мягкий старт” — первые 400мс вообще не гоним FPS
    // (убирает самый частый фриз при прогреве blur/слоёв)
    const warmStart = performance.now();
    const warmTick = (now) => {
      if (now - warmStart > 400) {
        raf = requestAnimationFrame(tick);
        return;
      }
      raf = requestAnimationFrame(warmTick);
    };
    raf = requestAnimationFrame(warmTick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", recompute);
    };
  }, []);

  return (
    <div className="bg">
      {Array.from({ length: COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(node) => {
            elsRef.current[i] = node;
          }}
          className={`ellipse e${i + 1}`}
        />
      ))}
      <div className="bg-vignette" />
    </div>
  );
}
