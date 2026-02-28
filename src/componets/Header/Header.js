import React from 'react';
import { useRouter } from 'next/router';

const Header = (props) => {
  const { handleClosePopup } = props;

  const router = useRouter();

  const go = (path) => router.push(path);
  const isActive = (path) => router.pathname === path;

  return (
    <div className="header">
      <div className={'logo_bg'} onClick={() => go('/')}>
        <img src="/images/logo.svg" width={112} height={22} alt="loog" />
      </div>

      <div className={'nav_bg'}>
        <p
          // onClick={() => go('/')}
          className={`nav_item ${isActive('/') ? 'nav_item_is_Active' : ''}`}
        >
          Главная
        </p>

        <p
          onClick={() => {
            handleClosePopup?.();
            // если инструкции — это отдельная страница, поменяй на нужный путь:
            // go('/instructions');
          }}
          className={`nav_item ${isActive('/instructions') ? 'nav_item_is_Active' : ''}`}
        >
          Инструкции
        </p>

        <p
          // onClick={() => go('/terms')}
          className={`nav_item ${isActive('/terms') ? 'nav_item_is_Active' : ''}`}
        >
          Правила использования
        </p>

        <p
          // onClick={() => go('/privacy')}
          className={`nav_item ${isActive('/privacy') ? 'nav_item_is_Active' : ''}`}
        >
          Политика кондифициальности
        </p>
      </div>

      <img src={'/images/robot.svg'} className={'robot'} />
      <img src={'/images/tg.svg'} className={'tg'} />
    </div>
  );
};

export default Header;