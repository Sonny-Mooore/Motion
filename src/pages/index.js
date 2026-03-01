import Header from '@/componets/Header/Header';
import React, { useState } from 'react';
import Head from 'next/head';
import Device from '@/componets/modal/device/Device';
import { Content } from '@/componets/modal/content/Content';

const FIRST_VISIT_KEY = 'motion_first_visit_done';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const handleContentPopupClose = () => setIsContentOpen(false);
  const handleConnectClick = () => {
    if (typeof window === 'undefined') return;
    const isDone = localStorage.getItem(FIRST_VISIT_KEY) === '1';
    if (!isDone) {
      localStorage.setItem(FIRST_VISIT_KEY, '1');
      setIsContentOpen(true);
      return;
    }
    window.location.href = 'https://t.me/motionvpnbot';
  };

  const handleClosePopup = () => setOpen(!open);

  return (
    <>
      <Head>
        <title>
          Motion VPN — быстрый VPN для TikTok Mod, телефона, ПК и Smart TV
        </title>
        <meta
          name="description"
          content="Motion — быстрый и стабильный VPN-сервис: TikTok Mod с VPN, VPN для телефона, Android, iPhone, ПК, ноутбука и Smart TV. Обход блокировок и замедлений YouTube, Telegram, Discord, Roblox и других сервисов без потери скорости."
        />
        <meta
          name="keywords"
          content="тик ток мод впн, тик ток мод с впн, впн для тик ток мод, vpn для телефона, vpn для пк, vpn для телевизора, vpn для android, vpn для ios, vpn для windows, vpn для mac, обход блокировки ютуб, обход блокировки телеграм, лучший впн, быстрый впн, стабильный впн"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Motion VPN — быстрый VPN для TikTok Mod и всех устройств"
        />
        <meta
          property="og:description"
          content="Быстрые сервера, стабильное подключение и бесплатный пробный период. Рабочий VPN для TikTok Mod, игр и стриминговых сервисов."
        />
        <meta property="og:site_name" content="Motion VPN" />
      </Head>
      <div className="page">
        <img src="/images/noize.png" className="noise" />
        <div className={'blur-1'} />
        <div className={'blur-2'} />
        <main className="content">
          <Header handleClosePopup={handleClosePopup} />
          <img
            className="background"
            src="/images/background.svg"
            alt="background"
          />
          <img
            className="background_mobile"
            src="/images/background_mobile.svg"
            alt="background_mobile"
          />
          <div className={'title_container'}>
            <h1 className={'title'}>Motion — включай мир на полную</h1>
            <div className={'subtitle'}>
              Быстрые сервера в актуальных точках мира, стабильное подключение
              и бесплатный недельный период в два клика
            </div>
            <div className="glass_button_container">
              <button
                onClick={handleConnectClick}
                className="glass_button"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--x', `${x}px`);
                  e.currentTarget.style.setProperty('--y', `${y}px`);
                }}>
                Подключить
                <img alt={''} src={'/images/Vector.svg'} />
              </button>
              <img
                width={109}
                height={19}
                src={'/images/systems.svg'}
                className="glass_button_icons"
              />
            </div>
          </div>
        </main>
        <Device state={open} handleClosePopup={handleClosePopup} />
        <Content
          isContentOpen={isContentOpen}
          handleContentPopupClose={handleContentPopupClose}
        />
      </div>
    </>
  );
}
