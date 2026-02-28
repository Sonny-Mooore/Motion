import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './device.module.css';

const Device = (props) => {
  const { state, handleClosePopup } = props;

  const [instructions, setInstructionsOpen] = useState(false);

  const videos = [
    {
      src: '10sec.mp4',
      title: 'Что, если у меня не грузит Telegram?',
      subTitle:
        'У вас не работает Telegram? Добавьте наш бесплатный прокси (можно добавить только при наличии Telegram на девайсе).',
    },
    {
      src: '5sec.mp4',
      title: 'Зайдите в Телеграм бота',
      subTitle: 'Нажмите старт и открыть меню чтобы попасть в личный кабинет',
    },
    {
      src: '7sec.mp4',
      title: 'Активируйте бесплатную подписку на 7 дней',
      subTitle:
        'Просто нажимайте единственную яркую кнопку в середине — Активировать бесплатно.',
    },
    {
      src: '8.mp4',
      title: 'Пару моментов до подключения',
      subTitle:
        'Перейдите в подключить устройства, сайт сам поймёт какое у вас устройство.',
    },
    {
      src: '3.mp4',
      title: 'Выбор устройства',
      subTitle: 'Справа сверху выберите устройство, если вам нужно',
    },
    {
      src: '15sec.mp4',
      title: 'Скачайте приложение',
      subTitle:
        'На выбор может быть две кнопки, нажмите каждую, если скачать с одной ссылки не выходит',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    setProgress(0);
    setDuration(0);
  }, [current]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPaused) {
      video.pause();
    } else {
      const p = video.play();
      if (p?.catch) p.catch(() => {});
    }
  }, [isPaused, current]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
  }, [videos.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const handleLoadedMetadata = (e) => {
    const d = e.currentTarget.duration;
    if (Number.isFinite(d) && d > 0) setDuration(d);
  };

  const handleTimeUpdate = (e) => {
    const v = e.currentTarget;
    const d = v.duration || duration;

    if (!Number.isFinite(d) || d <= 0) return;

    const percent = (v.currentTime / d) * 100;
    setProgress(percent);
  };

  const handleEnded = () => {
    setProgress(100);
    goNext();
  };

  const handleLayerClick = (e) => {
    if (e.target === e.currentTarget) handleClosePopup();
  };

  const handleHoldStart = () => setIsPaused(true);
  const handleHoldEnd = () => setIsPaused(false);

  // универсальный clientX для mouse/touch
  const getClientX = (e) => {
    if (e.touches?.[0]) return e.touches[0].clientX;
    if (e.changedTouches?.[0]) return e.changedTouches[0].clientX;
    return e.clientX;
  };

  const handleTap = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = getClientX(e);
    if (!Number.isFinite(clientX)) return;

    const x = clientX - rect.left;
    const half = rect.width / 2;

    if (x < half) goPrev();
    else goNext();
  };

  return (
    <div
      className={`${styles.layer} ${!state ? styles.onClose : ''}`}
      onClick={handleLayerClick}
    >
      {!instructions ? (
        <div className={styles.wrapper}>
          <div
            onClick={() => setInstructionsOpen(true)}
            className={styles.main}
          >
            <img src="/images/device/pc.svg" alt="pc" />
            <div className={styles.text}>Как установить на компьютер?</div>
          </div>
          <div className={styles.column}>
            <img src="/images/device/mobile.svg" alt="mobile" />
          </div>
        </div>
      ) : null}

      {/*<div className={styles.vector_left}>*/}
      {/*  <img*/}
      {/*    height={24}*/}
      {/*    width={24}*/}
      {/*    src={'/images/device/mobile/Vector-left.svg'}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<div className={styles.vector_right}>*/}
      {/*  <img*/}
      {/*    height={24}*/}
      {/*    width={24}*/}
      {/*    src={'/images/device/mobile/Vector-right.svg'}*/}
      {/*  />*/}
      {/*</div>*/}

      {instructions ? (
        <div className={styles.mobileWrapper}>
          <div
            className={styles.storiesBg}
            onMouseDown={handleHoldStart}
            onMouseUp={handleHoldEnd}
            onMouseLeave={handleHoldEnd}
            onTouchStart={handleHoldStart}
            onTouchEnd={handleHoldEnd}
            onClick={handleTap}
          >
            <div className={styles.progressWrapper}>
              {videos.map((_, index) => {
                let width = 0;
                if (index < current) width = 100;
                if (index === current) width = progress;

                return (
                  <div key={index} className={styles.progressBarBg}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${width}%` }}
                    />
                  </div>
                );
              })}
            </div>

            <div className={styles.topGradient} />

            <video
              ref={videoRef}
              key={current}
              src={`/images/device/mobile/${videos[current].src}`}
              muted
              autoPlay
              playsInline
              preload="metadata"
              className={styles.storyVideo}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            />
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.overlay} />
              <div className={styles.textContainer}>
                <div className={styles.storiesTitle}>
                  {videos[current].title}
                </div>
                <div className={styles.storiesText}>
                  {videos[current].subTitle}
                </div>

                <button className={styles.storiesButton} type="button">
                  Добавить прокси
                  <img
                    width={15}
                    height={12}
                    src={'/images/device/mobile/lineicons_telegram.svg'}
                    alt="telegram"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Device;
