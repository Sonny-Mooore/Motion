import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ isOpen, onClose, onInstructions }) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const go = (path) => {
    router.push(path);
    onClose();
  };

  const goExternal = (url) => {
    window.location.href = url;
    onClose();
  };

  return (<>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlay_open : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside
        className={`${styles.panel} ${isOpen ? styles.panel_open : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.menuHeader}>
          <img onClick={(e) => {
            e.preventDefault();
            go('/');
          }} src="/images/logo.svg" width={160} height={58} alt="loog" />
          <div className={styles.menuIcons}>

            <button
              type="button"
              className={styles.menuIconBtn}
              onClick={onClose}
              aria-label="Закрыть меню"
            >
              <img src="/images/burger.svg" alt="" />
            </button>
          </div>
        </div>

        <nav>
          <h2 className={styles.sectionTitle}>Навигация</h2>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <span
                role="button"
                tabIndex={0}
                className={styles.navLink}
                onClick={() => go('/')}
                onKeyDown={(e) => e.key === 'Enter' && go('/')}
              >
                Главная
              </span>
            </li>
            <li className={styles.navItem}>
              <span
                role="button"
                tabIndex={0}
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('tariffs')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                  onClose();
                }}
              >
                Тарифы
              </span>
            </li>
            <li className={styles.navItem}>
              <span
                role="button"
                tabIndex={0}
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('devices')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                  onClose();
                }}
                onKeyDown={(e) => e.key === 'Enter' && go('/terms')}
              >
                 Устройства
              </span>
            </li>
            <li className={styles.navItem}>
              <span
                role="button"
                tabIndex={0}
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('advantages')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                  onClose();
                }}
                onKeyDown={(e) => e.key === 'Enter' && go('/privacy')}
              >
                Приемущества
              </span>
            </li>
            <li className={styles.navItem}>
              <span
                role="button"
                tabIndex={0}
                className={styles.navLink}
                onClick={() => {
                  document.getElementById('faq')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                  onClose();
                }}
                onKeyDown={(e) => e.key === 'Enter' && go('/privacy')}
              >
                FAQ
              </span>
            </li>

          </ul>
        </nav>

        <div>
          <h2 className={styles.sectionTitle}>Поддержка</h2>
          <ul className={styles.supportList}>
            <li className={styles.supportItem}>
              <span
                role="button"
                tabIndex={0}
                className={styles.supportLink}
                onClick={() => goExternal('https://t.me/MotionSize')}
                onKeyDown={(e) => e.key === 'Enter' && goExternal('https://t.me/MotionSize')}
              >
                <img className={styles.tg_icon} src="/images/tg.svg" alt="" />
                <img className={styles.tg_black} src="/images/tg-black.svg" alt="" />
                Канал Telegram
              </span>
            </li>
            <li className={styles.supportItem}>
              <span
                role="button"
                tabIndex={0}
                className={styles.supportLink}
                onClick={() => goExternal('https://t.me/motionvpnbot')}
                onKeyDown={(e) => e.key === 'Enter' && goExternal('https://t.me/motionvpnbot')}
              >
                <img className={styles.robot_icon} src="/images/robot.svg" alt="" />
                <img className={styles.robot_black} src="/images/robot-black.svg" alt="" />
                Бот Telegram
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>);
};

export default BurgerMenu;
