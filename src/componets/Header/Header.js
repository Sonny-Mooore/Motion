import React from 'react';

const Header = (props) => {
  const { handleClosePopup } = props;

  return (
    <div className="header">
      <div className={'logo_bg'}>
        <img src="/images/logo.svg" width={112} height={22} alt="loog" />
      </div>

      <div className={'nav_bg'}>
        <p className={'nav_item'}>Главная</p>
        <p onClick={handleClosePopup} className={'nav_item'}>
          Инструкции
        </p>
        <p className={'nav_item'}>Правила использования</p>
        <p className={'nav_item'}>Политика кондифициальности</p>
      </div>

      <img src={'/images/robot.svg'} className={'robot'} />
      <img src={'/images/tg.svg'} className={'tg'} />
    </div>
  );
};

export default Header;
