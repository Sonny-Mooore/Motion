import Header from '@/componets/Header/Header';
import React, { useState } from 'react';

import styles from './terms.module.css';

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

        <div className={styles.termsWrapper}>
          <div className={styles.font_bold}>Пользовательское соглашение.</div>
          <div className={styles.font_medium}>
            Настоящее Пользовательское соглашение (далее – «Соглашение»)
            является публичной офертой и определяет условия использования
            Telegram-бота MotionVPN (далее – «Бот»), размещенного в мессенджере
            Telegram, между Администрацией Бота (далее – «Администрация») и
            Пользователем (далее – «Пользователь»).
          </div>

          <div className={styles.font_SemiBold_Container}>
            <div className={styles.font_SemiBold}>Предмет соглашения:</div>
            <div className={styles.font_regular}>
              <p>
                <span className={styles.number}> 1.</span> Администрация
                предоставляет Пользователю доступ к Боту и его функционалу на
                условиях, изложенных в настоящем Соглашении.
              </p>
              <p>
                <span className={styles.number}>2.</span> Пользователь,
                используя Бот, подтверждает свое полное и безоговорочное
                согласие с условиями настоящего Соглашения.
              </p>
              <p>
                <span className={styles.number}>3.</span> Настоящее Соглашение
                является юридически обязательным документом.
              </p>
              <p className={styles.font_regular}>
                Описание Бота и его функциональности
              </p>
              <p>
                <span className={styles.number}>1.</span> Бот MotionVPN
                предназначен для оказания услуг комфортного использования сети,
                улучшения и расширения доступных сайтов.
              </p>
              <p>
                <span className={styles.number}>2.</span> Перечень функций и
                возможностей Бота может быть изменен Администрацией без
                предварительного уведомления Пользователя.
              </p>
            </div>
          </div>

          <div className={styles.font_SemiBold_Container}>
            <div className={styles.font_SemiBold}>
              Правила использования Бота.
            </div>
            <div className={styles.font_regular}>
              <p>
                <span className={styles.number}>1.</span> Пользователь обязуется
                использовать Бот исключительно в соответствии с его целевым
                назначением и в рамках действующего законодательства.
              </p>
              <p>
                <span className={styles.number}>2.</span> Пользователь не имеет
                права: Пытаться получить несанкционированный доступ к
                информации, содержащейся в Боте. Использовать Бот для
                распространения вредоносного программного обеспечения, спама или
                другой незаконной информации. Вмешиваться в работу Бота,
                изменять его код или функциональность. Нарушать права третьих
                лиц при использовании Бота.
              </p>
              <p>
                <span className={styles.number}>3.</span> Администрация
                оставляет за собой право ограничить или прекратить доступ
                Пользователя к Боту в случае нарушения им условий настоящего
                Соглашения.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
