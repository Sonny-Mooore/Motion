import React from 'react';
import { router } from 'next/client';

const Footer = () => {
  return (<div className={'footer'}>
    <div className={'footer_column'}>
      <img src="/images/footer/footer_logo.svg" alt="" />
      <img src="/images/footer/Copyright.svg" alt="" />
    </div>
    <div className={'row_footer'}>
      <div className={'footer_column'}>
        <div className={'footer_title'}>
          Инструкция
        </div>
        <div onClick={() => router.push('https://t.me/motionhelper')} className={'footer_nav'}>
          На телефон
        </div>
        <div onClick={() => router.push('https://t.me/MotionSize/39')} className={'footer_nav'}>
          На компьютер
        </div>
      </div>
      <div className={'footer_column'}>
        <div className={'footer_title'}>
          Навигация
        </div>
        <div className={'footer_nav'}
             onClick={() => {
               document.getElementById('nav')?.scrollIntoView({
                 behavior: 'smooth',
               });
             }}>
          Главная
        </div>
        <div onClick={() => {
          document.getElementById('tariffs')?.scrollIntoView({
            behavior: 'smooth',
          });
        }} className={'footer_nav'}>
          Тарифы
        </div>
        <div onClick={() => {
          document.getElementById('devices')?.scrollIntoView({
            behavior: 'smooth',
          });
        }} className={'footer_nav'}>
          Устройства
        </div>
        <div onClick={() => {
          document.getElementById('faq')?.scrollIntoView({
            behavior: 'smooth',
          });
        }} className={'footer_nav'}>
          FAQ
        </div>
      </div>
      <div className={'footer_column'}>
        <div className={'footer_title'}>
          О проекте
        </div>
        <div onClick={() => router.push('/terms')}className={'footer_nav'}>
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
