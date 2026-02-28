import Header from '@/componets/Header/Header';
import React, { useState } from 'react';
import Device from '@/componets/modal/device/Device';

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClosePopup = () => setOpen(!open);

  return (
    <div className="page">
      <img src="/images/noize.png" className="noise" />

      <div className={'blur-1'} />
      <div className={'blur-2'} />

      <main className="content">
        <Header handleClosePopup={handleClosePopup} />
        <img
          className="background"
          src="/images/background.png"
          alt="background"
        />
        <div className={'title_container'}>
          <h1 className={'title'}>Motion — включай мир на полную</h1>
          <div className={'subtitle'}>
            Быстрые сервера в актуальных точках мира, стабильное подключение и
            бесплатный 7-ми дневный период по ссылке
          </div>

          <div className="glass_button_container">
            <button
              className="glass_button"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
            >
              Подключить
            </button>

            <img
              width={109}
              height={19}
              src={'/images/systems.svg'}
              className="glass_button_icons"
            />
          </div>

          {/*<div className={"glass_button_container"}>*/}
          {/*  <button className={"glass_button"} disabled>*/}
          {/*  Подключить*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </main>

      <Device state={open} handleClosePopup={handleClosePopup} />
    </div>
  );
}
