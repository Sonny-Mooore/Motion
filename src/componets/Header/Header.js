import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = (props) => {
  const { handleClosePopup } = props;
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const router = useRouter();
  const go = (path) => router.push(path);
  const isActive = (path) => router.pathname === path;
  const openBurger = () => setIsBurgerOpen(true);
  const closeBurger = () => setIsBurgerOpen(false);

  return (<>
    <div id={'nav'} className="header">
      <div className={'logo_bg'}>
        <img  className={"logo_header"} src="/images/logo.svg" width={113} height={22} alt="loog" />

      </div>
      <div className={'nav_bg'}>
        <p
          onClick={() => router.push('/')}
          className={`nav_item `}
        >
          Главная
        </p>
        <p
          className={`nav_item`}
          onClick={() => {
            document.getElementById('tariffs')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Тарифы
        </p>
        <p
          className={`nav_item`}
          onClick={() => {
            document.getElementById('devices')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Устройства
        </p>
        <p
          onClick={() => {
            document.getElementById('advantages')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          className={`nav_item`}
        >
          Приемущества
        </p>
        <p
          className={`nav_item`}
          onClick={() => {
            document.getElementById('faq')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          FAQ
        </p>
      </div>
      <div className="icon_button_container">
        <button
          type="button"
          className="icon_btn"
          onClick={() => router.push('https://t.me/MotionSize')}
          aria-label="MotionSize"
        >
          <img src={'/images/robot.svg'} alt="" />
        </button>

        <button
          type="button"
          className="icon_btn"
          onClick={() => router.push('https://t.me/MotionSize')}
          aria-label="MotionSize"
        >
          <img
            onClick={() => router.push('https://t.me/motionvpnbot')}
            src={'/images/tg.svg'}
            alt=""
          />
        </button>

        {/*<button*/}
        {/*  type="button"*/}
        {/*  className="burger_btn"*/}
        {/*  onClick={openBurger}*/}
        {/*  aria-label="Открыть меню"*/}
        {/*>*/}
        {/*  <img src="/images/burger.svg" alt="" />*/}
        {/*</button>*/}
      </div>
    </div>

    {/*<BurgerMenu*/}
    {/*  isOpen={isBurgerOpen}*/}
    {/*  onClose={closeBurger}*/}
    {/*  onInstructions={handleClosePopup}*/}
    {/*/>*/}
  </>);
};

export default Header;
