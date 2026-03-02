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

  return (
    <>
      <div className="header">
        <div className={'logo_bg'} onClick={() => go('/')}>
          <img src="/images/logo.svg" width={112} height={22} alt="loog" />
        </div>

        <div className={'nav_bg'}>
          <p
            onClick={() => go('/')}
            className={`nav_item ${isActive('/') ? 'nav_item_is_Active' : ''}`}
          >
            Главная
          </p>

          <p
            onClick={() => {
              handleClosePopup?.();
            }}
            className={`nav_item`}
          >
            Инструкции
          </p>

          <p
            onClick={() => router.push('/terms')}
            className={`nav_item ${isActive('/terms') ? 'nav_item_is_Active' : ''}`}
          >
            Правила использования
          </p>

          <p
            onClick={() => go('/privacy')}
            className={`nav_item ${isActive('/privacy') ? 'nav_item_is_Active' : ''}`}
          >
            Политика конфиденциальности
          </p>
        </div>

        <div className="icon_button_container">
          <button
            type="button"
            className="icon_btn"
            onClick={() => router.push('https://t.me/MotionSize')}
            aria-label="MotionSize"
          >
            <img src={'/images/robot.svg'}  alt="" />
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

          <button
            type="button"
            className="burger_btn"
            onClick={openBurger}
            aria-label="Открыть меню"
          >
            <img src="/images/burger.svg" alt="" />
          </button>
        </div>
      </div>

      <BurgerMenu
        isOpen={isBurgerOpen}
        onClose={closeBurger}
        onInstructions={handleClosePopup}
      />
    </>
  );
};

export default Header;
