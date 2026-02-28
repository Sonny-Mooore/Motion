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

  return (
    <>
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
          <a href="/" className={styles.menuLogo} onClick={(e) => { e.preventDefault(); go('/'); }}>
            <img src="/images/logo.svg" width={112} height={22} alt="Motion" />
          </a>
          <div className={styles.menuIcons}>
            <button
              type="button"
              className={styles.menuIconBtn}
              onClick={() => goExternal('https://t.me/MotionSize')}
              aria-label="Канал Telegram"
            >
              <img src="/images/robot.svg" alt="" />
            </button>
            <button
              type="button"
              className={styles.menuIconBtn}
              onClick={() => goExternal('https://t.me/motionvpnbot')}
              aria-label="Бот Telegram"
            >
              <img src="/images/tg.svg" alt="" />
            </button>
            <button
              type="button"
              className={styles.menuIconBtn}
              onClick={onClose}
              aria-label="Закрыть меню"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 1)" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
                <line x1="4" y1="12" x2="20" y2="12" />
              </svg>
            </button>
          </div>
        </div>

        <nav>
          <h2 className={styles.sectionTitle}>Навигация</h2>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <span role="button" tabIndex={0} className={styles.navLink} onClick={() => go('/')} onKeyDown={(e) => e.key === 'Enter' && go('/')}>
                Главная
              </span>
            </li>
            <li className={styles.navItem}>
              <span role="button" tabIndex={0} className={styles.navLink} onClick={() => { onInstructions?.(); onClose(); }} onKeyDown={(e) => e.key === 'Enter' && (onInstructions?.(), onClose())}>
                Инструкции
              </span>
            </li>
            <li className={styles.navItem}>
              <span role="button" tabIndex={0} className={styles.navLink} onClick={() => go('/terms')} onKeyDown={(e) => e.key === 'Enter' && go('/terms')}>
                Правила использования
              </span>
            </li>
            <li className={styles.navItem}>
              <span role="button" tabIndex={0} className={styles.navLink} onClick={() => go('/privacy')} onKeyDown={(e) => e.key === 'Enter' && go('/privacy')}>
                Политика конфиденциальности
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
                <img src="/images/tg.svg" alt="" />
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
                <img src="/images/robot.svg" alt="" />
                Бот Telegram
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default BurgerMenu;
