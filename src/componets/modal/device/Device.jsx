import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './device.module.css';
import {router} from "next/client";

const Device = (props) => {
  const { state, handleClosePopup } = props;

  const [instructions, setInstructionsOpen] = useState(false);

  // ✅ теперь у слайда может быть видео ИЛИ картинка
  // hasImage: true -> показываем картинку вместо видео
  // imageSrc: путь к картинке
  // imageDuration: длительность показа картинки (сек), чтобы прогресс шёл и автопереключение работало
  const videos = [
    {
      src: '10sec.mp4',
      title: 'Что, если у меня не грузит Telegram?',
      hasImage: true,
      imageSrc: '/images/device/mobile/1-image.png',
      imageDuration: 6,
      subTitle:
        'У вас не работает Telegram? Добавьте наш бесплатный прокси (можно добавить только при наличии Telegram на девайсе).',
    },
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
  const imageTimerRef = useRef(null);

  const currentSlide = videos[current];
  const isImageSlide = !!currentSlide?.hasImage;

  // сбрасываем прогресс при смене слайда
  useEffect(() => {
    setProgress(0);
    setDuration(0);
  }, [current]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
  }, [videos.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  // ✅ управление видео: не пытаемся play() на слайде-картинке
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // если сейчас картинка — стопаем видео (если вдруг было)
    if (isImageSlide) {
      try {
        video.pause();
      } catch {}
      return;
    }

    if (isPaused) {
      video.pause();
    } else {
      const p = video.play();
      if (p?.catch) p.catch(() => {});
    }
  }, [isPaused, current, isImageSlide]);

  // ✅ таймер прогресса для слайда-картинки (и автопереход)
  useEffect(() => {
    // чистим предыдущий таймер
    if (imageTimerRef.current) {
      clearInterval(imageTimerRef.current);
      imageTimerRef.current = null;
    }

    if (!isImageSlide) return;

    const d = Number(currentSlide?.imageDuration) || 6;
    setDuration(d);

    let start = Date.now();
    let pausedAt = null;

    imageTimerRef.current = setInterval(() => {
      if (isPaused) {
        if (!pausedAt) pausedAt = Date.now();
        return;
      }

      if (pausedAt) {
        // сдвигаем start на длительность паузы
        start += Date.now() - pausedAt;
        pausedAt = null;
      }

      const elapsedSec = (Date.now() - start) / 1000;
      const pct = Math.min(100, (elapsedSec / d) * 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(imageTimerRef.current);
        imageTimerRef.current = null;
        goNext();
      }
    }, 40);

    return () => {
      if (imageTimerRef.current) {
        clearInterval(imageTimerRef.current);
        imageTimerRef.current = null;
      }
    };
  }, [current, isImageSlide, isPaused, goNext, currentSlide?.imageDuration]);

  const handleLoadedMetadata = (e) => {
    const d = e.currentTarget.duration;
    if (Number.isFinite(d) && d > 0) setDuration(d);
  };

  const handleTimeUpdate = (e) => {
    if (isImageSlide) return; // на картинке прогресс ведёт таймер
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
          <div onClick={() => setInstructionsOpen(true)} className={styles.main}>
            <img src="/images/device/pc.svg" alt="pc" />
            <div className={styles.text}>Как установить на компьютер?</div>
          </div>
          <div className={styles.column}>
            <img src="/images/device/mobile.svg" alt="mobile" />
          </div>
        </div>
      ) : null}

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

            {/* ✅ фикс: item тут не существует, используем videos[current] */}
            {isImageSlide ? (
              <img
                src={currentSlide.imageSrc}
                alt=""
                className={styles.storyVideo} // чтобы занимало весь экран как видео (object-fit можно задать в css)
              />
            ) : (
              <video
                ref={videoRef}
                key={current}
                src={`/images/device/mobile/${currentSlide.src}`}
                muted
                autoPlay
                playsInline
                preload="metadata"
                className={styles.storyVideo}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
              />
            )}
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.overlay} />
              <div className={styles.textContainer}>
                <div className={styles.storiesTitle}>{currentSlide.title}</div>
                <div className={styles.storiesText}>{currentSlide.subTitle}</div>

                <button onClick={()=> router.push("https://t.me/proxy?server=proxyone.motion-vpn.com&port=8443&secret=dd5ed2453a7a0eec957d37050b29cc640e") } className={styles.storiesButton} type="button">
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