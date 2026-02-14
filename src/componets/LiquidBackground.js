"use client";
import { useEffect, useRef } from "react";

export default function LiquidBackground() {
  const refs = Array.from({ length: 7 }, () => useRef(null));

  useEffect(() => {
    const BASE_SPEED = 140;
    const FADE = 0.20;
    const PAD = 340;

    const smooth = (a,b,x)=>{
      const t=Math.max(0,Math.min(1,(x-a)/(b-a)));
      return t*t*(3-2*t);
    };

    const items = refs.map((r,i)=>({
      el:r.current,
      offset:i*0.12,
      amp:18+Math.random()*20,
      ph:Math.random()*Math.PI*2
    }));

    let raf;
    const start = performance.now();

    const tick = now=>{
      const w=window.innerWidth;
      const h=window.innerHeight;

      const sx=w*0.55+PAD, sy=-h*0.35-PAD;
      const ex=-w*0.55-PAD, ey=h*0.65+PAD;

      const dx=ex-sx, dy=ey-sy;
      const dist=Math.hypot(dx,dy);

      for(const it of items){
        const el=it.el;
        if(!el) continue;

        const dur=(dist/BASE_SPEED)*1000;
        let p=((now-start)/dur+it.offset)%1;

        const fi=smooth(0,FADE,p);
        const fo=1-smooth(1-FADE,1,p);
        const op=fi*fo;

        let x=sx+dx*p;
        let y=sy+dy*p;

        const drift=Math.sin(now*0.00025+it.ph)*it.amp;
        x+=drift;
        y+=drift*0.4;

        const sc=1.03+Math.sin(now*0.0002+it.ph)*0.01;

        el.style.setProperty("--dx",`${x}px`);
        el.style.setProperty("--dy",`${y}px`);
        el.style.setProperty("--sc",sc);
        el.style.setProperty("--op",op);
      }

      raf=requestAnimationFrame(tick);
    };

    raf=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="bg">
      {refs.map((r,i)=>(
        <div key={i} ref={r} className={`ellipse e${i+1}`} />
      ))}
      <div className="bg-vignette"/>
    </div>
  );
}
