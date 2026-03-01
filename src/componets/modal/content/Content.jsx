import React from 'react';
import styles from './content.module.css';

export const Content = (props) => {
  const { isContentOpen, handleContentPopupClose } = props;

  return (
    <div
      className={`${styles.layer} ${!isContentOpen ? styles.onClose : ''}`}
      onClick={handleContentPopupClose}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.font_bold}>Ой, вы у нас первый раз!</div>

        <div className={styles.font_regular}>
          <span className={styles.font_SemiBold}>Важно: </span>
          сервис работает в Telegram. Если у вас возникли проблемы с доступом,
          добавьте наш <span className={styles.font_SemiBold}>бесплатный</span> Telegram Proxy.
        </div>

        <div className={styles.font_regular}>
          Всё просто, просто нажмите на кнопку ниже и включите прокси.
        </div>

        <div className={styles.font_medium}>
          Для отключения:
          — Настройки → Прокси → Выключить
        </div>

        <div className={styles.button_container}>
          <button
            onClick={() => (window.location.href = 'https://t.me/motionvpnbot')}
            className={styles.storiesButton}
            type="button"
          >
            Добавить прокси
            <img
              width={20}
              height={20}
              src={'/images/device/mobile/lineicons_telegram.svg'}
              alt="telegram"
            />
          </button>

          <button
            onClick={() =>
              (window.location.href =
                'https://t.me/proxy?server=proxyone.motion-vpn.com&port=8443&secret=dd5ed2453a7a0eec957d37050b29cc640e')
            }
            className={styles.storiesButton}
            type="button"
          >
            Далее
            <img width={15} height={15} src={'/images/Vector.svg'} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};
