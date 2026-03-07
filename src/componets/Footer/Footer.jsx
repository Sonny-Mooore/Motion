import React from 'react';

const Footer = () => {
  return (<div className={'footer'}>
    <div className={'footer_column'}>
      <img src="/images/footer/footer_logo.svg" alt="" />
      <img src="/images/footer/Copyright.svg" alt="" />
    </div>
    <div className={'row'}>
      <div className={'footer_column'}>
        <div className={'footer_title'}>
          Инструкция
        </div>
        <div className={'footer_nav'}>
          На телефон
        </div>
        <div className={'footer_nav'}>
          На компьютер
        </div>
      </div>
      <div className={'footer_column'}>
        <div className={'footer_title'}>
          Навигация
        </div>
        <div className={'footer_nav'}>
          Главная
        </div>
        <div className={'footer_nav'}>
          Тарифы
        </div>
        <div className={'footer_nav'}>
          Устройства
        </div>
        <div className={'footer_nav'}>
          FAQ
        </div>
      </div>
      <div className={'footer_column'}>
        <div className={'footer_title'}>
          О проекте
        </div>
        <div className={'footer_nav'}>
          Политика конфиденциальности
        </div>
        <div className={'footer_nav'}>
          Условия использования
        </div>
      </div>
      <div className={'footer_column'}>
        <div className={'footer_title'}>
          Поддержка
        </div>
        <div className={'footer_nav'}>
          <img src="/images/faq/tg.svg" alt="" width={18} height={18} />
          Telegram
        </div>

      </div>
    </div>
  </div>);
};
export default Footer;
