import Header from '@/componets/Header/Header';
import React, { useState } from 'react';
import Head from 'next/head';
import Device from '@/componets/modal/device/Device';
import { Content } from '@/componets/modal/content/Content';

const FIRST_VISIT_KEY = 'motion_first_visit_done';

function FaqItem({ question, answer, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <>
      <div className={`faq_item ${open ? 'faq_item_open' : ''}`}>
        <button
          type="button"
          className="faq_question"
          onClick={() => setOpen(!open)}
        >
          <span>{question}</span>
          <img
            src="/images/faq/button-faq.svg"
            alt=""
            width={48}
            height={48}
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </button>

      </div>
      {open && <div className="faq_answer">
        <div className={'faq_title'}>1. Откройте Telegram</div>

      </div>
      }
    </>

  );
}

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

  return (<>
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
      <img src="/images/noize.png" className="noise" alt="" />
      <div className="blur-1" />
      <div className="blur-2" />
      <main className="main-wrap">
        <Header handleClosePopup={handleClosePopup} />
        <div className="content">
          <section id="hero" className="hero">
            <div className="hero_row">
              <div className="hero_left">
                <h1 className="hero_title">Motion — включай мир на полную</h1>
                <p className="hero_subtitle">
                  Пользуйся любимыми сервисами на лучшей скорости, даже если у
                  вас «нет сети».
                </p>
                <button
                  onClick={handleConnectClick}
                  className="glass_button hero_cta"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                  }}
                >
                  Подключить
                  <img alt="" src="/images/Vector.svg" />
                </button>
                <div className="hero_features">
                  <p> Доступно на</p>

                  <img alt="" src="/images/systems.svg" />
                </div>
              </div>
              <div className="hero_right">
                <img
                  src="/images/phones.svg"
                  className="hero_phones"
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="section feature_cards">
            <div className="card_feature">
              <img
                width={52}
                height={52}
                src="/images/feature_cards/Icons-4.svg"
                alt=""
              />
              <h3 className="card_feature_title">Высокая скорость</h3>
            </div>
            <div className="card_feature">
              <img
                width={52}
                height={52}
                src="/images/feature_cards/Icons-1.svg"
                alt=""
              />
              <h3 className="card_feature_title">Нет рекламы на YouTube</h3>
            </div>
            <div className="card_feature">
              <img
                width={52}
                height={52}
                src="/images/feature_cards/Icons-2.svg"
                alt=""
              />
              <h3 className="card_feature_title">Удобный интерфейс</h3>
            </div>
            <div className="card_feature">
              <img
                width={52}
                height={52}
                src="/images/feature_cards/Icons-3.svg"
                alt=""
              />
              <h3 className="card_feature_title">
                Супер тарифы от 30 рублей
              </h3>
            </div>
          </section>

          <section id="tariffs" className="section tariffs_section">
            <h2 className="section_title">Тарифы</h2>

            <div className="tariffs_free_wrap">
              <div className="tariff_free_card">
                <div className="tariff_free_header">
                  <img
                    width={52}
                    height={52}
                    src="/images/tariffs/icons-1.svg"
                    alt=""
                  />
                  <h3 className="tariff_free_title">Бесплатный тариф</h3>
                </div>
                <div className={'line'} />
                <p className="tariff_free_desc">
                  7 дней бесплатного доступа для тестирования серверов и
                  личного кабинета
                </p>
                <button type="button" className="tariff_free_btn">
                  Получить бесплатно →
                </button>
              </div>
            </div>

            <div className="tariffs_paid_wrap">
              {[{
                icon: 'Icons-2.svg',
                name: 'Премиум тариф',
                margin: 71,
                desc: 'Идеальный тарифный план для повседневных потребностей.',
                features: [
                  { icon: '↓', text: 'Безлимит' },
                  { icon: '▭', text: '4 устройства' },
                  { icon: '✔', text: 'Все сервера', },
                ],
                price: 'от 239 Р / мес',
              }, {
                icon: 'Icons-3.svg',
                margin: 27,
                name: 'Семейный тариф',
                desc: 'Тариф для использования легких нейросетей и серфинга интернета с лимитом на ГБ в месяц.',
                features: [{ icon: '↓', text: '1 TB' },
                  { icon: '▭', text: '10 устройств' }, {
                    icon: '✔',
                    text: 'Все сервера',
                  }],
                price: 'от 389 Р / мес',
              }, {
                icon: 'Icons-4.svg',
                margin: 71,
                name: 'Студенческий тариф',
                desc: 'У вас большая семья? Раздайте сервис всем, они будут рады',
                features: [{ icon: '↓', text: '25 GB' }, { icon: '▭', text: '2 устройства' }, {
                  icon: '✔',
                  text: 'Все сервера',
                }],
                price: 'от 99 Р / мес',
              }, {
                icon: 'Icons-5.svg',
                name: 'Ежедневный тариф',
                margin: 71,
                desc: 'Идеальный тарифный план для повседневных потребностей.',
                features: [{ icon: '↓', text: 'Безлимит' }, { icon: '▭', text: '1 устройство' }, {
                  icon: '✔',
                  text: 'Все сервера',
                }],
                price: 'от 25 Р / день',
              }].map((t) => (<div key={t.name} className="tariff_paid_card">
                <div className="tariff_paid_header">
                  <img
                    width={52}
                    height={52}
                    src={`/images/tariffs/${t.icon}`}
                    alt=""
                  />
                  <h3 className="tariff_paid_title">{t.name}</h3>
                </div>
                <div className={'line'} />
                <div className={'tariff_paid_desc_container'}>
                  <p className="tariff_paid_desc">{t.desc}</p>
                  <ul
                    style={{ margin: `${t.margin}px 0 32px 0` }}
                    className="tariff_paid_features"
                  >
                    {t.features.map((f) => (<li key={f.text} className="tariff_paid_feature">
                            <span className="tariff_feature_icon">
                              {f.icon}
                            </span>
                      <span>{f.text}</span>
                    </li>))}
                  </ul>
                  <button type="button" className="tariff_paid_btn">
                    {t.price}
                    <img
                      width={14}
                      height={11}
                      src="/images/Vector.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>))}
            </div>
          </section>

          <section id="devices" className="section devices_section">
            <h2 className="section_title">Поддержка устройств</h2>
            <img
              className={'devices_laptop'}
              src="/images/devices/desktop-1.png"
              alt=""
            />

            <div className="devices_stores">
              {[{
                label: 'Android', icon: '/images/devices/android.svg',
              }, {
                label: 'Windows', icon: '/images/devices/windows.svg',
              }, {
                label: 'IOS', icon: '/images/devices/apple.svg',
              }, {
                label: 'macOC', icon: '/images/devices/apple.svg',
              }, {
                label: 'Linux', icon: '/images/devices/linux.svg',
              },
                {
                  label: 'Android TV', maxWidth: true, icon: '/images/devices/desktop.svg',
                },
                {
                  label: 'Apple TV', maxWidth: true, icon: '/images/devices/desktop.svg',
                },
                {
                  label: 'Smart TV', maxWidth: true, icon: '/images/devices/desktop.svg',
                }].map((s) => (
                <div key={s.label} type="button" className={s.maxWidth ? 'store_btn store_btn_max_width' : `store_btn`}>
                  <img
                    width={52}
                    height={52}
                    src={s.icon}
                    alt=""
                  />
                  <span className="device_pill_label">{s.label}</span>
                </div>))}
            </div>
          </section>

          <section id="advantages" className="section advantages_section">
            <h2 className="section_title">Преимущества</h2>
            <div className="advantages_grid">
              {[
                {
                  icon: 'locker.svg',
                  title: 'Конфиденциальность и защита данных',
                  text: 'Для обеспечения безопасности и анонимности ваших интернет-соединений мы применяем современные технологии, такие как VLESS и XTLS-Reality.',
                },
                {
                  icon: 'youtube.svg',
                  title: 'У нас нет рекламы на YouTube',
                  text: 'Мы модифицировали почти каждый сервер, который позволяет использовать YouTube без рекламы и обходить любые блокировки.',
                },
                {
                  icon: 'grom.svg',
                  title: 'Удобный личный кабинет',
                  text: 'У нас современный и простой личный кабинет с обширным функционалом для любого вашего устройства.',
                },
                {
                  icon: '2-people.svg',
                  title: 'Реферальная программа',
                  text: 'Много друзей? Приглашайте их в наш бот и получайте вознаграждение. Чтобы присоединиться к программе, перейдите в  приложение, скопируйте ваше приглашение в профиле и отправьте его другу. ',
                },
              ].map((a) => (
                <div className="advantages_card_conatainer">
                  <div key={a.title} className="advantages_paid_header">
                    <img
                      width={52}
                      height={52}
                      src={`/images/advantages/${a.icon}`}
                      alt=""
                    />
                    <h3 className="advantages_paid_title">{a.title}</h3>
                  </div>
                  <div className={'line'} />
                  <p className="advantages_paid_desc">{a.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="section faq_section">
            <h2 className="section_title">FAQ</h2>
            <div className="faq_list">
              {[{
                q: 'Вопрос 1',
                a: 'Ответ на первый вопрос. Здесь может быть развёрнутое описание и полезная информация для пользователя.',
              }, { q: 'Вопрос 2', a: 'Ответ на второй вопрос.' }, {
                q: 'Вопрос 3', a: 'Ответ на третий вопрос.',
              }, { q: 'Вопрос 4', a: 'Ответ на четвёртый вопрос.' }, {
                q: 'Вопрос 5', a: 'Ответ на пятый вопрос.',
              }].map((item, i) => (
                <FaqItem
                  key={item.q}
                  question={item.q}
                  answer={item.a}
                  defaultOpen={i === 0}
                />))}
            </div>
          </section>
        </div>
      </main>
      <Device state={open} handleClosePopup={handleClosePopup} />;
      <Content
        isContentOpen={isContentOpen}
        handleContentPopupClose={handleContentPopupClose}
      />;
    </div>
  </>)
    ;
}
