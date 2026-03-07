import Header from '@/componets/Header/Header';
import React, { useState } from 'react';
import Head from 'next/head';
import Device from '@/componets/modal/device/Device';
import { Content } from '@/componets/modal/content/Content';
import Footer from '@/componets/Footer/Footer';

const FIRST_VISIT_KEY = 'motion_first_visit_done';

// function FaqItem({ defaultOpen }) {
//   const [faqOpen, setFaqOpen] = useState(!!defaultOpen);
//   return (
//     <>
//       <div className={`faq_item ${faqOpen ? 'faq_item_open' : ''}`}>
//
//         <button
//           type="button"
//           className="faq_question"
//           onClick={() => setFaqOpen(!faqOpen)}
//         >
//           <div className={'faq_question_text'}>Как использовать наш сервис?</div>
//           <img
//             src="/images/faq/button-faq.svg"
//             alt=""
//             width={48}
//             height={48}
//             style={{
//               transform: faqOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//               transition: 'transform 0.3s ease',
//             }}
//           />
//         </button>
//         <div className={`${faqOpen ? 'line' : ''}`} />
//
//         {faqOpen &&
//           <div className="faq_answer">
//             <div className={'faq_title'}>1. Откройте Telegram</div>
//
//             <div className={'faq_answer_row_container'}>
//               <img src="/images/strelka.svg" alt="" />
//               <div className={'first_stage'}>
//                 У вас не работает Telegram? Добавьте наш бесплатный прокси (можно добавить только при наличии Telegram
//                 на девайсе).
//               </div>
//             </div>
//             <button
//               onMouseMove={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
//                 e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
//               }}
//               className={'faq_button'}>
//               <img width={18} height={18} src="/images/faq/tg.svg" alt="" />
//               Добавить прокси
//             </button>
//             <div className={'faq_title margin_32'}>2. Откройте Telegram и перейдите в бота</div>
//             <button
//               onMouseMove={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
//                 e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
//               }}
//               className={'faq_button width_179'}>
//               <img width={18} height={18} src="/images/faq/logo.svg" alt="" />
//               Motion
//               <img className={'strelka '} width={18} height={18} src="/images/strelka.svg" alt="" />
//
//             </button>
//             <div className={'faq_title margin_32'}>3. Откройте Telegram и перейдите в бота</div>
//             <img width={725} height={253} src="/images/faq/1-faq-stage.png" alt="" />
//             <div className={'faq_title margin_32'}>4. Нажмите подключить устройство</div>
//             <img width={725} height={253} src="/images/faq/2-faq-stage.png" alt="" />
//             <div className={'faq_title margin_32'}>5. Выберите приложение и нажмите кнопку установки</div>
//             <img width={725} height={410} src="/images/faq/3-faq-stage.png" alt="" />
//             <div className={'faq_title margin_32'}>6. После установки приложения нажмите “Добавить подписку”</div>
//             <img width={725} height={410} src="/images/faq/4-faq-stage.png" alt="" />
//             <div className={'faq_title margin_32'}>7. Готово! Можете включить и использовать сервис.</div>
//
//           </div>
//         }
//       </div>
//     </>
//
//   );
// }

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

  const [faqOpen, setFaqOpen] = useState(false);
  const [faqSecondOpen, setFaqSecondOpen] = useState(false);

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
      <div className="blur-3" />
      <div className="blur-4" />
      <div className="blur-5" />
      {/*<div className="blur-6" />*/}
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
                  src="/images/phones.png"
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
                <button
                  type="button"
                  className="tariff_free_btn"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                  }}
                >
                  Получить бесплатно →
                </button>
              </div>
            </div>

            <div className="tariffs_paid_wrap">
              {[{
                icon: 'Icons-2.svg',
                name: 'Премиум тариф',
                margin: 94,
                desc: 'Идеальный тарифный план для повседневных потребностей.',
                features: [{
                  icon: '/images/tariffs/download.svg',
                  text: 'Безлимит',
                }, { icon: '/images/tariffs/phone.svg', text: '4 устройства' }, {
                  icon: '/images/tariffs/done-all.svg',
                  text: 'Все сервера',
                }],
                price: 'от 239 Р / мес',
              }, {
                icon: 'Icons-3.svg',
                margin: 52,
                name: 'Семейный тариф',
                desc: 'Тариф для использования легких нейросетей и серфинга интернета с лимитом на ГБ в месяц.',
                features: [{
                  icon: '/images/tariffs/download.svg',
                  text: 'Безлимит',
                }, { icon: '/images/tariffs/phone.svg', text: '4 устройства' }, {
                  icon: '/images/tariffs/done-all.svg',
                  text: 'Все сервера',
                }],
                price: 'от 389 Р / мес',
              }, {
                icon: 'Icons-4.svg',
                margin: 94,
                name: 'Студенческий тариф',
                desc: 'У вас большая семья? Раздайте сервис всем, они будут рады',
                features: [{
                  icon: '/images/tariffs/download.svg',
                  text: 'Безлимит',
                }, { icon: '/images/tariffs/phone.svg', text: '4 устройства' }, {
                  icon: '/images/tariffs/done-all.svg',
                  text: 'Все сервера',
                }],
                price: 'от 99 Р / мес',
              }, {
                icon: 'Icons-5.svg',
                name: 'Ежедневный тариф',
                margin: 94,
                desc: 'Идеальный тарифный план для повседневных потребностей.',
                features: [{
                  icon: '/images/tariffs/download.svg',
                  text: 'Безлимит',
                }, { icon: '/images/tariffs/phone.svg', text: '4 устройства' }, {
                  icon: '/images/tariffs/done-all.svg',
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
                    {t.features.map((f) => (<div key={f.text} className="tariff_paid_feature">
                      <img width={22} height={22} alt={''} src={f.icon} />
                      <span>{f.text}</span>
                    </div>))}
                  </ul>
                  <button
                    type="button"
                    className="tariff_paid_btn"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                    }}
                  >
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
              }, {
                label: 'Android TV', maxWidth: true, icon: '/images/devices/desktop.svg',
              }, {
                label: 'Apple TV', maxWidth: true, icon: '/images/devices/desktop.svg',
              }, {
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
              {[{
                icon: 'locker.svg',
                title: 'Конфиденциальность и защита данных',
                text: 'Для обеспечения безопасности и анонимности ваших интернет-соединений мы применяем современные технологии, такие как VLESS и XTLS-Reality.',
              }, {
                icon: 'youtube.svg',
                title: 'У нас нет рекламы на YouTube',
                text: 'Мы модифицировали почти каждый сервер, который позволяет использовать YouTube без рекламы и обходить любые блокировки.',
              }, {
                icon: 'grom.svg',
                image: '/images/zoom.svg',
                title: 'Удобный личный кабинет',
                text: 'У нас современный и простой личный кабинет с обширным функционалом для любого вашего устройства.',
              }, {
                icon: '2-people.svg',
                title: 'Реферальная программа',
                text: 'Много друзей? Приглашайте их в наш бот и получайте вознаграждение. Чтобы присоединиться к программе, перейдите в  приложение, скопируйте ваше приглашение в профиле и отправьте его другу. ',
              }].map((a) => (<div className="advantages_card_conatainer">
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
                {a.image && <img className={'advantages_paid_image'} width={318} height={245} src={a.image} alt="" />}


              </div>))}
            </div>
          </section>

          <section id="faq" className="section faq_section">
            <h2 className="section_title">FAQ</h2>
            <div className="faq_list ">
              <div className={`faq_item ${faqOpen ? 'faq_item_open' : ''}`}>
                <button
                  type="button"
                  className="faq_question"
                  onClick={() => setFaqOpen(!faqOpen)}
                >
                  <div className={'faq_question_text'}>Как использовать наш сервис?</div>
                  <img
                    src="/images/faq/button-faq.svg"
                    alt=""
                    width={48}
                    height={48}
                    style={{
                      transform: faqOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
                <div className={`${faqOpen ? 'line' : ''}`} />

                {faqOpen && <div className="faq_answer">
                  <div className={'faq_title'}>1. Откройте Telegram</div>

                  <div className={'faq_answer_row_container'}>
                    <img src="/images/strelka.svg" alt="" />
                    <div className={'first_stage'}>
                      У вас не работает Telegram? Добавьте наш бесплатный прокси (можно добавить только при наличии
                      Telegram
                      на девайсе).
                    </div>
                  </div>
                  <button
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                    }}
                    className={'faq_button'}>
                    <img width={18} height={18} src="/images/faq/tg.svg" alt="" />
                    Добавить прокси
                  </button>
                  <div className={'faq_title margin_32'}>2. Откройте Telegram и перейдите в бота</div>
                  <button
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                    }}
                    className={'faq_button width_179'}>
                    <img width={18} height={18} src="/images/faq/logo.svg" alt="" />
                    Motion
                    <img className={'strelka '} width={18} height={18} src="/images/strelka.svg" alt="" />

                  </button>
                  <div className={'faq_title margin_32'}>3. Откройте Telegram и перейдите в бота</div>
                  <img width={725} height={253} src="/images/faq/1-faq-stage.png" alt="" />
                  <div className={'faq_title margin_32'}>4. Нажмите подключить устройство</div>
                  <img width={725} height={253} src="/images/faq/2-faq-stage.png" alt="" />
                  <div className={'faq_title margin_32'}>5. Выберите приложение и нажмите кнопку установки</div>
                  <img width={725} height={410} src="/images/faq/3-faq-stage.png" alt="" />
                  <div className={'faq_title margin_32'}>6. После установки приложения нажмите “Добавить подписку”
                  </div>
                  <img width={725} height={410} src="/images/faq/4-faq-stage.png" alt="" />
                  <div className={'faq_title margin_32'}>7. Готово! Можете включить и использовать сервис.</div>

                </div>}
              </div>
            </div>
            <div className="faq_list faq_margin_top">
              <div className={`faq_item ${faqSecondOpen ? 'faq_item_open' : ''}`}>

                <button
                  type="button"
                  className="faq_question"
                  onClick={() => setFaqSecondOpen(!faqSecondOpen)}
                >
                  <div className={'faq_question_text'}>Мои данные защищены?</div>
                  <img
                    src="/images/faq/button-faq.svg"
                    alt=""
                    width={48}
                    height={48}
                    style={{
                      transform: faqSecondOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
                <div className={`${faqSecondOpen ? 'line' : ''}`} />

                {faqSecondOpen && <div className="faq_answer">

                  <div className={'row_faq'}>
                    Для обеспечения безопасности и анонимности ваших интернет-соединений мы
                    применяем современные технологии, такие как VLESS и XTLS-Reality.
                  </div>
                  <div className={'footer_title margin_32'}>Вот как это функционирует:</div>

                  <div className={'row_faq'}>
                    VLESS — один из самых быстрых и надежных протоколов подключения. Он не позволяет вашему
                    интернет-провайдеру определить, что вы используете VPN, в отличие от устаревших технологий,
                    применяемых в бесплатных и ненадежных сервисах.
                  </div>
                  <div className={'row_faq'}>
                    XTLS-Reality — это дополнительный уровень защиты, который полностью скрывает ваш трафик. Все ваши
                    действия в интернете становятся недоступными для оператора связи. Например, посещение YouTube и
                    Instagram может выглядеть как посещение Rutube и РБК.
                  </div>
                  <div className={'row_faq'}>
                    Отсутствие сбора данных. Мы не собираем никакой информации о ваших действиях в интернете, запросах
                    или использовании трафика.
                  </div>
                  <div className={'row_faq'}>
                    Применяемые нами методы шифрования делают невозможным отслеживание действий пользователя даже для
                    нас. Ваш интернет-провайдер видит только зашифрованные и замаскированные данные.
                  </div>

                  <div className={'faq_title margin_32'}>
                    Технически невозможно украсть данные. Даже если бы мы захотели продать или передать ваши данные, это
                    было бы невозможно из-за сложной системы анонимизации и шифрования. Мы не занимаемся продажей
                    рекламы. Мы финансируем нашу работу исключительно за счет продажи платных подписок, а не за счет
                    продажи личных данных или бесконечных рекламных кампаний, как это делают многие бесплатные и дешевые
                    VPN-сервисы.
                  </div>


                </div>}
              </div>
            </div>

          </section>
        </div>
        <Footer />

      </main>

      <Device state={open} handleClosePopup={handleClosePopup} />;
      <Content
        isContentOpen={isContentOpen}
        handleContentPopupClose={handleContentPopupClose}
      />;
    </div>
  </>);
}
